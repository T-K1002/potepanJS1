
const time = document.getElementById("time");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");


let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let tm;

function updateTimerText(){
//time.textContent = '${h}:${m}:${s}:${ms}';
$("#time").text(`${h}:${m}:${s}:${ms}`);
}

start.addEventListener("click",function() {
//start.onclick = function() {
start.disabled = true;
stop.disabled = false;
reset.disabled = true;

const countUp = function() {
  ms++;
  if (ms >= 10) {
    s++;
    ms = 0;
  }
  if (s >= 10) {
    m++;
    s = 0;
  }
  if (m >= 10) {
    h++;
    m = 0;
  }
  updateTimerText();
  } 
  tm = setInterval(countUp, 100);
 });
   
   
stop.addEventListener("click",function() {
start.disabled = false;
stop.disabled = true;
reset.disabled = false;
clearInterval(tm);
});
 
reset.addEventListener("click",function() {
start.disabled = false;
stop.disabled = true;
reset.disabled = true;
time.textContent = "0:0:0:0"
h = 0;
m = 0;
s = 0;
ms = 0;
});
 
