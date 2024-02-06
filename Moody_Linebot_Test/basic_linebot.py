from flask import Flask, request

# 載入 LINE Message API 相關函式庫
from linebot import LineBotApi, WebhookHandler
from linebot.exceptions import InvalidSignatureError
from linebot.models import MessageEvent, TextMessage, TextSendMessage

# 載入 json 標準函式庫，處理回傳的資料格式
import json

app = Flask(__name__)

@app.route("/", methods=['POST'])
def linebot():
    body = request.get_data(as_text=True)                    # 取得收到的訊息內容
    access_token = 'tJSutQCYYNVjxqnTgq20tQOsMJa77itmJA1P+DNnniRAtT+9uJgrTh+e9CqXytyt9ng+j3HoIvuwB35L99rXkjeiWaQooxUB1qi6HA3XM0Yvv0IaBLqCzvFgdWynMFw9JC4CXwsKGRNTaynZ/mD/+AdB04t89/1O/w1cDnyilFU='
    secret = '363152023e0643e6f7b8ebbde6851c30'
    try:
        json_data = json.loads(body)                         # json 格式化訊息內容
        line_bot_api = LineBotApi(access_token)              # 確認 token 是否正確 (待確認)
        handler = WebhookHandler(secret)                     # 確認 secret 是否正確 (待確認)
        signature = request.headers['X-Line-Signature']      # 加入回傳的 headers (待確認)
        handler.handle(body, signature)                      # 綁定訊息回傳的相關資訊
        msg = json_data['events'][0]['message']['text']      # 取得 LINE 收到的文字訊息
        tk = json_data['events'][0]['replyToken']            # 取得回傳訊息的 Token
        line_bot_api.reply_message(tk,TextSendMessage(msg))  # 回傳訊息
        print(msg, tk)                                       # 印出內容
    except:
        print(body)                                          # 如果發生錯誤，印出收到的內容
    return 'OK'                 # 驗證 Webhook 使用，不能省略
if __name__ == "__main__":
  app.run()