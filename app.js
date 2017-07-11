// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log("Sanity Check: DOM is Ready!");

  var playerA = "images/isosceles-triangle.png";
  var playerB = "images/scalene-triangle.png";

$('button').on("click", function(){
  //  movePlayer();
    $('#move-1A').replaceWith(`<img alt="isosceles" width="68" height="80" src=${playerA}>`);
    $('#move-1B').replaceWith(`<img alt="scalene" width="80" height="68" src=${playerB}>`);
})



}); // Closing the .Ready Function

// function movePlayer () {
// $('div').on('click', function (){
//
//     $('#move-1A').empty();
//     $('#move-2A').replaceWith("<p id=move-2A>Move</p>");
// });
// }
