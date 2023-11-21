document.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var scrolled = window.scrollY;

  if (scrolled > 200) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("scroll", function () {
  var typewriter = document.getElementById("typeabout");
  var about = window.scrollY;

  if (about > 80) {
    typewriter.classList.add("about");
  } else {
    typewriter.classList.remove("about");
  }
});


document.addEventListener("scroll", function(){
  var typewriter = document.getElementById("typeporto");
  var titleporto = window.scrollY;

  if (titleporto > 1300) {
    typewriter.classList.add("titleporto");
  } else {
    typewriter.classList.remove("titleporto")
  }
})
