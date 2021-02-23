Notification.requestPermission();
var audio = new Audio("https://cdn.discordapp.com/attachments/651377520406429700/812359200037404752/juntos-607.mp3");
$('.grid-my-container').prepend('<button id="Start" onclick=Start()>Start</button>');
$('.grid-my-container').prepend('<button id="Stop" onclick=Stop()>Stop</button>');
$('.grid-my-container').prepend('<button onclick=audio.play()>Test Geluid</button>');
$('#Stop').attr('disabled', 'true');
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
if(NogOver <= 201 && $('.text-confirm').length == 0){
audio.play();
$('.bundle-usage-table').css('background', 'red');
new Notification('De Bundel is bijna op!', { Title: 'Let op!', Icon: 'https://www.t-mobile.nl/assets/static/t-mobile-logo.svg?v=2018' }).addEventListener('click', function(){
    window.open('https://www.t-mobile.nl/my/aanvullers');
});
}
console.log(NogOver);
}
Start = function(){
$('#Start').attr('disabled', 'true');
$('#Stop').attr('disabled', 'false');
setInterval(function(){
$('#RefreshUsageButton').click();
setTimeout(() => {  GetMB() }, 1000);
}, 30000);
}

// ©Matthijs Noordhof 2020