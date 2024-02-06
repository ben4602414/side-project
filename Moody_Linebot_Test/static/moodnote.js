let mediaRecorder;
let audioChunks = [];
let isRecording = false;
let recordingTimer;
let recordingTimeElapsed = 0;
let startTime;
let audioBlob = null; // 全局變量用來暫存錄音 Blob


function toggleRecording() {
  if (!isRecording) {
    startRecording();
  } else {
    stopRecording();
  }
}

function startRecording() {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = e => {
        audioChunks.push(e.data);
      };

       // 在 mediaRecorder 開始錄音後啟動計時器
      mediaRecorder.onstart = () => {
        startTime = performance.now(); 
        recordingTimer = setInterval(updateRecordingTime, 100);
        document.getElementById('recordingStatus').textContent = '🔴'; // 錄音時顯示紅點符號
      };

      mediaRecorder.start();
      isRecording = true;
    })
    .catch(e => {
      console.error('錯誤捕捉:', e);    //顯示錯誤訊息
    });
}

function stopRecording() {
  if (!mediaRecorder) return; // 確保 mediaRecorder 已初始化

  mediaRecorder.stop();
  clearInterval(recordingTimer); // 停止計時
  mediaRecorder.onstop = () => {
    audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = document.getElementById('audioPlayback');
    audio.src = audioUrl;
    audioChunks = [];
    isRecording = false;
    document.getElementById('recordingStatus').textContent = '⏹️'; // 停止錄音時顯示停止符號
  };
}

document.getElementById('audioUploadForm').addEventListener('submit', function(event) {
  event.preventDefault(); // 防止表單的默認提交行為
  console.log('成功觸發audioUploadForm')     //  測試用
  if (audioBlob) {
    sendRecordingToServer(audioBlob);
  } else {
    alert("沒有錄音可供上傳！");
  }
});

function sendRecordingToServer(audioBlob) {
  const formData = new FormData();
  formData.append('audioFile', audioBlob, 'recording.wav');

  console.log('成功觸發二次傳送') //測試用

  fetch('/submit', { 
    method: 'POST',
    body: formData
  }).then(response => response.json())
    .then(data => {
      console.log('錄音上傳成功', data);
    })
    .catch(error => {
      console.error('錄音上傳失敗:', error);
    });
}

function updateRecordingTime() {
  const elapsedTime = performance.now() - startTime;
  document.getElementById('recordingTime').textContent = Math.floor(elapsedTime / 1000);
}




