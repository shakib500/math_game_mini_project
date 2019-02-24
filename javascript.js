var playing = false;
var score;
var action;
var timeremaining;
// if we click star/reset button
document.getElementById('startreset').onclick = function() {
  // if playing
  if (playing) {
    location.reload(); // reload page
  } else {// if not playing
    //change mode to playing
    playing = true;
    score = 0;
    document.getElementById('scorevalue').innerHTML = score;
    // show countdown box
    show('timeremaining');
    timeremaining = 60;
    document.getElementById('timeremainingvalue').innerHTML = timeremaining;
    // change button to reset
    document.getElementById('startreset').innerHTML = 'Reset Game';
    // start countdown
    startCountDown();

  }
}

function startCountDown(){
  action = setInterval(function(){
    timeremaining -= 1;
    document.getElementById('timeremainingvalue').innerHTML = timeremaining;
    if(timeremaining == 0){
      // game over
      stopCountDown();

    show('gameOver');
    document.getElementById('gameOver').innerHTML = '<p>Game Over!</p><p>Your Score is  ' + score + '.</p>'
    hide('timeremaining');
    hide('correct');
    hide('wrong');
    playing = false;
    }
  },1000);
}

function stopCountDown(){
  clearInterval(action);
}

// To hide an element
function hide(Id){
  document.getElementById('Id').style.display = 'none';
}
// To show an element
function show(Id){
  document.getElementById('Id').style.display = 'block';
}

// reload
//if not playing
// show countdown
// reduce time by 1 second
