# backtest_linebot
### 主要架構:
#### 建立聊天機器人 ->  股票回測生產  ->  回測結果傳送

### 架構細節 與 使用的模組：
#### 建立聊天機器人
-> 建立網頁架構(flask)</br>
-> 建立通道(ngrok) </br>
-> 接收用戶訊息(linebot)</br>
-> 分析用戶訊息(防呆、防機器人)</br>

#### 股票回測生產
-> 引用股票資料庫(FinMind API) </br>
-> 投資策略選擇(talib)</br>
-> 投資策略數據回測結果</br>
-> 投資策略圖表回測結果(pyecharts)</br>
（圖表-Ｋ線圖、收益成效、交易細節）</br>

#### 回測結果傳送
-> 抓取用戶email </br>
-> 傳送html檔案(email, smtplib)</br>
-> 刪除回測結果的html檔(os)</br>

### 回測結果:

### 股票回測LineBot - 使用教學影片:
[影片連結](https://www.youtube.com/watch?v=VeVlKZYHbxo&ab_channel=%E7%8E%8B%E7%9D%BF%E9%A7%BF)

### 分析結果:
