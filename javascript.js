var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
// if we click star/reset button
document.getElementById('startreset').onclick = function() {
  // if playing
  if (playing) {
    location.reload(); // reload page
  } else { // if not playing
    //change mode to playing
    playing = true;
    score = 0;
    document.getElementById('scorevalue').innerHTML = score;
    // show countdown box
    show('timeremaining');
    timeremaining = 60;
    document.getElementById('timeremainingvalue').innerHTML = timeremaining;
    // hide game over box
    hide('gameOver');
    // change button to reset
    document.getElementById('startreset').innerHTML = 'Reset Game';
    // start countdown
    startCountDown();

    // generate new QA
    generateQA();

  }
}

function startCountDown() {
  action = setInterval(function() {
    timeremaining -= 1;
    document.getElementById('timeremainingvalue').innerHTML = timeremaining;
    if (timeremaining == 0) {
      // game over
      stopCountDown();

      show('gameOver');
      document.getElementById('gameOver').innerHTML = '<p>Game Over!</p><p>Your Score is  ' + score + '.</p>'
      hide('timeremaining');
      hide('correct');
      hide('wrong');
      playing = false;
      document.getElementById('startreset').innerHTML = 'Start Game';
      //hide('gameOver');
    }
  }, 1000);
}

function stopCountDown() {
  clearInterval(action);
}

// To hide an element
function hide(id) {
  document.getElementById(id).style.display = 'none';
}
// To show an element
function show(id) {
  document.getElementById(id).style.display = 'block';
}

// for generating Question and multiple Answer
function generateQA() {
  var x = 1 + Math.round(9 * Math.random());
  var y = 1 + Math.round(9 * Math.random());
  correctAnswer = x * y;
  document.getElementById('question').innerHTML = x + ' X ' + y;
  var correctPosition = 1 + Math.round(3 * Math.random());
  // filling 1 box with the correct answer
  document.getElementById('box' + correctPosition).innerHTML = correctAnswer;

  var answers = [correctAnswer];

  for (i = 1; i < 5; i++) {
    if (i != correctPosition) {
      var wrongAnswer;
      do {
        wrongAnswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random())); // a wrong answer
        document.getElementById("box" + i).innerHTML = wrongAnswer;
      }
      while (answers.indexOf(wrongAnswer) > -1)
    }
  }
}
// reload
//if not playing
// show countdown
// reduce time by 1 second
