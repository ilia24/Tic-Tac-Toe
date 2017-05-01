$(function() {
  console.log("JS loaded");

  $('#gamegrid').on('click', '.block', function(){
    if ($('#gamegrid').attr('class') === 'turn_x' && $(this).attr('id') != 'clicked' )  {
      $(this).append($('<p class="x">X</p>'))
      $(this).attr('id', 'clicked')
      $('#turntext1').text("It is O's turn");
      $('#gamegrid').attr('class', 'turn_o')
    } else if ($('#gamegrid').attr('class') === 'turn_o' && $(this).attr('id') != 'clicked' ) {
      $(this).append($('<p class="o">O</p>'))
      $(this).attr('id', 'clicked')
      $('#turntext1').text("It is X's turn");
      $('#gamegrid').attr('class', 'turn_x')
    }


    if ($('.block.one p').attr('class') === 'x' && $('.block.two p').attr('class') === 'x' && $('.block.three p').attr('class') === 'x') {
      console.log('X wins the game');
    } else if ($('.block.one p').attr('class') === 'o' && $('.block.two p').attr('class') === 'o' && $('.block.three p').attr('class') === 'o') {
      console.log('O wins the game');
    } else if ($('.block.four p').attr('class') === 'x' && $('.block.five p').attr('class') === 'x' && $('.block.six p').attr('class') === 'x') {
      console.log('X wins the game');
    } else if ($('.block.four p').attr('class') === 'o' && $('.block.five p').attr('class') === 'o' && $('.block.six p').attr('class') === 'o') {
      console.log('O wins the game');
    } else if ($('.block.seven p').attr('class') === 'x' && $('.block.eight p').attr('class') === 'x' && $('.block.nine p').attr('class') === 'x') {
      console.log('X wins the game');
    } else if ($('.block.seven p').attr('class') === 'o' && $('.block.eight p').attr('class') === 'o' && $('.block.nine p').attr('class') === 'o') {
      console.log('O wins the game'); // LEFT TO RIGHT ENDS HERE, TOP TO BOTTOM BEGINS HERE
    } else if ($('.block.one p').attr('class') === 'x' && $('.block.four p').attr('class') === 'x' && $('.block.seven p').attr('class') === 'x') {
      console.log('X wins the game');
    } else if ($('.block.one p').attr('class') === 'o' && $('.block.four p').attr('class') === 'o' && $('.block.seven p').attr('class') === 'o') {
      console.log('O wins the game');
    } else if ($('.block.two p').attr('class') === 'x' && $('.block.five p').attr('class') === 'x' && $('.block.eight p').attr('class') === 'x') {
      console.log('X wins the game');
    } else if ($('.block.two p').attr('class') === 'o' && $('.block.five p').attr('class') === 'o' && $('.block.eight p').attr('class') === 'o') {
      console.log('O wins the game');
    } else if ($('.block.three p').attr('class') === 'x' && $('.block.six p').attr('class') === 'x' && $('.block.nine p').attr('class') === 'x') {
      console.log('X wins the game');
    } else if ($('.block.three p').attr('class') === 'o' && $('.block.six p').attr('class') === 'o' && $('.block.nine p').attr('class') === 'o') {
      console.log('O wins the game'); //TOP DOWN ENDS HERE
    } else if ($('.block.one p').attr('class') === 'o' && $('.block.five p').attr('class') === 'o' && $('.block.nine p').attr('class') === 'o') {
      console.log('O wins the game');
    } else if ($('.block.one p').attr('class') === 'x' && $('.block.five p').attr('class') === 'x' && $('.block.nine p').attr('class') === 'x') {
      console.log('X wins the game');
    } else if ($('.block.three p').attr('class') === 'o' && $('.block.five p').attr('class') === 'o' && $('.block.seven p').attr('class') === 'o') {
      console.log('O wins the game');
    } else if ($('.block.three p').attr('class') === 'x' && $('.block.five p').attr('class') === 'x' && $('.block.seven p').attr('class') === 'x') {
      console.log('X wins the game');
    }







  });
});


// make a general class for turn, update that everytime
// every turn update the class of the list item to be X or O
// then do an if statement to check if theres 3 x's or 0's
