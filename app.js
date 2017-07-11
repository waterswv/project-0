// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log("Sanity Check: DOM is Ready!");

  var playerA = "images/isosceles-triangle.png";
  var playerB = "images/scalene-triangle.png";
  var p1A = 2;
  var p2B = 2;
  var hasWon = false;

  $('button').on('click', function() {
    $('#move-1B').replaceWith(`<img id="move-1B" alt="scalene" width="80" height="68" src=${playerB}>`); // add the triangle to the board
    $('#move-1A').replaceWith(`<img id="move-1A" alt="isosceles" width="68" height="80" src=${playerA}>`); // add the other triangle to the board
  })

  $(document).keydown(function(e) {

    if (e.which == 80 && (p2B < 13) && (hasWon === false)) { // 80 is the lowercase 'p' key
      $(`#move-${p2B-1}B`).replaceWith(`<img src="">`)
      $(`#move-${p2B}B`).replaceWith(`<img id="move-${p2B}B" alt="isosceles" width="68" height="80" src=${playerB}>`); // move triangle to the next space
      if (p2B < 12 && (hasWon === false)) {
        p2B += 1;
      } else {
        console.log(p2B);
        console.log("The scalene wins the game!")
        hasWon = true;
        
      }
    } else if (e.which == 81 && (p1A < 13) && (hasWon === false)) { // 81 is the lowercase 'q' key
      $(`#move-${p1A-1}A`).replaceWith(`<img src="">`)
      $(`#move-${p1A}A`).replaceWith(`<img id="move-${p1A}A" alt="isosceles" width="68" height="80" src=${playerA}>`); // move other triangle to the next space
      console.log(p1A);
      if (p1A < 12 && (hasWon === false)) {
        p1A += 1;
      } else {
        console.log(p1A);
        console.log("The isosceles wins the game!")
        hasWon = true;
      }

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
