var header = document.querySelector(".points");
var btns = header.querySelectorAll(".btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
function addCart() {
  nav_div.classList.toggle("not-visible");
  console.log("hhh");
  var ham = document.querySelector(".hamburger");
  ham.classList.toggle("activeHam");
  console.log(ham);
}
var cart = document.getElementById("gg");
var nav_div = document.getElementById("cart");
// nav_div.addEventListener("click", addCart);
