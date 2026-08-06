async function load(){
 if(API_URL.startsWith('PASTE')) return;
 const data=await getArtists();
 document.getElementById('artists').textContent=data.length;
 const tb=document.querySelector('#artistTable tbody');
 tb.innerHTML='';
 data.forEach(a=>{
  tb.innerHTML+=`<tr><td>${a.Name||''}</td><td>${a.Studio||''}</td><td>${a.Shows||''}</td></tr>`;
 });
}
load();
