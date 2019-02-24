var playing = false;
var score;
// if we click star/reset button
document.getElementById('startreset').onclick = function() {
  // if playing
  if (playing == true) {
    location.reload(); // reload page
  } else { // if not playing
    playing = true;
    score = 0;
    document.getElementById('scorevalue').innerHTML = score;
    document.getElementById('timeremaining').style.display = 'block';
    // change button to reset

    document.getElementById('startreset').innerHTML = 'Reset Game';

  }

}

// reload
//if not playing
// show countdown
// reduce time by 1 second
