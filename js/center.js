$(document).ready(function(){
  $('.dscr').css({ 'width':'100%', 'text-align':'center' });
  var dscr = $('.dscr').height();
  var h = dscr/2;
  var w1 = $(window).height();
  var w = w1/2;
  var m = w - h
  $('.dscr').css("margin-top",m + "px")
});

$(window).resize(function() {
  $('.dscr').css({ 'width':'100%', 'text-align':'center' });
  var dscr = $('.dscr').height();
  var h = dscr/2;
  var w1 = $(window).height();
  var w = w1/2;
  var m = w - h
  $('.dscr').css("margin-top",m + "px")     
});