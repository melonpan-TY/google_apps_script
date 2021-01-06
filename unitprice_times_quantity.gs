//B列に単価、C列に数量、D列が小計となる表計算

function Sample1() {　//B列単価　×　C列数値　＝　D列金額の関数
  var sheet = SpreadsheetApp.getActiveSheet() 　// シート用変数(シート型)
  var unitprice // 単価
  var quantity　// 数量
  var i   // 繰り返し変数
  var lastRow // 最終行取得変数 
  
  lastRow = sheet.getLastRow() //初期値として最終行数を与える
   
  for(i=2; i<=lastRow; i++){
    if (sheet.getRange(i, 2).getValue() == "") break // B列が空の場合、繰り返し処理を抜ける
    unitprice = sheet.getRange(i, 2).getValue()
    quantity = sheet.getRange(i, 3).getValue()
    sheet.getRange(i, 4).setValue(unitprice * quantity)　//　単価　×　数量
  }
}
