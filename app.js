// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  console.log("Sanity Check: DOM is Ready!");

  function movePlayer () {
  $('div').on('click', function (){

      $('#move-1A').empty();
      $('#move-2A').replaceWith("<p id=move-2A>Move</p>");
  });
}
movePlayer();

}); // Closing the .Ready Function
