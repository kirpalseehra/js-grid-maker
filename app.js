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

  function genDivs(v) {
    var e = document.body; // whatever you want to append the rows to: 
    for (var i = 0; i < v; i++) {
      var row = document.createElement("div");
      row.className = "row";
      for (var x = 1; x <= v; x++) {
        var cell = document.createElement("div");
        cell.className = "gridsquare";
        cell.innerText = (i * v) + x;
        row.appendChild(cell);
      }
      e.appendChild(row);
    }
    document.getElementById("code").innerText = e.innerHTML;




  });

genDivs();