var header = document.getElementById("degree-select");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    console.log("pressed");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
