$(document).ready(function() {
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 600) {
            $(".navbar-nav").addClass("navbar-toggle");
            $(".navbar-header").addClass("navScroll navbar-fixed-top");
        }
        else {
            $(".navbar-nav").removeClass("navbar-toggle");
            $(".navbar-header").removeClass("navScroll navbar-fixed-top");
        }
    });
     $(".navbar-nav li a").click(function(event) {
                $(".navbar-collapse").collapse('toggle');
        });
});
