'use strict';

$(".openbtn").click(function(){
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function(){
  $(".openbtn").removeClass('active');
  $("#g-nav").removeClass('panelactive');
})


$('.slider').slick({
  arrows:true,
  slidesToShow:3,
  initialSlide: 1,
  centerMode: true,
  prevArrow: '<div class="prev"></div>',
  nextArrow: '<div class="next"></div>',
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        initialSlide: 0,
      }
    }
  ]
});

function ScrollAnime(){
  var scroll = $(window).scrollTop();
  var contentsTop = Math.round($('#top').offset().top);
  if(scroll > contentsTop){
    $('.site-title, .header_line').removeClass('DownMove');
    $('.site-title, .header_line').addClass('UpMove');
  }else {
    if ($('.site-title, .header_line').hasClass('UpMove')){
      $('.site-title, .header_line').removeClass('UpMove');
      $('.site-title, .header_line').addClass('DownMove');
    }
  }
}


function PageTopAnime(){
  var windowH = $(window).height();
  var scroll = $(window).scrollTop();
  var contentsTop = Math.round($('#top').offset().top);
  if(scroll - windowH + 50 >= contentsTop){
    $('#page-top').removeClass('RightMove');
    $('#page-top').addClass('LeftMove');
  }else{
    if($('#page-top').hasClass('LeftMove')){
      $('#page-top').removeClass('LeftMove');
      $('#page-top').addClass('RightMove');
    }
  }
}

$(window).scroll(function(){
  ScrollAnime();
  PageTopAnime();
});

$('#page-top').click(function(){
  $('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});

$('.recruit_btn').on('click', function(){
  let hrefElement = $(this).attr('href');
  let position = $(hrefElement).offset().top
  $('body,html').animate({
    scrollTop: position
  }, 500);
  return false;
});

$('.footer_list a').on('click', function(){
  let hrefElement = $(this).attr('href');
  let position = $(hrefElement).offset().top
  $('body,html').animate({
    scrollTop: position
  }, 500);
  return false;
});


function blurAnime(){
  $('.blurTrigger').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll =$(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight){
      $(this).addClass('blur');
    }else {
      $(this).removeClass('blur');
    }
  });
}


$(window).on('load', function(){
  blurAnime();
});


function fadeAnime(){
  $('.fadeInTrigger').each(function(){
    var elemPos = $(this).offset().top+200;
    var scroll =$(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');
    }else {
      $(this).removeClass('fadeIn');
    }
  });

  $('.flipLeftTrigger').each(function(){
    var elemPos = $(this).offset().top;
    var scroll =$(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight){
      $(this).addClass('flipLeft');
    }else {
      $(this).removeClass('flipLeft');
    }
  });

  $('.zoomInTrigger').each(function(){
    var elemPos = $(this).offset().top+200;
    var scroll =$(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight){
      $(this).addClass('zoomIn');
    }else {
      $(this).removeClass('zoomIn');
    }
  });
}

$(window).scroll(function(){
  fadeAnime();
});