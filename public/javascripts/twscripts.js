
// autocolumn function
$(function(){
	$('#colwrapper h1').addClass('dontend');
	$('.wide').columnize({
		width : 300,
		height : 600
	});
});



function initMenu() {
  $('#menu ul').hide();
  $('#menu').find('li.active').parent('ul').show();	
  $('#menu li a').click(
    function() {
      var checkElement = $(this).next();
      if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
        return false;
        }
      if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
        $('#menu ul:visible').slideUp('normal');
        checkElement.slideDown('normal');
        return false;
        }
      }
    );
  }


  $(document).ready(function () {
	$("#box").animate({opacity: "0", left: "+=1200"}, 5000);

  initMenu();


	// the initial scroll
	//   $('html, body').animate({
	//     scrollLeft: 2000
	// }, 0);
	//   $('html, body').animate({
	// 	    scrollLeft: ($("#wrapper").offset().left)-233-180
	// 	}, 4000);
	// 
	



  $.localScroll.defaults.axis = 'x';
  $.localScroll({offset: (-233-180), easing: "easeOutBack", duration: 1000 });

  $('a.viewToggle').bind('click', function() {
	$('ul.communityList').animate({ 'left' : '0' }, 1000);});
	
  $('a.articleClose').click(function() {
	$('ul.communityList').delay(250).animate({ 'left' : '-54px' }, 750);
  });

  $('a.viewExpand').bind('click', function(){
   	$("div#expandable").animate( { width: "show", height: "show" }, 1500 );
  ;});

  $('a.viewExpand2').bind('click', function(){
   	$("div#expandable2").fadeIn(2000);
  ;});


  $('a.closer').click(function() {
	$('div#expandable').fadeOut(1000);
  });

	//   $('a.splash_help').click(function(){
	//     $('div#content_opening').fadeIn(1000);
	//     $('#wrapper').delay(1000).animate({'left':'-540px'}, 1000);	
	// $("#box").animate({opacity: "0", left: "+=1200"}, 5000);
	//     window.location = '/';
	// 		return false;	
	//   });

  $('#trigger_exp').bind('click', function(){
   	$("div#exp").slideToggle(1500);
  ;});


  $('.fuse').click(function(){
    var target_id = ("#" + $(this).attr("id")+"_target");
    $(target_id).animate({ width: "toggle" }, 750 );	
    $('html, body').animate({
	    scrollLeft: ($(target_id).offset().left)-233-180
	}, 1000);
	$("#what").slideDown('normal');
  });

  $('.menu_trigger').click(function(){
  	var target_id = ("#" + $(this).attr("id")+"_fuse_target");
    $(target_id).animate({ width: "show" }, 0 );	
    $('html, body').animate({
	    scrollLeft: ($(target_id).offset().left)-233-180
	}, 1000);
  });
  $('a.closeIt').click(function(){
    $((this).parent).animate({width: 'toggle'}, 500)	
  });
  
  $('div.openIt').click(function(){
    $(this).parent().next().animate({width: "toggle"}, 500);
	$('html, body').animate({
	    scrollLeft: ($(this).offset().left)-233+180
	}, 1000);
  });

  $('div.closeIt').click(function(){
	$(this).closest('div.home_sliding_box').animate({width: "hide"}, 500);
	$('html, body').animate({
	    scrollLeft: ($("div#firstDomain").offset().left)-233
	}, 1000);
  });

// this one to stop animation when manually scrolling
	$('body,html').bind('scroll mousedown DOMMouseScroll mousewheel keyup', function(e){
	 if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel"){
	  $("html,body").stop();
	 }
	});
	
	//   $('img[src*="header_"]').mouseover(function(){
	// var prefix = ($(this).attr("src").split('.png', 1));
	// var new_src = '<img src = '+prefix[0] + '_hover.png>';
	//     $(this).replaceWith(new_src);	
	//   });
	//   $('div.openIt img').hover(function(){
	// var prefix = ($(this).attr("src").split('.png', 1));
	// var new_src = '<img src = '+prefix[0] + '_hover.png>';
	// $(this).replaceWith(new_src)};
	// function(){
	//     
	//   });


  });
