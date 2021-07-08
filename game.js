


var level = 0;
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [] ;
var started = false;
$(document).keypress(function() { //يتاكد من بداية اللعبه
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(){ // يشوف اي زر انضغط ويسوي انميشن ويشغل صوت ويرسل الاجابه عشان يتاكد


var userChosenColour =   this.id ;
 userClickedPattern.push(userChosenColour);


  animatePress(userChosenColour);
  playSound(userChosenColour);
checkAnswer(userClickedPattern.length-1);

});


function nextSequence() { // هنا نبدا اللعبه ونظام اللعبه كله هنا


  userClickedPattern = [] ;


  $("#level-title").text("Leval " +level );
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

level++;

}


function checkAnswer(currentLevel) { // ميثود تشيك الاجابه لو صح كمل لو غلط عيد من البدايه

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");


      if (userClickedPattern.length === gamePattern.length){


        setTimeout(function () {
          nextSequence();
        }, 500);

      }

    } else {

      console.log("wrong");
      playSound("wrong");
      $("body").addClass("game-over");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver()
    }

}



function playSound(name) { // تشغل موسيقى مع الضغطه
  // var audio = new Audio("sounds/" + name + ".mp3");
  // audio.play();
}


function animatePress(cl) { // يضيف انميشن الضغطه ويشيله
  $("#" + cl).addClass("pressed");

  setTimeout(function() {
    $("#" + cl).removeClass("pressed");
  }, 100)
}

function  startOver() { // تشتغل بعد م ي يغلط اليوزر
level = 1;
  gamePattern =  [] ;
  started = false;
}
