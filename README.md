# Side-project introduction 

### Backtest_linebot</br>
簡介：台股量化分析，並建立股票回測專用Linebot</br>
分析結果：MACD策略在2330(台積電)回測中，雖然收益是最高的，但是他的最大獲利僅低於總獲利不到1萬，由此可知此交易策略在牛市比較有用，在平盤時無法發揮</br>
* 資料收集：API串接</br>
* 資料清洗：Python(Pandas, Numpy)</br>
* 資料儲存：NoSQL(MongoDB)</br>
* 資料視覺化：HTML(pyechart), Excel</br>
* 聊天機器人: Linebot, ngrok, flask</br>


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

### Backtest_linebot
Introduction：Quantitatively analyze stock and find the most appropriate trading strategy. Building a linebot to start up the backtesting result.</br>
Analysis result：Although the highest total profit in backtesting is using MACD strategy in 2330, the maximum profit is just lower than the total profit among 10 thousands. Based on the observation, we could say MACD have an advantage in bull market but not correction</br>
* Data source：API</br>
* Data cleaning：Python(Pandas, Numpy)</br>
* Data storage：NoSQL(MongoDB)</br>
* Data visualization：HTML(pyechart), Excel</br>
* Chat bot: Linebot, ngrok, flask</br>

### Weather_Agriculture
Introduction: (1)Finding the best timing for restaurants to purchasing agricultural products.</br>
              (2)Statistically analyze the correlation between weather and the price of agricultural products by using linear regression</br>
Analysis result：Calculate the possible food cost saving for restaurants in a year via the average of number of customers. Besides, we found that some fruits like pomelo and grapefruit are cheaper when they are out of season. Those fruits are not recommended for purchasing when only following the cheaper price. Except, made those fruits in jam.
* Data source：Selenium, bs4, requests (Webscrawl models)</br>
* Data cleaning：Python(Pandas, Numpy), Excel</br>
* Data storage：Excel</br>
* Data visualization：Tableau, Excel</br>
* Statistical analysis: Python(scipy, scikit-learn)</br>
* Visualize the significant linear regression between weather and the price of agricultural product.(Significant level:95%, R square > 0.9)
Visualization of linear regression in Tableau, please click [here](https://public.tableau.com/app/profile/ben4602414/viz/_16510427808810/sheet4)</br>


### GAS instructional material
Introduction: It's a Google Apps Script instructional material in beginner level and be with small project</br>
* Small project topics: fixing the worry of choosing what to eat in lunch</br>
##### Introduction of small project: 
> 1. Collecting the nearby restaurants data via Google map. 
> 2. Surveying people's thought of today's lunch via Google form. 
> 3. Randomly choose the restaurants for those people have no idea about their lunch and then find the partner for them. 
> 4. Sending the results in Gmail.</br>

For more information about this project in google sheets, please click [here](https://docs.google.com/spreadsheets/d/1b9ngb2sEA_tEP1LScHX-s3c79-kaDZAl9I9MMJuZ9YA/edit?usp=sharing "https://docs.google.com/spreadsheets/d/1b9ngb2sEA_tEP1LScHX-s3c79-kaDZAl9I9MMJuZ9YA/edit?usp=sharing").</br>


### Texas Hold'em
Introduction: People who have the right of this google sheets could play Texas Hold'em together. The number of player could be adjust.(Player: 3-7)</br>
For more information about this project in google sheets, please click [here](https://docs.google.com/spreadsheets/d/15UN23baYrNKWHMCvaZo0q8OnPCamLAn7rtw-SIDVTgI/edit?usp=sharing "https://docs.google.com/spreadsheets/d/15UN23baYrNKWHMCvaZo0q8OnPCamLAn7rtw-SIDVTgI/edit?usp=sharing").</br>


