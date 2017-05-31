/*====================================================
  TABLE OF CONTENT
  1. function
  2. Initialization
====================================================*/

/*===========================
 1. function
 ==========================*/
var Apps = {
	centeredImg : function(){
		$('.post-content img').each(function() {
			var img = $(this).wrap('<figure class="centered-img" />');
			img.parent().css('text-align', 'center');
		})
	},
	toggleMenu : function() {
		$('.menu-bar').on('click', function(e) {
			e.preventDefault();
			$('body').toggleClass('open');			
		})
		if($('body').length){
			$(window).scroll(function () {
                if ($(this).scrollTop() < 300) {
                    $('body').removeClass('open');
                }
            })
		}
	},
	scrolltotopButton : function() {
		$('.backtop-link').on('click', function(e) {
			e.preventDefault();
			$('body, html').animate({scrollTop: 0}, 600);
		});
	},	
	searchBox : function() {
		var $searchFullscreen = $('#search-fullscreen');
		var ghostHunter = $('.search-field').ghostHunter({
			results         : '.search-result',
			result_template: '<li><a href="{{link}}"><i class="fa fa-fw fa-arrow-right"></i> {{title}}</a></li>',
			onKeyUp         : true,
			rss: '/rss'
		});	
		$('.search-icon').on('click', function (e) {
            e.preventDefault();
            $searchFullscreen.addClass('visible'); 
        });	
		$('.close-search').on('click', function (e) {
            e.preventDefault();
            $searchFullscreen.removeClass('visible');
			ghostHunter.clear();
        });			
	},
	videoembedResponsive : function() {	
		$('.post-container').fitVids();
	},
	init: function(){
		Apps.centeredImg();
		Apps.toggleMenu();
		Apps.scrolltotopButton();
		Apps.searchBox();
		Apps.videoembedResponsive();		
	}
}

/*===========================
 2. Initialization
 ==========================*/
$(document).ready(function(){
	Apps.init();
});
