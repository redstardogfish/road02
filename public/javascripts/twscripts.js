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
$(document).ready(function() {initMenu();});