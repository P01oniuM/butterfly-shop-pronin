$(document).ready(function()
{
  $('.burger').click(function(){
    $('span:nth-child(1)').toggleClass('first');
    $('span:nth-child(2)').toggleClass('middle');
    $('span:nth-child(3)').toggleClass('last');
  });

  $('.burger').click(function(){
    $('.menu-burger').toggleClass('menu-active');
  });





});
