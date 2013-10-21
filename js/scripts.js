jQuery(document).ready(function ($) {


    $(window).stellar();

    var links = $('.menu_nav').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.menu_nav li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.menu_nav li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.menu_nav li[data-slide="1"]').addClass('active');
            $('.menu_nav li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 1000, 'easeInOutQuint');
    }



    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });
	
	$(function() {
		var pull 		= $('#pull');
			menu 		= $('nav ul');
			menuHeight	= menu.height();

		$(pull).on('click', function(e) {
			e.preventDefault();
			menu.slideToggle();
		});

		$(window).resize(function(){
    		var w = $(window).width();
    		if(w > 320 && menu.is(':hidden')) {
    			menu.removeAttr('style');
    		}
		});
	});
	
	$(function() {
	      $('#slides').slidesjs({
	        
	        navigation: {
	          active: false
	        },
			play: {
				active: false
			},
	        pagination: {
	          effect: "fade"
	        },
	        effect: {
	          fade: {
	            speed: 400
	          }
	        }
	      });
	    });

});