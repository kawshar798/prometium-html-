(function ($) {
    "use strict";

    /*----------------------------
    Responsive menu Active
    ------------------------------ */
    $('#primary-menu').slicknav({
        prependTo:'.responsive-menu'
    });

    /*----------------------------
    START - Menubar scroll animation
    ------------------------------ */
    jQuery(window).on('scroll', function() {
        if ($(this).scrollTop() > 1) {
            $('.header_area').addClass("sticky");
        } else {
            $('.header_area').removeClass("sticky");
        }
    });



    /*Scroll to top when arrow up clicked BEGIN*/
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#bottom_to_top').fadeIn();
        } else {
            $('#bottom_to_top').fadeOut();
        }
    });
    $("#bottom_to_top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    /*--------------------- */
    /*-----------------------------------
  * OWL CAROUSEL
  *-----------------------------------*/


    var $testimonialsDiv = $('.testimonial_slider');
    if ($testimonialsDiv.length && $.fn.owlCarousel) {
        $testimonialsDiv.owlCarousel({
            nav: false,
            center: true,
            loop: true,
            autoplay: true,
            dots: true,
            //navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
    }

    var $howitswork_slider = $('.howitswork_slider');
    if ($howitswork_slider.length && $.fn.owlCarousel) {
        $howitswork_slider.owlCarousel({
            nav: false,
            center: true,
            loop: true,
            autoplay: true,
            dots: true,
            //navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600 :{
                    items: 1
                },
                768: {
                    items: 1
                }
            }
        });
    }





}(jQuery));