$(function(){
  $('.scroll-btn').on('click',function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html, body').animate({'scrollTop':position},500);
  })

  $('.btn').on('click',function(){
    $('html,body').animate({'scrollTop':0},500);
  })


});