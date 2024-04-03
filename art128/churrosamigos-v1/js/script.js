const logo = document.querySelector(".logo-img")
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    logo.style.width = "10em";
    logo.style.margin = "6em";
    logo.style.height = "auto";
  } else {
    logo.style.width = "50em";
    logo.style.margin = "0";

  }
}