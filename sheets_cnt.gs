//シートのセル操作
//各シートのセルが同時に書き換わる。

function sample1() {　//各シートのA1セルにシート名を入力する
  var ash = SpreadsheetApp.getActiveSpreadsheet()
  var sheets = ash.getSheets()
  for(i=0;i<ash.getSheets().length; i++){
    sheets[i].getRange(1, 1).setValue(sheets[i].getName())
  }
}

function sample2(){　//各シートのA1セルの値を消去する
  var ash = SpreadsheetApp.getActiveSpreadsheet()
  var sheets = ash.getSheets()
  var range
  for(i=0;i<ash.getSheets().length; i++){
    range = sheets[i].getRange(1, 1)
    range.clearContent()
  }
}
