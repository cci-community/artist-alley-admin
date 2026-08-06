function doGet(e){
 const sh=SpreadsheetApp.openById('1H7_Vdsuq8B3Bp-f00CLRxUyDPk1QiWxLfwnhJaEmmR0').getSheetByName(e.parameter.sheet||'Artists');
 const values=sh.getDataRange().getValues();
 const headers=values.shift();
 const out=values.map(r=>Object.fromEntries(headers.map((h,i)=>[h,r[i]])));
 return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}
