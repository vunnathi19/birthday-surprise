const texts=[
"Tracking hidden memories...",
"Identity matched...",
"Birthday subject verified..."
];

let t=0;

function typeText(){

if(t<texts.length){

document.getElementById("typing")
.innerHTML=texts[t];

t++;

setTimeout(typeText,1200);

}

}

typeText();

setTimeout(()=>{

document.getElementById("intro")
.style.display="none";

document.getElementById("main")
.style.display="block";

createStars();

moveHeart();

},4500);

/* STARS */

function createStars(){

for(let i=0;i<120;i++){

const s=document.createElement("div");

s.className="star";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.animationDuration=
(5+Math.random()*10)+"s";

document.body.appendChild(s);

}

}

/* HEART GAME */

const heart=document.getElementById("heart");

let catches=0;

function moveHeart(){

const x=Math.random()*75;
const y=Math.random()*70;

heart.style.left=x+"vw";
heart.style.top=y+"vh";

}

heart.addEventListener("click",()=>{

catches++;

document.getElementById("score")
.innerHTML=catches+" / 2";

if(catches>=2){

document.getElementById("game")
.style.display="none";

startSecondGame();

}else{

moveHeart();

}

});

/* SECOND GAME */

function startSecondGame(){

document.getElementById("secondGame")
.style.display="flex";

const grid=
document.getElementById("starGrid");

grid.innerHTML="";

const correct=
Math.floor(Math.random()*9);

for(let i=0;i<9;i++){

const star=document.createElement("div");

star.className="choice";

star.innerHTML="⭐";

star.addEventListener("click",()=>{

if(i===correct){

document.getElementById("secondGame")
.style.display="none";

fakeSequence();

}else{

star.style.opacity="0.2";

}

});

grid.appendChild(star);

}

}

/* FAKE */

function fakeSequence(){

const fake=document.getElementById("fake");

fake.style.display="flex";

setTimeout(()=>{
document.getElementById("fakeText")
.innerHTML="Wait...";
},2500);

setTimeout(()=>{
document.getElementById("fakeText")
.innerHTML="One hidden memory still remains...";
},4500);

setTimeout(()=>{

fake.style.display="none";

document.getElementById("surprise")
.style.display="flex";

},7000);

}

/* FINAL */

document.getElementById("memoryBtn")
.addEventListener("click",()=>{

document.getElementById("final")
.style.display="flex";

showLines();

softCelebration();

});

/* MESSAGE */

function showLines(){

const ids=[
"l1","l2","l3","l4",
"l5","l6","l7","l8","l9"
];

ids.forEach((id,index)=>{

setTimeout(()=>{

document
.getElementById(id)
.classList.add("show");

},(index+1)*1800);

});

setTimeout(()=>{

document.getElementById("letterPopup")
.style.display="flex";

setTimeout(()=>{

document.getElementById("letterPopup")
.style.display="none";

},4000);

},19000);

}

/* CELEBRATION */

function softCelebration(){

const items=[
"✨","💖","🌸","🫧","⭐","🦋"
];

setInterval(()=>{

const el=document.createElement("div");

el.innerHTML=
items[Math.floor(Math.random()*items.length)];

el.style.position="fixed";

el.style.left=Math.random()*100+"vw";

el.style.top="-50px";

el.style.fontSize=
(25+Math.random()*35)+"px";

el.style.pointerEvents="none";

el.style.zIndex="999";

el.style.animation=
"fall 7s linear forwards";

document.body.appendChild(el);

setTimeout(()=>{
el.remove();
},7000);

},250);

}
