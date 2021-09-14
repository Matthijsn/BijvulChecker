//Variables
var interval = 40;
var Empty = 401;
var readtimeout = 1;
var reloadAfter = 18000/interval;
var count = 0;

// For getting the time
var Begin = 09;
var Stop = 01;
var currentHour;

// removes the cooke pop up
$('#cookiePopup').remove()

//Init audio and notification
Notification.requestPermission();
var audio = new Audio("https://cdn.discordapp.com/attachments/651377520406429700/812359200037404752/juntos-607.mp3");
var error = new Audio("https://cdn.discordapp.com/attachments/651377520406429700/815677083857977384/chimes-power-down-190.mp3");

//Adding visual elements
// $('.grid-my-container').prepend('<button id="Start" onclick=Start()>Start</button>');
// $('.grid-my-container').prepend('<button id="Stop" onclick=Stop()>Stop</button>');
$('.grid-my-container').prepend('<button onclick=Message()>Test Melding</button>');
$('#Stop').attr('disabled', 'true');


//Gets the mbs left
GetMB = function(){
// Doesn't get the mbs outside the given times

//Use when end time is a bigger digit than the begin time
//if(currentHour < Begin || currentHour >= Stop)

//Checks if the time is inside the given hours
if(currentHour < Begin && currentHours > Stop){
console.log("Gestopt");
}else if(count == reloadAfter){
// Reloads the page after a given amount of calls
location.reload();
}else{
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
count++;
}
}


//Starts the process
Start = function(){
$('#Start').attr('disabled', 'true');
$('#Stop').attr('disabled', 'false');
setInterval(function(){
//Gets the current hour
currentHour = new Date().getHours();

//Use when end time is a bigger digit than the begin time
//if(currentHour < Begin || currentHour >= Stop){

//Checks if the time is inside the given hours
if(currentHour < Begin && currentHours > Stop){
}else{
$('#RefreshUsageButton').click();
}
setTimeout(() => {  GetMB() }, readtimeout*1000);
}, interval*1000);
}
Message = function(){
audio.play();
//$('.bundle-usage-table').css('background', 'red');
new Notification('De Bundel is bijna op!', { body: 'Klik hier om bij te vullen', icon: 'https://content.presspage.com/clients/o_206.png' }).addEventListener('click', function(){
    window.open('https://www.t-mobile.nl/my/aanvullers');
});
}
Start();
window.onbeforeunload = function() {
// new Notification('Oeps!', { body: 'De pagina is opnieuw geladen, plak de code opnieuw in de console', icon: 'https://content.presspage.com/clients/o_206.png' }).addEventListener('click', function(){
//     window.open('');
// });
// error.play();
}

$(window).bind('beforeunload',function(){
// error.play();

});

// ©Matthijs Noordhof 2020