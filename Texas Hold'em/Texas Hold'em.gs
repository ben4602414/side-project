var front = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("牌桌");
var current_cards = [];

function main() {
  //發給玩家手牌
  if (front.getRange("K2").getValue().toString()==='')
  {
    deal_all_cards()
  }
  //發3張公共牌
  else if (front.getRange("E18").getValue().toString()==='')
  {
    public_card_1st()
  }
  //發第4張公共牌
  else if (front.getRange("H18").getValue().toString()==='')
  {
    public_card_2nd()
  }
  //發第5張公共牌
  else if (front.getRange("I18").getValue().toString()==='')
  {
    public_card_3rd()
  }
}

function deal_all_cards(){
  var cards = ['黑桃A', '黑桃2', '黑桃3', '黑桃4', '黑桃5','黑桃6','黑桃7','黑桃8','黑桃9','黑桃10','黑桃J','黑桃Q',' 黑桃K',
  '愛心A', '愛心2', '愛心3', '愛心4', '愛心5', '愛心6', '愛心7', '愛心8', '愛心9', '愛心10', '愛心J', '愛心Q', '愛心K', 
  '方塊A','方塊2','方塊3','方塊4','方塊5','方塊6','方塊7','方塊8','方塊9','方塊10','方塊J','方塊Q','方塊K',
  '梅花A','梅花2','梅花3','梅花4','梅花5','梅花6','梅花7','梅花8','梅花9','梅花10','梅花J','梅花Q','梅花K'];
  //根據玩家數量發牌，每人兩張
  var player_card;
  var players = front.getRange("B1").getValue()
  var preflop_card = [];
  //隨機抽取一張，將抽取到的牌放在cell中，重複這個動作玩家數*2次
  for(i=0;i<((players)*2);i++)
  {
    //隨機抽牌
    var cardlength = cards.length;
    var random = Math.floor(Math.random()*cardlength);
    player_card = cards[random]
    Logger.log('player_card: ' + player_card)
    Logger.log('random: ' + random)
    
    //發牌 
    preflop_card.push(player_card)
    front.getRange(2+i,11).setValue(preflop_card[i])
    cards.splice(random, 1);
  }
  //發5張公共牌
  for(i=0;i<5;i++)
  {
    //隨機抽牌
    var cardlength = cards.length;
    var random = Math.floor(Math.random()*cardlength);
    player_card = cards[random]
    Logger.log('player_card: ' + player_card)
    Logger.log('random: ' + random)
    
    //發牌 
    preflop_card.push(player_card)
    front.getRange(2+i,12).setValue(preflop_card[players*2+i])
    cards.splice(random, 1)
  }
}

function public_card_1st(){
  for(i=0;i<3;i++){
    card = front.getRange(2+i,12).getValue()
    front.getRange(18,5+i).setValue(card)
  }
}

function public_card_2nd(){
  card = front.getRange(5,12).getValue()
  front.getRange(18,8).setValue(card)
}

function public_card_3rd(){
  card = front.getRange(6,12).getValue()
  front.getRange(18,9).setValue(card)
}

function restart(){
  //玩家手牌
  front.getRange("E20:F26").clearContent();
  //公共牌
  front.getRange("E18:I18").clearContent();
  //累計籌碼區
  front.getRange("I19:I23").clearContent();
  //隱藏區
  front.getRange("K2:L15").clearContent();
}

function river(){
  player1 = front.getRange("K2:K3").getValues()
  player2 = front.getRange("K4:K5").getValues()
  player3 = front.getRange("K6:K7").getValues()
  player4 = front.getRange("K8:K9").getValues()
  player5 = front.getRange("K10:K11").getValues()
  player6 = front.getRange("K12:K13").getValues()
  player7 = front.getRange("K14:K15").getValues()

  front.getRange('E20').setValue(player1[0][0])
  front.getRange('F20').setValue(player1[1][0])

  front.getRange('E21').setValue(player2[0][0])
  front.getRange('F21').setValue(player2[1][0])

  front.getRange('E22').setValue(player3[0][0])
  front.getRange('F22').setValue(player3[1][0])

  front.getRange('E23').setValue(player4[0][0])
  front.getRange('F23').setValue(player4[1][0])

  front.getRange('E24').setValue(player5[0][0])
  front.getRange('F24').setValue(player5[1][0])

  front.getRange('E25').setValue(player6[0][0])
  front.getRange('F25').setValue(player6[1][0])

  front.getRange('E26').setValue(player7[0][0])
  front.getRange('F26').setValue(player7[1][0])

}

function bets(){
  //按鍵後確認所有下注，並跟新

  //第一輪
  if (front.getRange("I20").getValue().toString()===''){
    round1 = front.getRange("D20:D26").getValues()
    roundlength = round1.length
    var total = 0;
    for(i=0;i<roundlength;i++){
      total = total + Number(round1[i][0])
    }
    remaining = front.getRange("C20:C26").getValues()
    front.getRange('B20:B26').setValues(remaining)
    front.getRange('I20').setValue(total)
    front.getRange("D20:D26").clearContent();
  }
  //第二輪
  else if (front.getRange("I21").getValue().toString()===''){
    round1 = front.getRange("D20:D26").getValues()
    roundlength = round1.length
    var total = 0;
    for(i=0;i<roundlength;i++){
      total = total + Number(round1[i][0])
    }
    remaining = front.getRange("C20:C26").getValues()
    front.getRange('B20:B26').setValues(remaining)
    front.getRange('I21').setValue(total)
    front.getRange("D20:D26").clearContent();
  }
  //第三輪
  else if (front.getRange("I22").getValue().toString()===''){
    round1 = front.getRange("D20:D26").getValues()
    roundlength = round1.length
    var total = 0;
    for(i=0;i<roundlength;i++){
      total = total + Number(round1[i][0])
    }
    remaining = front.getRange("C20:C26").getValues()
    front.getRange('B20:B26').setValues(remaining)
    front.getRange('I22').setValue(total)
    front.getRange("D20:D26").clearContent();
  }
  //第四輪
  else if (front.getRange("I23").getValue().toString()===''){
    round1 = front.getRange("D20:D26").getValues()
    roundlength = round1.length
    var total = 0;
    for(i=0;i<roundlength;i++){
      total = total + Number(round1[i][0])
    }
    remaining = front.getRange("C20:C26").getValues()
    front.getRange('B20:B26').setValues(remaining)
    front.getRange('I23').setValue(total)
    front.getRange("D20:D26").clearContent();
  }
}
