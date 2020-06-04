$(document).ready(function () {

    /* Rmenu */

    var vrRMenu = $('.vr-rmenu'),
        vrRMenuWr = $('.vr-rmenu-wr'),
        vrRMenuToggle = $('.vr-rmenu-toggle');

    vrRMenuToggle.on('click', function (e) {
        e.preventDefault();
        if (vrRMenuWr.hasClass('vr-hide')) {
            vrRMenuWr.addClass('vr-show').removeClass('vr-hide');
            $('html, body').css({
                'overflow': 'hidden'
            });
        }
    });

    $('.vr-rmenu-close').on('click', vrRmenuClose);

    function vrRmenuClose() {
        vrRMenuWr.addClass('vr-hide').removeClass('vr-show');
        $('html, body').css({
            'overflow': ''
        });
    }



    $('.catalog-title').click(function () {
        $(this).parent().toggleClass('active');
        $(this).parent().find('.catalog-links').slideToggle()

    })


    $('.products-slider').owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        responsive: {
            0: {
                items: 1,

                margin: 20,
            },
            600: {
                items: 2,
                margin: 20,
            },
            1000: {
                items: 2
            },
            1300: {
                items: 3
            }
        }


    })

    $('.bestsellers-slider').owlCarousel({
        loop: false,
        nav: true,
        navText: ["", ""],
         responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2
            },
            1300: {
                items: 3,
                margin: 160
            }
        }

    })


    $('.promo-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: ["", ""]
    })
    
    $('.product-page-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: ["", ""]
    })

    
    
    /* Rmenu */

    $('body').append('<div id="bw-rmenu" class="bw-hide"></div>');
    $('#bw-rmenu').append('<div class="top-menu-img"><img src="img/up-menu.png" alt=""></div>');
    $('header .menu-nav').clone().appendTo('#bw-rmenu');
    $('#bw-rmenu').find('.menu-nav').removeClass('menu-nav');

    var bwRMenu = $('#bw-rmenu'),
        bwRMenuToggle = $('.bw-rmenu-toggle');

    bwRMenuToggle.on('click', function () {
        if (bwRMenu.hasClass('bw-hide')) {
            bwRMenu.addClass('bw-show').removeClass('bw-hide');
            $('html, body').css({
                'overflow': 'hidden'
            });
            setTimeout(function () {
                $('body').one('click', function () {
                    bwRMenuClose();
                });
            }, 50);
        }
    });

    $('.bw-rmenu-close').on('click', bwRMenuClose);

    function bwRMenuClose() {
        bwRMenu.addClass('bw-hide').removeClass('bw-show');
        $('html, body').css({
            'overflow': ''
        });
    }

    $(window).on('resize', function (e) {
        if ($(window).width() > 767 && bwRMenu.hasClass('bw-show')) {
            bwRMenuClose();
        }
    });
    
    
    $(".bw-select").selectmenu();
    
    var spinner = $(".spinner").spinner({
        icons: {
            down: "custom-down-icon",
            up: "custom-up-icon"
        }
    });
    
    
    $.fn.initMap = function () {
        // The location of Uluru
        var uluru = {
            lat: 3.080177,
            lng: 101.56606899999997
        };

        if ($('#map').length > 0) {
            // The map, centered at Uluru
            var map = new google.maps.Map(
                document.getElementById('map'), {
                    zoom: 17,
                    center: uluru
                });
            var marker1 = new google.maps.Marker({
                position: {
                    lat: 3.080177,
            lng: 101.56606899999997
                },

            });


            marker1.setMap(map);

    
        }
    }

});
