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
       MinutesTextChange = 'っぷんです'
    } else {
        MinutesTextChange = 'ふんです'
    } 
    if(todayHours < 12){
        text = 'おはようございます、旅人さん。'+'現在時刻は、'+todayHours+todayHours+'時です'+todayMinutes+MinutesTextChange;
    } else if(todayHours >= 12 && todayHours < 18) {
        text = 'こんにちは、旅人さん。'+'現在時刻は、'+todayHours+todayHours+'時です'+todayMinutes+MinutesTextChange;
    } else {
        text = 'こんばんは、旅人さん。'+'現在時刻は、'+todayHours+'時、'+todayMinutes+MinutesTextChange;
    }
}

function speak(){
    textChangeHello();
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

window.onload = speak();





