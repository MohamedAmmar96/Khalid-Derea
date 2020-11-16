$(window).on('load', function() {

    $(".loading-overlay .loading-overlay-box").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})



// // Scroll To Top Button 
// var scrollButton = $(".scroll-top");
// $(window).scroll(function() {
//     ($(this).scrollTop() >= 500) ? scrollButton.show(600): scrollButton.hide(600);
// });
// // Click Button to scroll top 
// scrollButton.click(function() {
//     $("html,body").animate({ scrollTop: 0 }, 600);
// });

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();



$(document).ready(function() {

    var mySwiper1 = new Swiper('.main-slider .swiper-container', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        updateOnWindowResize: true,
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        }
    })

    var mySwiper2 = new Swiper('.koto-one .swiper-container', {
        direction: 'vertical',
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        updateOnWindowResize: true,
        autoplay: {
            delay: 4000,
        },
        navigation: {
            nextEl: '.koto-one .swiper-button-next',
            prevEl: '.koto-one .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        }
    })

    var mySwiper3 = new Swiper('.koto-two .swiper-container', {
        direction: 'vertical',
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        updateOnWindowResize: true,
        autoplay: {
            delay: 4000,
        },
        navigation: {
            nextEl: '.koto-two .swiper-button-next',
            prevEl: '.koto-two .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        }
    })


    // Footer Section Start --------------------------------------------------------------------------------------------------------------------
    // To Toggle Between Footer Slide Menus
    // if ($(window).width() <= 991) {
    //     $('.collapse[data-parent="#parent"]').on('show.bs.collapse', function() {
    //         $('.collapse[data-parent="#parent"]').not(this).collapse('hide');
    //     });
    // } else {
    //     $(".slide-list").addClass("in")
    // }
    if ($(window).width() >= 992) {
        $(".slide-list").addClass("show")
    }
    //This is To Change between footer collapse link ----------------------------------------------------------------
    // First Collapse ---------------------------
    $(".first .footer-heading .footer-link").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("collapse")) {
            $(".first .footer-heading .footer-link").addClass("rotate")
            $(".first .footer-heading .footer-link").removeClass("rotate-reverse")
            $(".second .footer-heading .footer-link").removeClass("rotate")
            $(".second .footer-heading .footer-link").addClass("rotate-reverse")
            $(".last .footer-heading .footer-link").removeClass("rotate")
            $(".last .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });
    $(".first .footer-heading .footer-link").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("in")) {
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".first .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });

    // Second Collapse ---------------------------
    $(".second .footer-heading .footer-link").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("collapse")) {
            $(".second .footer-heading .footer-link").addClass("rotate")
            $(".second .footer-heading .footer-link").removeClass("rotate-reverse")
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".first .footer-heading .footer-link").addClass("rotate-reverse")
            $(".last .footer-heading .footer-link").removeClass("rotate")
            $(".last .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });
    $(".second .footer-heading .footer-link").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("in")) {
            $(".second .footer-heading .footer-link").removeClass("rotate")
            $(".second .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });

    // Last Collapse ---------------------------
    $(".last .footer-heading .footer-link").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("collapse")) {
            $(".last .footer-heading .footer-link").addClass("rotate")
            $(".last .footer-heading .footer-link").removeClass("rotate-reverse")
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".first .footer-heading .footer-link").addClass("rotate-reverse")
            $(".second .footer-heading .footer-link").removeClass("rotate")
            $(".second .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });
    $(".last .footer-heading .footer-link").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("in")) {
            $(".last .footer-heading .footer-link").removeClass("rotate")
            $(".last .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });


});