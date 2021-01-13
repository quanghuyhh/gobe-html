$(document).ready(function () {
    $('.banner-slide').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        center: true,
        dotsContainer: '.slider-dots'
    });
    $('.banner-slide').trigger('refresh.owl.carousel');

    $('.highlights-slide').owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        loop: true,
        center: true,
        autoplayTimeout: 1500
    });
    $('.highlights-slide').trigger('refresh.owl.carousel');
    $('.highlights-wrap').on('mouseover', function (e) {
        $(this).children('.highlights-slide').trigger('play.owl.autoplay');
    })
    $('.highlights-wrap').on('mouseleave', function (e) {
        $(this).children('.highlights-slide').trigger('stop.owl.autoplay');
    })

    $(window).on('scroll', function () {
        var scrollPos = window.pageYOffset;
        if (scrollPos > 100) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
        if (window.matchMedia('(max-width: 414px)').matches) {
            $('.main-menu').css('display', 'none');
        }

        var scrollDistance = $(window).scrollTop();
        $('.scroll-destination').each(function (i) {
            if ($(this).position().top - 100 <= scrollDistance) {
                $('a.menu-tour-item.active').removeClass('active');
                $('a.menu-tour-item').eq(i).addClass('active');
            }
        });
    });

    if (window.pageYOffset > 100) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }

    $('#mobile-menu').on('click', function () {
        $('.main-menu').slideToggle();
    });

    $('video').prop('muted', true);
    $('.gallery-media').hover(function () {
        if ($(this).children('video').length) {
            $(this).children('video')[0].play();
        }
    }, function () {
        if ($(this).children('video').length) {
            $(this).children('video')[0].pause();
        }
    })

    $('.tool-slide').owlCarousel({
        items: 5,
        nav: true,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        margin: 8,
        responsive: {
            0: {
                items: 1
            },
            414: {
                items: 4
            }
        }
    });

    $('.menu-tour-item').click(function (e) {
        e.preventDefault();
        $('.menu-tour-item').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(id).offset().top - 100
        }, 1000);
    });

    $('.schedule-item-title').on('click', function () {
        var parent = $(this).parent();
        parent.children('.schedule-item-title').toggleClass('show');
        parent.children('.schedule-item-detail').slideToggle(1000);
    });

    $('.btn-rule').change(function () {
        var id = $(this).attr('id');
        $('.rule-content > div').css('display', 'none');
        $('.rule-content #' + id + '-content').slideToggle(1000);
    });

    $('.popular-slide').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        center: true,
        autoplayTimeout: 1500
    });

    $('.tour-rule-title').on('click', function () {
        $(this).toggleClass('expand', 1000);
        $(this).parent().children('.tour-rule-content').slideToggle();
    });

    $('#btn-contact').click(function () {
        $('#contact-form').modal({
            show: true,
            closeOnEscape: true
        });
    });

    $('.faq-menu-title').on('click', function () {
        var parent = $(this).parent();
        if (window.matchMedia('(max-width: 414px)').matches) {
            if (!parent.hasClass('active')) {
                $('.faq-menu-item.active').children('.faq-content').stop().slideUp(100);
                $('.faq-menu-item.active').removeClass('active');
                parent.addClass('active');
                $('.faq-menu-item.active').children('.faq-content').stop().slideDown(1000);
            } else {
                $('.faq-menu-item.active').children('.faq-content').stop().slideUp(100);
                parent.removeClass('active');
            }
        } else {
            if (!parent.hasClass('active')) {
                $('.faq-menu-item.active').children('.faq-content').stop().slideUp(100);
                $('.faq-menu-item.active').removeClass('active');
                parent.addClass('active');
                $('.faq-menu-item.active').children('.faq-content').stop().slideDown(1000);
            }
        }
    });

    $('#mien-bac').change(function() {
        $('#mien-trung').val('default').selectpicker("refresh");
        $('#mien-nam').val('default').selectpicker("refresh");
    });
    $('#mien-trung').change(function() {
        $('#mien-bac').val('default').selectpicker("refresh");
        $('#mien-nam').val('default').selectpicker("refresh");
    });
    $('#mien-nam').change(function() {
        $('#mien-trung').val('default').selectpicker("refresh");
        $('#mien-bac').val('default').selectpicker("refresh");
    });
});