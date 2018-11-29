document.addEventListener('DOMContentLoaded', function () {
  // Add code here
  const board = document.getElementById('board');

  // function createGrid(x) {
  //   for (var rows = 0; rows < 3; rows++) {
  //     for (var cols = 0; cols < 3; cols++) {
  //       $("#board").append("<div id='board'></div>");
  //     };
  //   };
  //   $(".cols").width(960 / x);
  //   $(".rows").height(960 / x);
  // };

  // function genDivs(v) {
  //   var e = document.body; // whatever you want to append the rows to: 
  //   for (var i = 0; i < v; i++) {
  //     var row = document.createElement("div");
  //     row.className = "row";
  //     for (var x = 1; x <= v; x++) {
  //       var cell = document.createElement("div");
  //       cell.className = "gridsquare";
  //       cell.innerText = (i * v) + x;
  //       row.appendChild(cell);
  //     }
  //     e.appendChild(row);
  //   }
  //   document.getElementById("code").innerText = e.innerHTML;

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var div = document.createElement("div");
      div.style.width = "30px";
      div.style.height = "30px";
      div.style.background = "black";

      var jump = document.createElement("br");
      document.getElementById("board").appendChild(jump);
      document.getElementById("board").appendChild(div);
    }
  }



});

genDivs();