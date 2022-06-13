# Side-project introduction 

### Backtest_linebot</br>
簡介：台股量化分析，並建立股票回測專用Linebot</br>
分析結果：MACD策略在2330(台積電)回測中，雖然收益是最高的，但是他的最大獲利僅低於總獲利不到1萬，由此可知此交易策略在牛市比較有用，在平盤時無法發揮</br>
* 資料收集：API串接</br>
* 資料清洗：Python(Pandas, Numpy)</br>
* 資料儲存：NoSQL(MongoDB)</br>
* 資料視覺化：HTML(pyechart), Excel</br>
* 聊天機器人: Linebot串接, ngrok, flask</br>


### Weather_Agriculture</br>
簡介：替餐廳分析食材怎麼買最省 並 找出天氣對食材價格的影響</br>
分析結果：除了可替餐廳依照來客數試算一年可省下的錢，還觀察到有部分水果(例如:柚子，葡萄柚)，並非在盛產期間才是最便宜的，因此，這兩項水果會不建議餐廳只按照價格去購買，除非有其他額外用途，像是做果醬</br>
* 資料收集：Selenium, bs4, requests等網路爬蟲套件</br>
* 資料清洗：Python(Pandas、Numpy), Excel</br>
* 資料儲存：Excel</br>
* 資料視覺化：Tableau、Excel</br>
* 統計分析：Python(scipy, scikit-learn)</br>
* Tableau呈現天氣與食材價格為顯著的線性回歸（信賴區間為95%，R²大於0.9）。Tableau相關連結[請按這裡](https://public.tableau.com/app/profile/ben4602414/viz/_16510427808810/sheet4)</br>

### GAS introduction</br>
簡介：分享Google Apps Script的基礎使用教材，內容包含基本語法，以及實作小型專案</br>
* 小型專案的主題為“解決午餐要吃什麼的煩惱”</br>
* 專案介紹：透過Google map蒐集附近餐廳資訊，Google表單調查每個人當天對午餐的想法，替沒想法的人隨機選擇餐廳，並替他們找伴，最終以Gmail告知結果</br>
* Google sheets相關連結[請按這裡](https://docs.google.com/spreadsheets/d/1b9ngb2sEA_tEP1LScHX-s3c79-kaDZAl9I9MMJuZ9YA/edit?usp=sharing)</br>

### Texas Hold'em</br>
簡介：將玩家加入共同的語音平台，並且共享此Google sheets便能遊玩德州撲克，能夠依照玩家數做調整（人數限制:3-7人）</br>
* 使用 Google Apps Script 與 Google sheets 函式做的德州撲克</br>
* Google sheets相關連結[請按這裡](https://docs.google.com/spreadsheets/d/15UN23baYrNKWHMCvaZo0q8OnPCamLAn7rtw-SIDVTgI/edit?usp=sharing)</br>

------

### Backtest_linebot</br>
Using technical analysis indictors to backtest Taiwaness stock in the past 3 years.</br>
Start up backtesting via linebot.</br>

### Weather_Agriculture</br>
Webscrawling the data of Taiwaness weather and the price of agriculture.</br>
Finding the correlation between the weather and the price by using linear regression.</br>
Visualization in Tableau, please click [here](https://public.tableau.com/app/profile/ben4602414/viz/_16510427808810/sheet4)</br>


### GAS introduction</br>
It's a tutorial of basic Google Apps Script language for sharing.</br>
Besides GAS tutorial, there's a side-project in this teaching material.</br>
The side-project is used to fixing the worry of choosing what to eat in lunch.</br>
For more information about this project, please click [here](https://docs.google.com/spreadsheets/d/1b9ngb2sEA_tEP1LScHX-s3c79-kaDZAl9I9MMJuZ9YA/edit?usp=sharing).</br>

### Texas Hold'em</br>
Texas Hold'em game made by Google Apps Script and google sheets function.</br>
For more information about this project, please click [here](https://docs.google.com/spreadsheets/d/15UN23baYrNKWHMCvaZo0q8OnPCamLAn7rtw-SIDVTgI/edit?usp=sharing).</br>


