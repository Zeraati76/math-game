let isPlaying=false;
let score;
let action;
let timeremaining;
let correctAnswer;
let life=0;
document.getElementById("startreset").onclick=function(){

    if(isPlaying== true){
        location.reload();//if we are playing ==> reload Page
    }
    else{   
        isPlaying = true; //change playing state
        score=0; // set initial score value
        document.getElementById("scoreValue").innerHTML=score;//put score value in box
        show("timeremaining");// show time remainig
        hide("gameover");
        document.getElementById("startreset").innerHTML='Reset Game';// change start to reset
        timeremaining =60;//intial time
        document.getElementById("timeremainingValue").innerHTML=timeremaining;//show inital time 
        startCountdown(); //reduce time 1s in loop    
        generateQA();//generrate question/answers
        
    }
}
//if we cllick on start/resset

    //not
        //set score 0
        //show contdown
        // change start to reset
        
       
           // time left?
                //yes>countinue
                //no->gameover
for(i=1;i<5;i++){
     document.getElementById("box"+i).onclick=function(){
     
     if(isPlaying){
         if(this.innerHTML == correctAnswer){
             score++;
             document.getElementById("scoreValue").innerHTML=score;
             show("correct");
             hide("wrong");
             setTimeout(function(){
                 hide("correct");
             },1000);
             generateQA();
             
         }else{
             show("wrong");
             hide("correct");
             life++;
             if(life===4){
            stopCounter();
            show("gameover");
          
            document.getElementById("gameover").innerHTML = "<p>Game Over!</p>your score is " + score + ".<p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
                   hide("liferemaning");
            isPlaying = false;
            document.getElementById("startreset").innerHTML='Start Game';
             }else{
             hide("life"+life);
             setTimeout(function(){
                 hide("wrong");
             },1000)
             }
         }
     }
 }
}
// if we click answer box 
    //if we are playing

        //answer correct?
         //yes
            //increse score
            //show correct box for 1s
            //generate new Q&A4
         //no
            //show try again 1s
//functions
// start counter
function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingValue").innerHTML=timeremaining;
        if(timeremaining == 0){
            //gameover
            stopCounter();
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game Over!</p>your score is " + score + ".<p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            isPlaying = false;
            document.getElementById("startreset").innerHTML='Start Game';
        }
    },1000)
}
function stopCounter(){
    clearInterval(action);
}
function hide(Id){
    document.getElementById(Id).style.display= "none";
}
function show(Id){
    document.getElementById(Id).style.display= "block";
}
//generate question and mulioule answer
function generateQA(){
    let x= 1+Math.round(9*Math.random());
    let y= 1+Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML= x + "x" +y;
    let correctPosition =1+Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML=correctAnswer;
    let answers=[correctAnswer]
    for(i=1;i<5;i++){
        if(i !== correctPosition){
            let wrongAnswer;
            do{wrongAnswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));}
            while(answers.indexOf(wrongAnswer) > -1)
            
            document.getElementById("box"+i).innerHTML=wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
    
}