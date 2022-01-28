'use strict'

let today = new Date();
let todayYear = today.getFullYear();
let todayMonth = today.getMonth()+1;
let todayDate = today.getDate();
let todayHours = today.getHours(); 
let todayMinutes = today.getMinutes();
let todaySeconds = today.getSeconds();
let text;
let MinutesTextChange;

function textChangeHello(){
    if(todayMinutes==10 || todayMinutes==20 || todayMinutes==30 || todayMinutes==40 || todayMinutes==50 ){
       MinutesTextChange = 'じゅっぷんです'
    } else {
        MinutesTextChange = 'ふんです'
    } 
    if(todayHours < 12){
        text = 'おはようございます、旅人さん。'+'現在時刻は、'+todayHours+todayHours+'時、'+todayMinutes+MinutesTextChange;
    } else if(todayHours >= 12 && todayHours < 18) {
        text = 'こんにちは、旅人さん。'+'現在時刻は、'+todayHours+todayHours+'時、'+todayMinutes+MinutesTextChange;
    } else {
        text = 'こんばんは、旅人さん。'+'現在時刻は、'+todayHours+'時、'+todayMinutes+MinutesTextChange;
    }
}

function speak(){
    textChangeHello();
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

function doReload() {
    window.location.reload();
}

window.addEventListener('load',function (){

    setTimeout(doReload, 100000);
})

window.addEventListener('load',function (){
    speak();
});                       
