/*global jQuery:false, Swiper:false */
/*jshint trailing:false */

'use strict';

/*-----------------------------------------------------------------------------------*/
/*      Header
/*-----------------------------------------------------------------------------------*/

function textCenter() {
  jQuery('.text-container').css({
    position:'absolute'
  });

  jQuery('.text-container').css({
    left: (jQuery(window).width()/2 - jQuery('.text-container').outerWidth()/2),
    top: jQuery(window).height() - jQuery(window).height()/4 - jQuery('.text-container').outerHeight()/2
  });
}

jQuery(window).load(function() {
  textCenter(); 

  jQuery('#zyanya_intro').animate({opacity: '1', 'padding-top': '10px'}, 500,function() {
    jQuery('#atish_intro').animate({opacity: '1', 'padding-top': '10px'}, 500,function() {
      jQuery('#date_intro').animate({opacity: '1'}, 500, function() {
        jQuery('#explore').animate({opacity: '1', 'margin-top': '0em'}, 20, function() {
          jQuery('#rsvp_intro').animate({opacity: '1'}, 500);
        });
      });
    });
  });

});

jQuery(document).ready(function() {

  /*-----------------------------------------------------------------------------------*/
  /*      Navigation
  /*-----------------------------------------------------------------------------------*/
  
  // var animate='down';
  
  jQuery(window).bind('scroll', function () {
  
    var scrollTop = jQuery(window).scrollTop();
    
    /* Animation for Top Navigation 
    
    if (scrollTop > jQuery('#aboutus').offset().top-60 && animate === 'down') {
      animate='up';
      jQuery('#top-bar').stop().animate({top:'0'}, 300);
    } else if(scrollTop < jQuery('#aboutus').offset().top-60 && animate === 'up'){
      animate='down';
      jQuery('#top-bar').stop().animate({top:'-75px'}, 300);
    }
    */

    jQuery('section').each(function(){
      if (scrollTop > jQuery(this).offset().top-60){
        var section = jQuery(this).attr('id');
        jQuery('#top-navigation ul li').each(function(){
          if(section === jQuery(this).find('a').attr('href').replace('#','') && jQuery(this).not('.active')){
            jQuery('#top-navigation ul li').removeClass('active');
            jQuery(this).addClass('active');
          }
        });
      }
    });
    
  });
  
  /* Responsive Menu Click */
  jQuery('#menu-mobile').click(function(){
    if ( jQuery('#top-navigation ul').is(':visible') ) {
      jQuery('#top-navigation ul').slideUp(500);
      jQuery('#menu-mobile').removeClass('active');
    } else { 
      jQuery('#top-navigation ul').slideDown(500);
      jQuery('#menu-mobile').addClass('active');
    }
  });
  
  /* On Resize show menu on desktop if hidden */
  jQuery(window).resize(function() {
    textCenter();
    if(jQuery(window).width()>992){     
      if (jQuery('#top-navigation ul').is(':hidden') ) {
        jQuery('#top-navigation ul').show();
        jQuery('#menu-mobile').removeClass('active');           
      }
    } else {
      if (jQuery('#top-navigation ul').is(':visible') ) {
        jQuery('#top-navigation ul').hide();
        jQuery('#menu-mobile').removeClass('active');           
      }
    }
  });
  
  /*-----------------------------------------------------------------------------------*/
  /*      Smooth Scroll - Navigation + .scroll items
  /*-----------------------------------------------------------------------------------*/
  
  jQuery('#top-navigation li').bind('click',function(event){
    var anchor = jQuery(this).find('a');
    
    jQuery('#top-navigation li').removeClass('active');
    jQuery(this).addClass('active');
  
    jQuery('html, body').stop().animate({
      scrollTop: jQuery(anchor.attr('href')).offset().top-44
    }, 1500,'swing');
    
    /* If Mobile hide menu on select */
    if(jQuery('#menu-mobile').hasClass('active')) {
      jQuery('#top-navigation ul').slideUp(500);
      jQuery('#menu-mobile').removeClass('active');
    }
    
    event.preventDefault();
  });
  
  jQuery('.scroll').bind('click',function(event){
    var anchor = jQuery(this);
  
    jQuery('html, body').stop().animate({
      scrollTop: jQuery(anchor.attr('href')).offset().top-50
    }, 1500,'swing');
    
    /* If Mobile hide menu on select */
    if(jQuery('#menu-mobile').hasClass('active')) {
      jQuery('#top-navigation ul').slideUp(500);
      jQuery('#menu-mobile').removeClass('active');
    }
    
    event.preventDefault();
  });


  /*-----------------------------------------------------------------------------------*/
  /*      about us
  /*-----------------------------------------------------------------------------------*/
  
  /* Initialize Slider */ 
  var mySwiper = new Swiper('#swiper', {
    loop:true,
    autoPlay: 4000,
    paginationClickable: true,
    pagination: '.pagination'
  });

  jQuery('.arrow-left').on('click', function(e){
    e.preventDefault();
    mySwiper.swipePrev();
  });
  jQuery('.arrow-right').on('click', function(e){
    e.preventDefault();
    mySwiper.swipeNext();
  });
  
  /* On Load swiper height should adjust to img size */
  jQuery('.swiper-slide img').load(function() {
    jQuery('#swiper').height(jQuery('.swiper-slide img').height());
    jQuery('.swiper-wrapper').height(jQuery('.swiper-slide img').height());
  });
  
  /* On Resize swiper height should adjust to img size */
  jQuery(window).resize(function() {
    jQuery('#swiper').height(jQuery('.swiper-slide img').height());
    jQuery('.swiper-wrapper').height(jQuery('.swiper-slide').height());
    
    jQuery('#vid-wrapper').width(jQuery('.swiper-slide img').width());
    jQuery('#vid-wrapper').height(jQuery('.swiper-slide img').height());
      
    jQuery('#vid').width(jQuery('.swiper-slide img').width());
    jQuery('#vid').height(jQuery('.swiper-slide img').height());
  });
  
  /* On Load swiper-vid height should adjust to img size */
  jQuery('#vid').load(function() {
    jQuery('#vid-wrapper').width(jQuery('.swiper-slide img').width());
    jQuery('#vid-wrapper').height(jQuery('.swiper-slide img').height());
      
    jQuery('#vid').width(jQuery('.swiper-slide img').width());
    jQuery('#vid').height(jQuery('.swiper-slide img').height());
  });
        
});
