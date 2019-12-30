$.noConflict();
jQuery(document).ready(function($){
	// var windowheight = $(window).height();
	// $(window).scroll(function() {
	// 	var sticky = $('.header_fixed_onscroll'),
	// 	scroll = $(window).scrollTop();
	// 	if (scroll >= windowheight) { 
	// 		sticky.addClass('fixed'); }
	// 	else { 
	// 		sticky.removeClass('fixed');
	// 	}
	// });

	// initialization of HSMegaMenu component
	$('.js-mega-menu-basic').HSMegaMenu({
		event: 'hover',
		pageContainer: $('.container'),
		breakpoint: 767,
		hideTimeOut: 0,
		beforeOpen: function(){
			console.log('bingo');
		} 
	});
	
});