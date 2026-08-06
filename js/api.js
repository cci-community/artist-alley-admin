// Replace with your Apps Script Web App URL
const API_URL='PASTE_GOOGLE_APPS_SCRIPT_WEBAPP_URL';
async function getArtists(){
 const r=await fetch(API_URL+'?sheet=Artists');
 return await r.json();
}
