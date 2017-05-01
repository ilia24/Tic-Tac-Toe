$(function() {
  console.log("JS loaded");

  $('#gamegrid').on('click', '.block', function(){
    $(this).attr('class', 'occupiedblock');
  });
});
