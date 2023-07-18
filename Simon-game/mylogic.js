let i = 0;
let sequence = [];

function seq() {
    for(i=0;i<10;i++){
        sequence[i]= Math.floor(Math.random()*4)+1;
    }
}

$(document).keydown(()=>{
    seq();
    for(i=0;i<10;i++){
        alert(i);
        let press = sequence[i];
        switch (press) {
            case 1:
                $(".green").addClass("pressed");
                setTimeout(() => {
                   $(".green").removeClass("pressed"); 
                }, 100);
                break;
            
            case 2:
                $(".red").addClass("pressed");
                setTimeout(() => {
                    $(".red").removeClass("pressed"); 
                 }, 100);
                break;
            case 3:
                $(".yellow").addClass("pressed");
                setTimeout(() => {
                    $(".yellow").removeClass("pressed"); 
                 }, 100);
                break;
            case 4:
                $(".blue").addClass("pressed")
                break;
            default:
                continue;
                break;
        }
    }


})

for(let i = 0;i <gamePattern.length;i++){
    if(gamePattern.length == userClickedPattern.length){
        userClickedPattern = [];
        nextSequence();
        
        exit;
    }
    else if(userChosenColour == gamePattern[i]){
        console.log(userChosenColour);
    }
    else if(userChosenColour != gamePattern[i]){
        alert("wrong button pressed")
        exit();    
    }
   
}