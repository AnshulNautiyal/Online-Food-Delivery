

$(document).ready(function(){

    // Sticky navigation
    $('.js--section-features').waypoint(function(direction){

        if(direction == 'down'){

            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '70px' // It mean above if-else condition happen at 60px before we hit  nav section (js--section-features)
    });

    // Scroll on buttons

    $('.js--scroll-to-plans').click(function() {

        // To  animate scroll we will use html and body selector 
        $('html, body').animate({
            scrollTop : $('.js--section-plans').offset().top
        },1000); // 1000 is speed of scroll bar in millisecond

    });

    $('.js--scroll-to-start').click(function () {

        // To  animate scroll we will use html and body selector 
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000); // 1000 is speed of scroll bar in millisecond

    });

    // On click of food logo, move to top of website
    $('.logo-black').click(function () {

        // To  animate scroll we will use html and body selector 
        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 1000); // 1000 is speed of scroll bar in millisecond

    });

    // Scroll when we click in menu bar

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    
});