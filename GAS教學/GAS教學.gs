var spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lunch_data");
//統整每個填寫者的資料
//Step1. 找出填了相同餐廳的人
function Main(){
  //填表人email
  spreadsheet.getRange('B2').activate();
  var email = spreadsheet.getSelection().getNextDataRange(SpreadsheetApp.Direction.DOWN).activate().getValues();
  
  //填表人口味選擇
  var data_length = email.length;
  var style = spreadsheet.getRange(2,5,data_length,1).getValues();
  
  //從口味選擇去找相對應的口味表格
  var each_style = ["西式", "中式", "日式",	"南洋",	"輕食",	"素食"];

  //Step2. 幫沒想法的人，隨機找一個類別，並列出那些人想吃的餐廳
  Random_NoIdea(style)

  //更新現狀-口味選擇，每個人都有選口味
  var style = spreadsheet.getRange(2,5,data_length,1).getValues();

  //Step3. 依照每個當事人的口味，抓取相同口味人的資料
  //從第一個填表人開始確認資料
  for(let i=0;i<data_length;i++){
    //確認填表人的口味是選哪一個
    for (let x=0;x<each_style.length;x++){
      if (style[i][0] == each_style[x]){
        meal_data = GetRange(each_style[x])
        Logger.log(i)
        //Step4. 寄出信件，email:當事人的email｜主題：今天想吃XX餐點的人｜內容：也想吃相同口味 的 他人姓名、email、餐廳
        Logger.log(email[i][0])
        Logger.log(NewData(meal_data))
        Logger.log(Utilities.formatString("今天想吃%s餐點的人",each_style[x]))
        // SendEmail(email[i][0],"今天想吃西式餐點的人",NewData(meal_data))
      }
    }
  }
}

//Step2.完全沒想法
//根據今天填寫有想法的人，隨機找一個類別，並列出那些人想吃的餐廳
function Random_NoIdea(style){
  //移除重複
  var new_style = Removedupe(style);
  //找出口味選擇是空白的row_number
  for(let i=0;i<style.length;i++){
    if(style[i][0] == ""){
      //隨機抽出一個
      spreadsheet.getRange(i+2,5).setValue(new_style[Math.floor(Math.random() * new_style.length)])
    }
  }
}

function Removedupe(style){
  var temp = style.toString().split(",");
  temp.sort().reverse()
  var style = [];
  for (let i of temp){
    if (style[style.length-1] != i && i != ""){
      style.push(i)
    }
  }
  return style
}

//Step3.依照口味動態抓資料
function GetRange(style) {
  var data = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(style);
  data.getRange('A1').activate();
  data.getSelection().getNextDataRange(SpreadsheetApp.Direction.NEXT).activate();
  //回傳相同口味的人的資料
  var x = data.getSelection().getNextDataRange(SpreadsheetApp.Direction.DOWN).activate().getValues();
  return x
};

//將收集的資料，換行
function NewData(data){
  var new_data = "";
  for (let a=0;a<data.length;a++){
    new_data = new_data + data[a] + "\n"
  }
  return new_data
}


//Step4. 對每個人寄信
function SendEmail(email, subject, content) {
  GmailApp.sendEmail(email,subject, content)
}

