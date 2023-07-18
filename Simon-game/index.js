let buttonColours = ["red","blue","green","yellow"];

let gamePattern = [];

let level = 0;
let started = false;
let userClickedPattern = [];


$(".btn").click(function (){
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);              //checking for which button is clicked
    
    animatePress(userChosenColour);
    playSound(userChosenColour);
    
    checkAnswer(userClickedPattern.length -1);

    
    
});

$(document).keydown(function (){
    if(!started){
        nextSequence();
        started = true;
    }
});

   //.one is used to let keydown event only once




function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success",);   
        
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(() => {
                nextSequence();
            }, 1000);

        }
    }
    else{
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");    
        }, 200);
        playSound("wrong");
        $("h1").text("Game Over, Press Any Key to Restart")
        starOver();
        
    }
}


function starOver() {
    level = 0;
    gamePattern = [];
    started = false;

}

function nextSequence(){
    
    userClickedPattern = [];

    let randomNmuber = Math.floor(Math.random()*4);
    
    randomChosenColour = buttonColours[randomNmuber];
    gamePattern.push(randomChosenColour)

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);                              //Its not playing everytime we reload   

    level = level + 1;
    $("#level-title").text("Level " + level);

}


              
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
   
}



function playSound(awaaz){
    var sound = new Audio("sounds/"+ awaaz + ".mp3");
    sound.play();
}
/*function playSound(key) {    
    switch (key) {
        case "red":
            var sound = new Audio("sounds/red.mp3");
            sound.play();
            break;
        case "blue":
            var sound = new Audio("sounds/blue.mp3");
            sound.play();
            break;
        case "green":
            var sound = new Audio("sounds/green.mp3");
            sound.play();
            break;
        case "yellow":
            var sound = new Audio("sounds/yellow.mp3");
            sound.play();
            break;
        default:
            alert("error");
            break;
    }
}*/


