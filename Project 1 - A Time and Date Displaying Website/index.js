let time;
let date;
let a;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let hours, minutes, seconds;


setInterval(() => {
a = new Date();

//Using my programming skill to display 0 with single digit

//get hours
if(a.getHours() < 10){
    hours = "" + 0 + a.getHours();
}else{
    hours = a.getHours();
}

//get minutes
if(a.getMinutes() < 10){
    minutes = "" + 0 + a.getMinutes();
}else{
    minutes = a.getMinutes();
}

//get seconds
if(a.getSeconds() < 10){
    seconds = "" + 0 + a.getSeconds();
}else{
    seconds = a.getSeconds();
}

time = hours + ":" + minutes + ":" + seconds;
date = a.toLocaleDateString(undefined, options);
document.getElementById('time').innerHTML = time + " <br> Current Date: " + date;

}, 1000);