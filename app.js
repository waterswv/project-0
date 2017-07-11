// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log("Sanity Check: DOM is Ready!");

  var playerA = "images/isosceles-triangle.png";
  var playerB = "images/scalene-triangle.png";
  var p1A = 2;
  var p2B = 2;

  $('button').on('click', function() {
    $('#move-1B').replaceWith(`<img id="move-1B" alt="scalene" width="80" height="68" src=${playerB}>`); // add the triangle to the board
    $('#move-1A').replaceWith(`<img id="move-1A" alt="isosceles" width="68" height="80" src=${playerA}>`); // add the other triangle to the board
  })

  $(document).keydown(function(e) {

    if (e.which == 80) { // 80 is the lowercase 'p' key
    $(`#move-${p2B-1}B`).replaceWith(`<img src="">`)
    $(`#move-${p2B}B`).replaceWith(`<img id="move-${p2B}B" alt="isosceles" width="68" height="80" src=${playerB}>`); // add the other triangle to the board
      p2B += 1;
    }
    if (e.which == 81) { // 81 is the lowercase 'q' key
      $(`#move-${p1A-1}A`).replaceWith(`<img src="">`)
      $(`#move-${p1A}A`).replaceWith(`<img id="move-${p1A}A" alt="isosceles" width="68" height="80" src=${playerA}>`); // add the other triangle to the board
      p1A += 1;
      console.log(p1A);
    }
  });






}); // Closing the .Ready Function

// function movePlayer () {
// $('div').on('click', function (){
//
//     $('#move-1A').empty();
//     $('#move-2A').replaceWith("<p id=move-2A>Move</p>");
// });
// }
