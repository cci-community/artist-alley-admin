function doGet(e) {

  const sheetName = e.parameter.sheet || "Artists";

  const ss = SpreadsheetApp.openById(
    "1H7_Vdsuq8B3Bp-f00CLRxUyDPk1QiWxLfwnhJaEmmR0"
  );

  const sheet = ss.getSheetByName(sheetName);

  const values = sheet.getDataRange().getValues();

  const headers = values.shift();

  const data = values.map(row => {
    let obj = {};

    headers.forEach((header, i) => {
      obj[header] = row[i];
    });

    return obj;
  });

  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
