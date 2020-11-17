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

// init Swiper:
const swiper = new Swiper();

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
            // loop: true,
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
        // mySwiper2.removeSlide(0);

    var mySwiper3 = new Swiper('.koto-two .swiper-container', {
            direction: 'vertical',
            // loop: true,
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
        // mySwiper3.removeSlide(0);


    var mySwiper4 = new Swiper('.news-gallary .swiper-container', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
        updateOnWindowResize: true,
        autoplay: false,
        allowTouchMove: false,

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
                allowTouchMove: true,
                autoplay: {
                    delay: 4000,
                }
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 30,
                allowTouchMove: true,
                autoplay: {
                    delay: 4000,
                }
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                allowTouchMove: true,
                autoplay: {
                    delay: 4000,
                }
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        pagination: {
            el: '.news-gallary .swiper-pagination',
            clickable: true,
        },

    });

    if (window.innerWidth <= 991) {
        setInterval(() => {
            mySwiper4.slideNext();
        }, 4000);
    }


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
        }
    });
    $(".first .footer-heading .footer-link").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("show")) {
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".first .footer-heading .footer-link").addClass("rotate-reverse")
        }
    });

    if ($(window).width() <= 991) {
        $(".products-box").click(function() {
            $(".products-box .mo-nav-link").toggleClass("rotate");
            $(".products-box .products-list").css("transition", "none");
            $(".products-box .products-list").slideToggle(300);
        });
    }

    //This is to Open Side Menu in Small Screens
    $(".menu").click(function() {
        $("body").addClass("overflow")
        $(".menu .menu-icon").removeClass("open-menu")
        $(".menu .menu-icon").addClass("close-menu")
        $(".mo-nav").addClass("menu-open");
        $(".overlay-box").fadeIn(500);
    });

    $(".close,.overlay-box").click(function() {
        $("body").removeClass("overflow")
        $(".menu .menu-icon").addClass("open-menu")
        $(".menu .menu-icon").removeClass("close-menu")
        $(".mo-nav").removeClass("menu-open");
        $(".overlay-box").fadeOut(500);
    });
});