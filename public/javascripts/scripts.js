$(function() {		
	$('a.viewToggle').bind('click', function() {
		$('ul.communityList').animate({ 'left' : '0' }, 1000);
	});
	
	$('a.filterToggle').bind('click', function() {
		$('.filterBox').animate({ 'left' : '0' }, 1000);
	});
	
	$('a.articleClose').bind('click', function() {
		$('#articleItems .filterBox').animate({ left: '-750px' }, 1000);
	});
	
	$('div.member, div.theBoss').mouseover(function() { $(this).find('a.overlay').fadeIn(250); });
	$('a.overlay').mouseleave(function() { $(this).fadeOut(500); });
	
	$('div.membersBox div.member:nth-child(2)').css('margin-right', '180px');
	$('div.membersBox div.member:nth-child(3), div.membersBox div.member:nth-child(6)').css('margin-left', '180px');
	
	$('div.articleBox a.articleSmall:nth-child(3)').css({ 'margin' : ' 0 180px', 'background' : '#f7f6f2' });
	$('div.articleBox a.articleSmall:nth-child(4)').css({ 'background' : '#fff' });
	$('div.articleBox a.articleSmall:nth-child(6)').css({ 'background' : '#f7f6f2' });
	$('div.articleBox a.articleLarge:nth-child(n+2)').css('margin', ' 0 0 0 180px');
	
	$('#overlayRight, #overlayLeft').hover(function() {
		$(this).find('a').stop().animate({ 'top' : '350px', 'opacity' : '1' }, 500);
	}, function() {
		$(this).find('a').stop().animate({ 'top' : '-50px', 'opacity' : '0' }, 500);
	});

	$('#overlayLeft a').bind('click', function() {
		var offsetValue = $("#promos").offset().left;
		$('html, body').stop().animate({
			scrollLeft: -offsetValue
		}, 1000);
	});
	
	$('#overlayRight a').bind('click', function() {
		var offsetValue = $("#promos").offset().left;
		$('html, body').stop().animate({
			scrollLeft: offsetValue
		}, 1000);
	});
	




	});

	$('ul.footerLinks li:last').css('border-right', '0');
	
	// $('.mainNav').find('li.active').parent('ul').show();
	// 
	// $('.mainNav ul li.parent > a').bind('click', function() {
	// 		if($(this).hasClass('active')) {
	// 			return false;
	// 		}
	// 		else {
	// 			$('.mainNav').find('.active').removeClass('active');
	// 			$('.mainNav').find('.parent').children('ul').slideUp();
	// 			$(this).toggleClass('active').siblings('ul').slideToggle();
	// 			$(this).parent('li').toggleClass('active');
	// 			return false;
	// 		}
			
	});
	
	var items = $("div.member").fadeTo('0', '0');
    shuffle(items);
    nextItemFade(items);
    function nextItemFade(items) {
    	items.eq(0).fadeTo('50', '1', function() {
        	nextItemFade(items.slice(1));
        });
    }
    function shuffle(a) {
    	for(var j, x, i = a.length; i; j = (Math.random() * i) | 0, x = a[--i], a[i] = a[j], a[j] = x);
        return a;
    }
        
    $('h2.faqTrigger').hover(function() { 
     	$(this).addClass('hover');
     }, function() { 
       	$(this).removeClass('hover'); 
    });
    
    $('a.expandAll').click(function() {
    	$('.faqTrigger').addClass('active').next(':hidden').slideDown();
    });
    
	$('.faqContainer').hide();
	$('.faqTrigger:first').addClass('active').next().show();
	$('.faqTrigger').click(function(){
		if( $(this).next().is(':hidden') ) {
			$('.faqTrigger').removeClass('active').next().slideUp();
			$(this).toggleClass('active').next().slideDown();
		}
		return false;
	});
	
	$('.faqTrigger').each(function(index) {
		$(this).find('a').prepend('<span>' + parseInt(index + 1) + '.</span>');
	});
	
	if($('body').hasClass('blogListing')) { blogListing(); }
	if($('body').hasClass('eventListing')) { blogListing(); }
	
	$('a.filter').click(function() {
    	var boxHeight = $('.filterBox').height() + 94;
    	$('.blogListItems, .eventListItems').animate({ marginTop : boxHeight + 183 }, 750);
    	$('.filterBox').delay(500).fadeIn(1000);
    }); 
    $('a.closeIt').click(function() {
    	$('.blogListItems, .eventListItems').delay(250).animate({ marginTop : '183px' }, 750);
    	$('.filterBox').fadeOut(750);
    });
    
    $('.whatWeDo .consulting .contentEntry section').hover(function() {
    	$(this).css('background', '#efede8 url("/images/faq/triggerButtonPlus.jpg") no-repeat 465px 23px');
    }, function() {
    	$(this).css('background', 'none');
    });
    
    $('.whatWeDo .consulting .contentEntry section').click(function() {
    	if($(this).hasClass('active')) {
	    	$('.whatWeDo .contentEntry section.active').removeClass('active');
	    	$('.whatWeDo .contentEntry section').find('div:visible').slideUp(500);
	    }
	    else {
	    	$('.whatWeDo .contentEntry section').find('div:visible').slideUp(500);
	    	$('.whatWeDo .contentEntry section.active').removeClass('active');
	    	$(this).addClass('active');
	    	$(this).find('div').delay(500).slideDown();
	    }
    });
     
});

function blogListing() {
	var blogItems = $('a.blogItem, a.eventItem').length;
	var blogWidth = parseInt(blogItems * 359);
	$('div.blogListItems, div.eventListItems').width(blogWidth);
}

function formatInput(className, value) {
    $(className).focus(function () { if ($(this).val() == value) { $(this).val(""); } }).blur(function () { if ($(this).val() == "") { $(this).val(value); } });
}
