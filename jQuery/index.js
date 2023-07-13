$("h1").css("color","red");

$("button").click(function(){
    $("h1").css("color","purple");
})

$("h1").addClass("pressed");


$(document).keydown((a)=>{
    $("h1").text(a.key);
})

$("h1").before("<button> new </button>");
$("h1").after("<button> new </button>");
$("h1").prepend("<button> new </button>");
$("h1").append("<button> new </button>");
$("button").first().remove();