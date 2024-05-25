
    var buttonColors = ["red","blue","green","yellow"];
    var gamePattern = [];
var started = false;
var level = 0;
$(document).keydown(function(){
   if(!started){
    $("#level-title").text("Level  "+level);
     nextSequence();
     started = true;
   }
})
var userClickedPattern = [];
$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer((userClickedPattern.length)-1);
});
function checkAnswer(currentLevel){
    
if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    if (userClickedPattern.length === gamePattern.length){

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {
     $("body").addClass("game-over");
     setTimeout(function(){
        $("body").removeClass("game-over");
     },200);   
     $("#level-title").text("Game Over, Press Any Key to Restart"); 
   playSound("wrong");
   startOver();

  }

}
 
function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level  "+level);
   var randomNumber = Math.floor(Math.random() * 4);
   var randomChosenColor = buttonColors[randomNumber];
   gamePattern.push(randomChosenColor);
   $("#"+randomChosenColor).fadeIn().fadeOut().fadeToggle();
   playSound(randomChosenColor);
}

function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3");
   audio.play();
}
function animatePress(currentColor){
   $("#"+currentColor).addClass("pressed");
   setTimeout(function(){
     $("#"+currentColor).removeClass("pressed");
   },100);
}
function startOver(){
    ievel = 0;
    gamePattern = [];
    started = false;
}

