$(function() {
  $('.ticBox').click(function() {
    $(this).html('<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>');
  });
  $('.ticBox').dblclick(function() {
    $(this).html('<span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>');
  });
  $('#clearButton').click(function() {
    $('.ticBox span').remove();
  });
  $('#playTheGame').click(function() {
    $('#playTheGame').remove();
    $('#theGame').fadeIn();
  })
  $('#colorChanger').click(function() {
    // alert("main coon");
    $('body').toggleClass('invert');
  })
});
