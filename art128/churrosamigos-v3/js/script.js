const parallax = document.getElementById("reef");

window.addEventListener("scroll", function(){

  // Does scrollY do the same as pageYOffset? the console.log does not log in Chrome Inspect
  let offset = window.scrollY;
  console.log ('Offset: ' + offset);
  parallax.style.backgroundPositionY = offset * 0.7 + 'px';
  
})

//similar and more recent setup I found. I think I'd just have to replace .images with .reef.

const p_items = document.querySelectorAll('.parallax-wrapper .parallax-item');

window.addEventListener('scroll', () => {

  p_items[0].style.top = "-" + (window.scrollY / 2.5) + "px";
  p_items[1].style.top = "-" + (window.scrollY / 3.5) + "px";
  p_items[2].style.top = "-" + (window.scrollY / 4 ) + "px";

});