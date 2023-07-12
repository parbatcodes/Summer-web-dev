
document.addEventListener("keydown", function(a) {
    Keypressed(a.key);                     // How a gives out all the details about the key pressed?
    buttonAnimation(a.key);

});


/*document.addEventListener("keyup",function(a){
    removeAnimation(a.key);                   //to remove the animation when the key is pressed
})*/

var nodrumbuttons = document.querySelectorAll(".drum").length;

var i=0;
for(i=0;i<=nodrumbuttons;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    
    var buttonhtml = this.innerHTML;

    Keypressed(buttonhtml);
    buttonAnimation(buttonhtml);
} );

}

function Keypressed(key){

    switch (key) {
        case "w":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;    
        case "l":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        default:
            console.log(buttonhtml)
            break;
    }
}


function buttonAnimation(key){
    var activeButton = document.querySelector("."+key).classList.add("pressed");

    setTimeout(() => {
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);
}

/*function removeAnimation(key){
    var activeButton = document.querySelector("."+key).classList.remove("pressed");
}*/