/*global jQuery:false */
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
    left: (jQuery(window).width() - jQuery('.text-container').outerWidth())/2,
    top: (jQuery(window).height() - jQuery('.text-container').outerHeight())/2
  });
}
textCenter();

jQuery(document).ready(function() {

  jQuery('h1').animate({opacity: '1', 'padding-top': '10px'}, 500,function() {
    jQuery('h2').animate({opacity: '1', 'padding-top': '5px'}, 500,function() {
      if(jQuery(window).width()<767){
        jQuery('#explore').animate({opacity: '1', 'margin-top': '2em'}, 1000);
      } else {
        jQuery('#explore').animate({opacity: '1', 'margin-top': '4em'}, 1000);
      }
    });
  });

  /*-----------------------------------------------------------------------------------*/
  /*      Navigation
  /*-----------------------------------------------------------------------------------*/
  
  var animate='down';
  
  jQuery(window).bind('scroll', function () {
  
    /* Animation for Top Navigation */
    var scrollTop = jQuery(window).scrollTop();
    
    if (scrollTop > jQuery('#aboutus').offset().top-60 && animate === 'down') {
      animate='up';
      jQuery('#top-bar').stop().animate({top:'0'}, 300);
    } else if(scrollTop < jQuery('#aboutus').offset().top-60 && animate === 'up'){
      animate='down';
      jQuery('#top-bar').stop().animate({top:'-75px'}, 300);
    }
    
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
    if ( jQuery('#top-navigation uld').is(':visible') ) {
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
      scrollTop: jQuery(anchor.attr('href')).offset().top-50
    }, 1500,'easeInOutExpo');
    
    /* If Mobile hide menu on select */
    if(jQuery(window).width()<=767){    
      jQuery('#top-navigation ul').slideUp(500);
      jQuery('#menu-mobile').removeClass('active');
    }
    
    event.preventDefault();
  });
  
  jQuery('.scroll').bind('click',function(event){
    var anchor = jQuery(this);
  
    jQuery('html, body').stop().animate({
      scrollTop: jQuery(anchor.attr('href')).offset().top-50
    }, 1500,'easeInOutExpo');
    
    /* If Mobile hide menu on select */
    if(jQuery(window).width()<=767){    
      jQuery('#top-navigation ul').slideUp(500);
      jQuery('#menu-mobile').removeClass('active');
    }
    
    event.preventDefault();
  });
  

  /*-----------------------------------------------------------------------------------*/
  /* Detect iPhone, iPod, iPad and remove or ativate parallax
  /*-----------------------------------------------------------------------------------*/

  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  
  function parallaxInit() {
    var detectMobile = isMobile.any();
    if (detectMobile === null) {
      jQuery('.bg1').parallax('50%', 0.5);
    }
  }

  parallaxInit();

  /*-----------------------------------------------------------------------------------*/
  /*      about us
  /*-----------------------------------------------------------------------------------*/
  
  /* Initialize Slider */ 
  jQuery('#swiper').swiper({
    loop:true,
    grabCursor: true,
    autoPlay: 4000
  });
  
  /* On Load swiper height should adjust to img size */
  jQuery('.swiper-slide img').load(function() {
    jQuery('#swiper').height(jQuery('.swiper-slide img').height());
    jQuery('.swiper-wrapper').height(jQuery('.swiper-slide img').height());
  });
  
  /* On Resize swiper height should adjust to img size */
  jQuery(window).resize(function() {
    jQuery('#swiper').height(jQuery('.swiper-slide img').height());
    jQuery('.swiper-wrapper').height(jQuery('.swiper-slide img').height());
  });
        
});
