const languageButton=document.getElementById('language');
let lang='en';
function setLanguage(next){lang=next;document.documentElement.lang=next;document.documentElement.dir=next==='ar'?'rtl':'ltr';document.querySelectorAll('[data-en]').forEach(el=>el.innerHTML=el.dataset[next]);languageButton.textContent=next==='en'?'العربية':'English'}
languageButton.addEventListener('click',()=>setLanguage(lang==='en'?'ar':'en'));
const menu=document.getElementById('menu'),nav=document.getElementById('nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
