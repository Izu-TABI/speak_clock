'use strict'
    let today;
    let todayYear;
    let todayMonth;
    let todayDate;
    let todayHours; 
    let todayMinutes;
    let todaySeconds;
    let text;
    let MinutesTextChange;

function getNowDate(){
    today = new Date();
    todayYear = today.getFullYear();
    todayMonth = today.getMonth()+1;
    todayDate = today.getDate();
    todayHours = today.getHours(); 
    todayMinutes = today.getMinutes();
    todaySeconds = today.getSeconds();
    text;
    MinutesTextChange;

}
setInterval('getNowDate();', 1000);

function clock(){

    //表示用


    function timer(){
        document.getElementById('daysId').innerHTML = '<p>'+todayYear+'年'+'&nbsp;'+todayMonth+'月'+todayDate+'日'+'</p>';
        document.getElementById('timesId').innerHTML = '<p>'+todayHours+':'+todayMinutes+'&nbsp;'+todaySeconds+'</p>';

    }
    timer();

}
setInterval('clock();', 1000);

//喋る用


function textChangeHello(){
    if(todayMinutes==10 || todayMinutes==20 || todayMinutes==30 || todayMinutes==40 || todayMinutes==50 ){
    MinutesTextChange = '、っぷん、'
    } else {
        MinutesTextChange = 'ふん、'
    } 
    if(todayHours < 12){
        text = 'おはようございます、旅人さん。'+'現在時刻は、'+todayHours+'時、'+todayMinutes+MinutesTextChange+todaySeconds+'秒です';
    } else if(todayHours >= 12 && todayHours < 18) {
        text = 'こんにちは、旅人さん。'+'現在時刻は、'+todayHours+'時、'+todayMinutes+MinutesTextChange+todaySeconds+'秒です';
    } else {
        text = 'こんばんは、旅人さん。'+'現在時刻は、'+todayHours+'時、'+todayMinutes+MinutesTextChange+todaySeconds+'秒です';
    }
}

function speak(){
    textChangeHello();
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}
