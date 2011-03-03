$(function(){
	$('h1').addClass('dontend');
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

  $.localScroll.defaults.axis = 'x';
  $.localScroll({offset: -233, easing: "easeOutBack", duration: 1000 });

  $('a.viewToggle').bind('click', function() {
	$('ul.communityList').animate({ 'left' : '0' }, 1000);});
	
  $('a.articleClose').click(function() {
	$('ul.communityList').delay(250).animate({ 'left' : '-54px' }, 750);
  });

  $('a.viewExpand').bind('click', function(){
   	$("div#expandable").fadeIn(2000);
  ;});

  $('a.viewExpand2').bind('click', function(){
   	$("div#expandable2").fadeIn(2000);
  ;});


  $('a.closer').click(function() {
	$('div#expandable').fadeOut(1000);
  });

  $('a.splash_help').click(function(){
    $('div#content_opening').fadeIn(1000);
    $('#wrapper').delay(1000).animate({'left':'-540px'}, 1000);	
	$("#box").animate({opacity: "0", left: "+=1200"}, 5000);
    window.location = '/';
			return false;	
  });



  });
