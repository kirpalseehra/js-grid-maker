document.addEventListener('DOMContentLoaded', function () {
  // Add code here
  const board = document.getElementById('board');

  function createGrid(x) {
    for (var rows = 0; rows < 3; rows++) {
      for (var cols = 0; cols < 3; cols++) {
        $("#board").append("<div id='board'></div>");
      };
    };
    $(".cols").width(960 / x);
    $(".rows").height(960 / x);
  };




});
