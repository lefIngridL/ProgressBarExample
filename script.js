// Model
const app = document.getElementById('app');

// View
updateView();
function updateView(){
    html = /*html*/ `
<h1>JavaScript Progress Bar</h1>

<div id="myProgress">
  <div id="myBar">100%</div>
</div>

<br>
<button onclick="move()">Click Me</button>
    `;
    app.innerHTML = html;
}


// Controler

var i = 100;
function move() {
  if (i == 100) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 100;
    var id = setInterval(frame, 100);
    function frame() {
      if (width <= 0) {
        clearInterval(id);
        i = 100;
      } else {
        width--;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

/*var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}


*/