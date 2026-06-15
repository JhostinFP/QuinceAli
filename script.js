const envelope=document.getElementById('envelope');
const screen=document.getElementById('welcomeScreen');
const content=document.getElementById('mainContent');
const music=document.getElementById('bgMusic');
const disc=document.getElementById('musicBtn');
const flowerRain=document.getElementById('flowerRain');
const contentFlowers=document.getElementById('contentFlowers');
const coverPlayBtn=document.getElementById('coverPlayBtn');
const musicProgress=document.getElementById('musicProgress');
const backBtn=document.getElementById('backBtn');
const nextBtn=document.getElementById('nextBtn');

function createFlowers(container,total=34){
 for(let i=0;i<total;i++){
  const flower=document.createElement('span');
  flower.className='flower';
  flower.style.left=`${Math.random()*100}%`;
  flower.style.animationDuration=`${7+Math.random()*7}s`;
  flower.style.animationDelay=`-${Math.random()*10}s`;
  flower.style.setProperty('--drift',`${(Math.random()*120)-60}px`);
  container.appendChild(flower);
 }
}

createFlowers(flowerRain,34);

function startContentFlowers(){
 contentFlowers.innerHTML='';
 createFlowers(contentFlowers,32);
}

envelope.addEventListener('click',()=>{
 envelope.classList.add('open');
 setTimeout(()=>{
  screen.style.display='none';
  content.classList.remove('hidden');
  startContentFlowers();
 },1000);
});

disc.addEventListener('click',()=>{
 if(music.paused){music.play();disc.classList.add('playing');}
 else{music.pause();disc.classList.remove('playing');}
});

coverPlayBtn.addEventListener('click',()=>{
 if(music.paused){
  music.play().catch(()=>{});
  coverPlayBtn.classList.add('playing');
 }else{
  music.pause();
  coverPlayBtn.classList.remove('playing');
 }
});

music.addEventListener('timeupdate',()=>{
 if(!music.duration)return;
 musicProgress.value=(music.currentTime/music.duration)*100;
});

musicProgress.addEventListener('input',()=>{
 if(!music.duration)return;
 music.currentTime=(musicProgress.value/100)*music.duration;
});

backBtn.addEventListener('click',()=>{
 music.currentTime=Math.max(0,music.currentTime-10);
});

nextBtn.addEventListener('click',()=>{
 if(!music.duration)return;
 music.currentTime=Math.min(music.duration,music.currentTime+10);
});

const target=new Date('2026-06-27T21:00:00').getTime();
function update(){
 const d=target-Date.now();
 const el=document.getElementById('countdown');
 if(!el)return;
 if(d<=0){el.innerHTML='El gran dia ha llegado';return;}
 const days=Math.floor(d/86400000);
 const hrs=Math.floor((d%86400000)/3600000);
 const min=Math.floor((d%3600000)/60000);
 const sec=Math.floor((d%60000)/1000);
 el.innerHTML=`<div><b>${days}</b><span>Dias</span></div><div><b>${hrs}</b><span>Horas</span></div><div><b>${min}</b><span>Min</span></div><div><b>${sec}</b><span>Seg</span></div>`;
}
update();
setInterval(update,1000);
