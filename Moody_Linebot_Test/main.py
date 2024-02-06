from flask import Flask, request, render_template
# 用來獲取堆棧軌跡
import traceback

# 載入 LINE Message API 相關函式庫
from linebot import LineBotApi, WebhookHandler
from linebot.exceptions import InvalidSignatureError
from linebot.models import (
    MessageEvent, 
    TextMessage, 
    TextSendMessage, 
    FlexSendMessage, 
    BubbleContainer, 
    ImageComponent, 
    FlexContainer,
    flex_message
)

# 載入 自製的Flex Message
from MoodConfig import MoodConfig

# 載入 json 標準函式庫，處理回傳的資料格式
import json

#全域變數
access_token = 'tJSutQCYYNVjxqnTgq20tQOsMJa77itmJA1P+DNnniRAtT+9uJgrTh+e9CqXytyt9ng+j3HoIvuwB35L99rXkjeiWaQooxUB1qi6HA3XM0Yvv0IaBLqCzvFgdWynMFw9JC4CXwsKGRNTaynZ/mD/+AdB04t89/1O/w1cDnyilFU='
secret = '363152023e0643e6f7b8ebbde6851c30'
line_bot_api = LineBotApi(access_token)              # 確認 token 是否正確 (待確認)
handler = WebhookHandler(secret)                     # 確認 secret 是否正確 (待確認)
Mood_Carousel = MoodConfig.Mood_Carousel
Mood_Options = MoodConfig.Mood_Options

mode = {}                                                    # 目前正在使用的功能，0=無, 1=心情筆記
app = Flask(__name__)

@app.route("/", methods=['POST'])
def linebot():
  global mode
  body = request.get_data(as_text=True)                    # 取得收到的訊息內容

  try:
    signature = request.headers['X-Line-Signature']      # 加入回傳的 headers (待確認)
    handler.handle(body, signature)                      # 綁定訊息回傳的相關資訊
    body = request.get_data(as_text=True)                    # 取得收到的訊息內容
    json_data = json.loads(body)                         # json 格式化訊息內容
    tk = json_data['events'][0]['replyToken']            # 取得回傳訊息的 Token
    events_type = json_data['events'][0]['type']

    if events_type == 'message':
      print("message")                                    # 開發用，方便區隔
      msg = json_data['events'][0]['message']['text']     # 取得 LINE 收到的文字訊息
      if msg == '心情筆記':
        message = FlexSendMessage(alt_text="hello", contents=Mood_Carousel)
        line_bot_api.reply_message(
            tk, 
            message
        )
      elif mode[tk] == 1:                                 #心情筆記模式
        print(msg)
        line_bot_api.reply_message(tk,TextSendMessage("標籤/內容已記錄")) 
    elif events_type == 'postback':
      postback = json_data['events'][0]['postback']['data']
      print(postback)                                      # 開發用，方便區隔                   
      if postback in ('Awesome','Happy','Peaceful','Sad','Devastated'):
        message = FlexSendMessage(alt_text="hello", contents=Mood_Options)  #心情的資料寫入
        line_bot_api.reply_message(
              tk, 
              message
          )
      elif postback in ('tags', 'content'):
        mode[tk] = 1
        message = FlexSendMessage(alt_text="hello", contents=Mood_Options)
        line_bot_api.reply_message(tk,TextSendMessage("請輸入標籤/內容")) 
      elif postback == 'cancel':
        mode[tk] = 0

  except Exception as e:  # 捕獲所有異常
      print("An error occurred:", e)
      print("Traceback details:")
      traceback.print_exc()  # 打印錯誤堆棧軌跡
      print("Linebot error message:")
      print(body)                                          # 如果發生錯誤，印出收到的內容
  return 'OK'                 # 驗證 Webhook 使用，不能省略

@app.route('/moodnote')
def index():
  # 獲取 URL 中的 'feeling' 參數
  feeling = request.args.get('feeling', default='none')
  return render_template('moodnote.html', feeling=feeling[0].upper()+feeling[1:])

@app.route('/submit', methods=['POST'])
def submit():
    # 處理文本數據
    label = request.form.get('label')
    content = request.form.get('content')
    feeling = request.form.get('feeling')
    print(request.files)
    # 處理錄音文件
    if 'audioFile' in request.files:
        audio_file = request.files['audioFile']
        audio_file.save('C:/Users/Ben/Documents/Ben/Moody_Linebot_Test/audio')  # 指定儲存路徑
        print(audio_file) # 測試是否有收到audio

    # 輸出處理結果，僅作為示例
    print(f"Feeling: {feeling}, Label: {label}, Content: {content}")

    # 返回響應
    return "Form and audio submitted successfully!"

if __name__ == "__main__":
  app.run()