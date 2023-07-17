let buttonColours = ["red","blue","green","yellow"];

let gamePattern = [];

let userClickedPattern = [];


$(".btn").click(function (){
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);              //checking for which button is clicked
    animatePress(userChosenColour);
    playSound(userChosenColour);
    
})

$(document).one("keydown",()=>{           //.one is used to let keydown event only once
    nextSequence();
})

nextSequence();
nextSequence();
nextSequence();
nextSequence();

function nextSequence(){
    
    let randomNmuber = Math.floor(Math.random()*4);
    
    randomChosenColour = buttonColours[randomNmuber];
    gamePattern.push(randomChosenColour)

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);                              //Its not playing everytime we reload   

}


              
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
   
}


function playSound(key) {    
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
}


