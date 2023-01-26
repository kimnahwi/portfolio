$(function(){

  const section = $('section');
  const li = $('.gnb ul li');

  //fullpage_event

  section.mousewheel(function(e,delta){
    console.log($(window).scrollTop());
    if(delta>0) {
      let prev = $(this).prev().offset().top;
      $('html,body').stop().animate({
        scrollTop:prev
      },1000);
    }else if(delta<0){
      let next = $(this).next().offset().top;
      $('html,body').stop().animate({
        scrollTop:next
      },1000);
    }
  })

  //indicator_event

  $(window).scroll(function(){
    if($(this).scrollTop()>900) {
      $('.indicator').stop().fadeIn(500);
      $('.indicator').css('top',$(window).height()/2-$('.indicator').height()/2);
    }else{
      $('.indicator').stop().fadeOut(500);
    }

    section.each(function(){
      let sectionPoint = $(window).scrollTop();
      let target = $(this);
      let i = target.index();

      if(sectionPoint>=target.offset().top){
        $('.indicator li').removeClass('on');
        $('.indicator li').eq(i).addClass('on');
      }
    })
  })

  $('.indicator a').click(function(e){
    e.preventDefault();

    $(window).stop().scrollTo(this.hash || 0, 1000)
  })

  //gnb_event
  
  li.eq(1).click(function(){
    $('html,body').stop().animate({
      scrollTop: $('#contents01').offset().top
    },500)
  })

  li.eq(2).click(function(){
    $('html,body').stop().animate({
      scrollTop: $('#contents02').offset().top
    },500)
  })

  li.eq(3).click(function(){
    $('html,body').stop().animate({
      scrollTop: $('#contents05').offset().top
    },500)
  })

  li.eq(4).click(function(){
    $('html,body').stop().animate({
      scrollTop: $('#contents06').offset().top
    },500)
  })

  //scroll_event

  if($(this).scrollTop()==section.eq(0).offset().top){
    $('.intro_ani').stop().addClass('on');
  }else {
    $('.intro_ani').stop().removeClass('on');
  }

  $(window).scroll(function(){
    if($(this).scrollTop()==section.eq(0).offset().top){
      $('.intro_ani').stop().addClass('on');
    }else {
      $('.intro_ani').stop().removeClass('on');
    }

    if($(this).scrollTop()==section.eq(1).offset().top){
      $('.cont01_ani').stop().addClass('on');
    }else if($(this).scrollTop()==section.eq(2).offset().top) {
      $('.cont02_ani').stop().addClass('on');
    }else if($(this).scrollTop()==section.eq(3).offset().top) {
      $('.cont03_ani').stop().addClass('on');
    }else if($(this).scrollTop()==section.eq(4).offset().top) {
      $('.cont04_ani').stop().addClass('on');
    }else if($(this).scrollTop()==section.eq(5).offset().top) {
      $('.cont05_ani').stop().addClass('on');
    }else if($(this).scrollTop()==section.eq(6).offset().top) {
      $('.cont06_ani').stop().addClass('on');
    }
  })

  //mouseover_event

  $('.dmall_img>img').mouseenter(function(){
    $(this).stop().animate({
      top:-($(this).height()-305)
    },9000)
  }).mouseleave(function(){
    $(this).stop().animate({
      top:0
    },6000)
  })

  $('.seoul_m_img>img').mouseenter(function(){
    $(this).stop().animate({
      top:-($(this).height()-305)
    },9000)
  }).mouseleave(function(){
    $(this).stop().animate({
      top:0
    },6000)
  })

  $('.seoul_w_img>img').mouseenter(function(){
    $(this).stop().animate({
      top:-($(this).height()-303)
    },9000)
  }).mouseleave(function(){
    $(this).stop().animate({
      top:0
    },6000)
  })

  $('.daesang_img>img').mouseenter(function(){
    $(this).stop().animate({
      top:-($(this).height()-305)
    },9000)
  }).mouseleave(function(){
    $(this).stop().animate({
      top:0
    },6000)
  })

  //click_event 

  const banner = $('.cont05_ani>li');
  const popupClose = $('.popup_close')

  banner.eq(0).click(function(){
    $('.cont05_popup01').stop().show();
  });

  banner.eq(1).click(function(){
    $('.cont05_popup02').stop().show();
  });

  banner.eq(2).click(function(){
    $('.cont05_popup03').stop().show();
  });

  banner.eq(3).click(function(){
    $('.cont05_popup04').stop().show();
  });

  popupClose.click(function(){
    $('.popup').stop().hide();
  })


})