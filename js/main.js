/*======================================
                preloader
========================================*/
$(window).on('load', function () {
    $("#status").fadeout();
    $("#preloader").fadeout('slow');
});

/*======================================
                Team
========================================*/

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
/* ============================
        progress bar
===============================*/
$(function () {

    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});
/* ============================
        Responsive Tabs
===============================*/
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide',
    });

});

/* ============================
        Testmonial
===============================*/

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});