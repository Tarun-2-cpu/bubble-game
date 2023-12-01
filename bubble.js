
var timer = 60;

var score = 0;
var scoreHit = 0;


function addScore(){
    
score+=10;

document.querySelector("#scoreval").textContent= score;

}



function getNewHit(){

 scoreHit = Math.floor(Math.random()*10); 

document.querySelector("#hit").textContent = scoreHit;

}


function makeBubble(){

var bubbleno = "";

for(i=1 ; i<=108 ; i++){

    var random = Math.floor(Math.random()*10)
bubbleno += `<div class="bubble">${random}</div>`;

}

document.querySelector(".pbtm").innerHTML= bubbleno;
}




function runTime(){


var timerint=  setInterval(function(){
    if(timer>0){
    timer--;
    document.querySelector("#timer").innerHTML=timer;
    }
     else{
        clearInterval(timerint);
        document.querySelector(".pbtm").innerHTML = `<h1>GAME OVER !!</h1>`;
     }

}, 1000);


}



document.querySelector(".pbtm").addEventListener("click",function(details){

   var jjnum =   Number(details.target.textContent);

   if (scoreHit === jjnum) {

    addScore();
    
    getNewHit();
     makeBubble();

   }
});




runTime();
