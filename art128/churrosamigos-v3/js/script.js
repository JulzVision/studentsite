const parallax = document.getElementById("reef");

window.addEventListener("scroll", function(){

  // Does scrollY do the same as pageYOffset? the console.log does not log in Chrome Inspect
  let offset = window.scrollY;
  console.log ('Offset: ' + offset);
  parallax.style.backgroundPositionY = offset * 0.7 + 'px';
  
})