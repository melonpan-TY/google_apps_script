function syokika(){　//指定範囲のフォーム作成
  var sheet = SpreadsheetApp.getActiveSheet()
  sheet.getRange(7, 1, 11, 4).clear() //A7～D17を選択範囲として全クリア
  
  //表項目の入力
  sheet.getRange(7,1).setValue("№") //A7に№を入力
  sheet.getRange(7,2).setValue("見出し１")//B7～D7に見出し１～３を入力
  sheet.getRange(7,3).setValue("見出し２")
  sheet.getRange(7,4).setValue("見出し３")

  
  var ｎ= 8,m = 1 //A8～A17まで1～10を入力する
    for(n = 8 ; n<= 17 ; n++){
    sheet.getRange(n,1).setValue(m)
    m++
  }
}


function nyuryoku(){　//数字の乱数入力
  var sheet = SpreadsheetApp.getActiveSheet()
  var n,m //繰り返し用変数
    
   for(m = 2 ; m<= 4 ; m++){
    for(n = 8 ; n<= 17 ; n++){
    var randnum = Math.floor(Math.random()*100)   //100までのランダム数字用変数  
    sheet.getRange(n,m).setValue(randnum)
    }
   }
}



function mysample12() {
  var sheet = SpreadsheetApp.getActiveSheet()
  var lastRow  //最終行取得用　変数
  var lastCol  //最終列取得用　変数
  
  lastRow = sheet.getLastRow() //最終行の取得
  lastCol = sheet.getLastColumn() //最終列の取得
  sheet.getRange(8, 2, lastRow-1,lastCol-1).clearContent() //B8セルから(最終行)-1行、(最終列)-1列を選択範囲として文字クリア
  
}


function mysample13(){
  var sheet = SpreadsheetApp.getActiveSheet()
  var range
  
  range = sheet.getRange("A7:D17") //表の範囲を指定
  range.setBorder(false, false, false, false, true, true, "black", SpreadsheetApp.BorderStyle.DOTTED)
  range = sheet.getRange("A7:D7")
  range.setBorder(true, null, true, null, null, null)
  range = sheet.getRange("A7:D17")
  range.setBorder(null, null, true, null, null, null)
  range = sheet.getRange("A7:D17")
  range.setBorder(null, true, null, true, null, null)
  range = sheet.getRange("D7:D17")
  range.setBorder(null, null, null, true, null, null)
  
  range = sheet.getRange("A7:D7")
  range.setBackgroundRGB(128,128,128)
  range.setFontColor("white")
  range.setFontWeight("bold")
  range.setFontStyle("italic")
  range.setFontSize(12)
  
  range = sheet.getRange("A8:A17")
  range.setFontWeight("bold")
  range.setBackground("teal")
 
}
