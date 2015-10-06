$(function() {
	var elFirst = $('#section_one'),
		elSecond = $('#section_two')
		elThird = $('#section_three')
		elFourth = $('#section_four')
		elFifth = $('#section_five');

	var sectionPositions = {
		one: elFirst.offset().top,
		two: elSecond.offset().top,
		three: elThird.offset().top,
		four: elFourth.offset().top,
		five: elFifth.offset().top
	};
	var myScroll;
	$(window).scroll(function() {
		var windowPosition = $(window).scrollTop() + 70;
		if(windowPosition >= sectionPositions.one && windowPosition <= (elFirst.outerHeight()+sectionPositions.one)+30) {
			$('ul.top-navigation-bar li').removeClass();
			$('#section_one_link').addClass('active').prevAll().addClass('complete');
		} else if(windowPosition >= sectionPositions.two && windowPosition <= (elSecond.outerHeight()+sectionPositions.two)+30) {
			$('ul.top-navigation-bar li').removeClass();
			$('#section_two_link').addClass('active').prevAll().addClass('complete');
		} else if(windowPosition >= sectionPositions.three && windowPosition <= (elThird.outerHeight()+sectionPositions.three)+30) {
			$('ul.top-navigation-bar li').removeClass();
			$('#section_three_link').addClass('active').prevAll().addClass('complete');
		} else if(windowPosition >= sectionPositions.four && windowPosition <= (elFourth.outerHeight()+sectionPositions.four)+30) {
			$('ul.top-navigation-bar li').removeClass();
			$('#section_four_link').addClass('active').prevAll().addClass('complete');
		} else if(windowPosition >= sectionPositions.five && windowPosition <= (elFifth.outerHeight()+sectionPositions.five)+30) {
			$('ul.top-navigation-bar li').removeClass();
			$('#section_five_link').addClass('active').prevAll().addClass('complete');
		}
	});
	$('#sidebar_collapse').click(function(){
		var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		var topbarHeight = $('#top-navigation-bar').height();
		var sidebarHeight = viewportHeight - topbarHeight;
		var el = $('#sidebar_details_panel');
		if(el.is(':visible')) {
			el.slideUp(250, function() {
				$('#sidebar_collapse').removeClass('expanded');
				myScroll.destroy();
				myScroll = null;
			});
		} else {
			el.height(sidebarHeight);
			$('#sidebar_collapse').addClass('expanded');
			el.slideDown(250, function() {
				myScroll = new IScroll('#sidebar_details_panel');
			});
		}
	});
	$('.top-navigation-bar li:not(.active)').on('click', function() {
		var el;
		if(this.id === 'section_one_link') {
			el = elFirst;
		}
		if(this.id === 'section_two_link') {
			el = elSecond;
		}
		if(this.id === 'section_three_link') {
			el = elThird;
		}
		if(this.id === 'section_four_link') {
			el = elFourth;
		}
		if(this.id === 'section_five_link') {
			el = elFifth;
		}
		animateTo(el);
	});
	$('.page-section .section-footer button').click(function() {
		animateTo($(this).parents('.page-section').next('.page-section'));
	});
	
});
var animateTo = function(el) {
	$('html, body').animate({
	    scrollTop: el.offset().top - 69
	 }, 500);
};