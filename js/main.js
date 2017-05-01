$(function() {
  console.log("JS loaded");

  $('#gamegrid').on('click', '.block', function(){
    if ($('#gamegrid').attr('class') == 'turn_x') {
      $(this).append($('.x'))

      $('#turntext1').text("It is O's turn");
      $('#gamegrid').attr('class', 'turn_o')
    } else {
      $(this).prepend($('.o'))

      $('#turntext1').text("It is X's turn");
      $('#gamegrid').attr('class', 'turn_x')
    }

  });
});


// make a general class for turn, update that everytime
// every turn update the class of the list item to be X or O
// then do an if statement to check if theres 3 x's or 0's
