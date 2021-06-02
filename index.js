var headings = ['Hungry!', 'Bored!', 'Unexpected Guests?'];
var i = 0;
var intervalId = setInterval(function () {
  document.getElementById('variate').innerHTML = headings[i];
  if (i == (headings.length - 1)) { i = 0; }
  else { i++; }
}, 2000)