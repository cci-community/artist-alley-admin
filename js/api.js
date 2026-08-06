// Replace with your Apps Script Web App URL
const API_URL='https://script.google.com/macros/s/AKfycbyh-KP3cEE0sPOUXgjrJ2KWnVGbUXyeO8OCcEyRzAjETMRVTfP4boqPjBhs_fd05PYg/exec';
async function getArtists(){
 const r=await fetch(API_URL+'?sheet=Artists');
 return await r.json();
}
