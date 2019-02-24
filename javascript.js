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
    document.getElementById('timeremaining').style.display = 'block';
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

    document.getElementById('gameOver').style.display = 'block';
    document.getElementById('gameOver').innerHTML = '<p>Game Over!</p><p>Your Score is  ' + score + '.</p>'
    document.getElementById('timeremaining').style.display = 'none';
    }
  },1000);
}

function stopCountDown(){
  clearInterval(action);
}

// reload
//if not playing
// show countdown
// reduce time by 1 second
