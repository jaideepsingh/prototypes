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
		var el = $('#sidebar_details_panel');
		if(el.is(':visible')) {
			enableTouchScroll();
			el.slideUp(200);
		} else {
			disableTouchScroll();
			el.slideDown(200);
		}
	});
});
var disableTouchScroll = function() {
	$('html, body').on('touchstart touchmove', function(e){
		if(!(e.target.id === 'sidebar_collapse' || $.contains(document.getElementById('sidebar_collapse'), e.target))) {
			//prevent native touch activity like scrolling
			e.preventDefault();
		}
	});
};
var enableTouchScroll = function() {
	$('html, body').off('touchstart touchmove');
};