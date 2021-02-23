//Variables
var interval = 30;
var Empty = 201;
var readtimeout = 1;

//Init aduio and notification
Notification.requestPermission();
var audio = new Audio("https://cdn.discordapp.com/attachments/651377520406429700/812359200037404752/juntos-607.mp3");

//Adding visual elements
// $('.grid-my-container').prepend('<button id="Start" onclick=Start()>Start</button>');
// $('.grid-my-container').prepend('<button id="Stop" onclick=Stop()>Stop</button>');
$('.grid-my-container').prepend('<button onclick=Message()>Test Melding</button>');
$('#Stop').attr('disabled', 'true');

//Gets the mbs left
GetMB = function(){
var NogOver;
if($('.text-confirm').length > 0){
// console.log(parseInt($('.text-confirm')[0].innerHTML));
NogOver = parseInt($('.text-confirm')[0].innerHTML);
} else if($('.text-warning').length > 0){
// console.log(parseInt($('.text-warning')[0].innerHTML));
NogOver = parseInt($('.text-warning')[0].innerHTML);
}else{
// console.log(parseInt($('.text-error')[0].innerHTML())); 
NogOver = parseInt($('.text-error')[0].innerHTML);
}
if(NogOver <= Empty && $('.text-confirm').length == 0){
//Plays the audio, change the ui an sends a notification when the bundle is almost empty
Message();
}
console.log(NogOver);
console.log(Empty);
}

//Starts the process
Start = function(){
$('#Start').attr('disabled', 'true');
$('#Stop').attr('disabled', 'false');
setInterval(function(){
$('#RefreshUsageButton').click();
setTimeout(() => {  GetMB() }, readtimeout*1000);
}, interval*1000);
}
Message = function(){
audio.play();
$('.bundle-usage-table').css('background', 'red');
new Notification('De Bundel is bijna op!', { Title: 'Let op!', Icon: 'https://www.t-mobile.nl/assets/static/t-mobile-logo.svg?v=2018' }).addEventListener('click', function(){
    window.open('https://www.t-mobile.nl/my/aanvullers');
});
}
Start();

// ©Matthijs Noordhof 2020