var playing = False;
var score;
// if we click star/reset button
document.getElementById('startreset').onclick = function() {
  // if playing
  if (playing) {
    location.reload(); // reload page
  } else { // if not playing
    score = 0;
    document.getElementById('scorevalue').innerHTML = score;
    document.getElementById('timeremaining').style.display = 'block';
  }

}

// reload
//if not playing
// show countdown
// reduce time by 1 second
