// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log("Sanity Check: DOM is Ready!");

  // Initialize variables. Player images, finishline, and 3 win logic counters
  var playerA = "assets/images/square-isosceles-150x150.png";
  var playerB = "assets/images/triple-hatch-scalene.png";
  var finish = "assets/images/finish-line.png";
  var p1A = 2;
  var p2B = 2;
  var hasWon = false;

  // jQuery implimentation to rotate images
  // $("#finishLine").rotate(90);

  // Start button logic to being the game and place player pieces on board
  $('#start').on('click', function() {
    $('#move-1B').append(`<img id="move-1B" alt="scalene" width="150" height="150" src=${playerB}>`); // add the triangle to the board
    $('#move-1A').append(`<img id="move-1A" alt="isosceles" width="150" height="150" src=${playerA}>`); // add the other triangle to the board
  })

  // Play again button logic to start the game over and race again
  $('#play-again').on('click', function() {
    $(`#move-${p1A-1}A`).empty()
    $(`#move-${p2B-1}B`).empty()
    $('#move-1B').append(`<img id="move-1B" alt="scalene" width="150" height="150" src=${playerB}>`); // add the triangle to the board
    $('#move-1A').append(`<img id="move-1A" alt="isosceles" width="150" height="150" src=${playerA}>`); // add the other triangle to the board
    p1A = 2;
    p2B = 2;
    hasWon = false;
    $('h1').replaceWith(`<h1>Isosceles vs. Scalene</h1>`);
  })

  // logic section that tracks keydown strokes to move the players forward
  $(document).keydown(function(e) {

    if (e.which == 80 && (p2B < 13 - 1) && (hasWon === false)) { // 80 is the lowercase 'p' key
      $(`#move-${p2B-1}B`).empty()
      $(`#move-${p2B}B`).append(`<img id="move-${p2B}B" alt="scalene" width="150" height="150" src=${playerB}>`); // move triangle to the next space
      if (p2B < 12 - 1 && (hasWon === false)) {
        p2B += 1;
      } else {
        console.log("The scalene wins the game!")
        p2B += 1; // this was needed in order to make play-again work properly
        hasWon = true;
        $('h1').replaceWith(`<h1>Scalene Wins the Game!</h1>`);
      }
    } else if (e.which == 81 && (p1A < 13 - 1) && (hasWon === false)) { // 81 is the lowercase 'q' key
      $(`#move-${p1A-1}A`).empty()
      $(`#move-${p1A}A`).append(`<img id="move-${p1A}A" alt="isosceles" width="150" height="150" src=${playerA}>`); // move other triangle to the next space
      console.log(p1A);
      if (p1A < 12 - 1 && (hasWon === false)) {
        p1A += 1;
      } else {
        console.log("The isosceles wins the game!")
        p1A += 1; // this was needed in order to make play-again work properly
        hasWon = true;
        $('h1').replaceWith(`<h1>Isosceles Wins the Game!</h1>`);
      }

    }
  }); // Closing the document.keydown function

}); // Closing the .Ready Function

// At some point I will refactor move into a function to reduce code and a few lines of repeating.
// function movePlayer () {
// $('div').on('click', function (){
//
//     $('#move-1A').empty();
//     $('#move-2A').replaceWith("<p id=move-2A>Move</p>");
// });
// }
