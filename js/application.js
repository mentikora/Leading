'use strict';

(function(){

	$('document').ready(function(){
		//alert('hello world');

		$('.show_info').on('click', function(){

			if ( $(this).hasClass('active') ) {
				$(this).removeClass('active');
				$('.team_img').attr('src', 'img/all.jpg');
				$(this).siblings('.show_info').show();
			} else {
				$(this).addClass('active');
				$(this).siblings('.show_info').removeClass('active').hide();
				$('.team_img').attr('src', 'img/all_' + $(this).data('person') + '.jpg');	
			}

			// $(this).siblings('.show_info').removeClass('active');
			// $(this).toggleClass('active');
			// $('.team_img').attr('src', 'img/all_' + $(this).data('person') + '.jpg');
		});

	});

	$(window).resize(function(){
		setSkullProperties()		  
	});



	function setSkullProperties(){
		$('.skull').height( $('.skull .team_img').height() );
		$('.skull').css('top', ($(window).height() - $('.skull').height() ) / 2 + 'px' );
	}

})();