$(document).ready(function () {
    // Scroll smooth
    $(document).on('click', 'a[href*="#"]', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1200);
    });
    //scrollTop
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });
    $(function () { $(".scroll").click(function () { $("html,body").animate({ scrollTop: $("body").offset().top }, "1200"); return false }) });
    $('.slider-banner').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        
    })  
    $('.slider-Our-Team').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    })  
    $('.slider-doitac').slick({
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,

    })  
    if ($(window).width() < 991) {
        $(".navbar").addClass("home-fixtop py-0").removeClass("py-4");

    } else {
        $(document).on("scroll", function () {
            if ($(document).scrollTop() > 100) {
                $(".navbar").addClass("home-fixtop bg-black py-0").removeClass("bg-black-opacity py-4");
            } else {
                $(".navbar").removeClass("home-fixtop bg-black py-0").addClass("bg-black-opacity py-4");
            }
        });
    }    
});