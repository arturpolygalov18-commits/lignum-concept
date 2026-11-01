
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);menu.textContent=open?'Закрыть':'Меню';});
nav.addEventListener('click',e=>{if(e.target.closest('a')){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');menu.textContent='Меню';}});
const rail=document.querySelector('.projects'),prev=document.querySelector('[data-dir="-1"]'),next=document.querySelector('[data-dir="1"]');
function update(){prev.disabled=rail.scrollLeft<2;next.disabled=rail.scrollLeft+rail.clientWidth>=rail.scrollWidth-3;document.querySelector('.arrows').hidden=rail.scrollWidth<=rail.clientWidth+3;}
for(const b of [prev,next])b.addEventListener('click',()=>{const item=rail.querySelector('.project');rail.scrollBy({left:Number(b.dataset.dir)*(item.getBoundingClientRect().width+16),behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});});
rail.addEventListener('scroll',update,{passive:true});new ResizeObserver(update).observe(rail);update();
