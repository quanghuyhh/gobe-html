$(document).ready((function(){$(".banner-slide").owlCarousel({items:1,nav:!1,dots:!0,loop:!0,autoplay:!0,autoplayHoverPause:!0,center:!0,dotsContainer:".slider-dots"}),$(".banner-slide").trigger("refresh.owl.carousel"),$(".highlights-slide").owlCarousel({items:1,nav:!1,dots:!1,loop:!0,center:!0,autoplayTimeout:1500}),$(".highlights-slide").trigger("refresh.owl.carousel"),$(".highlights-wrap").on("mouseover",(function(e){$(this).children(".highlights-slide").trigger("play.owl.autoplay")})),$(".highlights-wrap").on("mouseleave",(function(e){$(this).children(".highlights-slide").trigger("stop.owl.autoplay")})),$(window).on("scroll",(function(){window.pageYOffset>100?$(".header").addClass("sticky"):$(".header").removeClass("sticky"),window.matchMedia("(max-width: 414px)").matches&&$(".main-menu").css("display","none");var e=$(window).scrollTop();$(".scroll-destination").each((function(t){$(this).position().top-100<=e&&($("a.menu-tour-item.active").removeClass("active"),$("a.menu-tour-item").eq(t).addClass("active"))}))})),window.pageYOffset>100?$(".header").addClass("sticky"):$(".header").removeClass("sticky"),$("#mobile-menu").on("click",(function(){$(".main-menu").slideToggle()})),$("video").prop("muted",!0),$(".gallery-media").hover((function(){$(this).children("video").length&&$(this).children("video")[0].play()}),(function(){$(this).children("video").length&&$(this).children("video")[0].pause()})),$(".tool-slide").owlCarousel({items:5,nav:!0,dots:!1,loop:!0,autoplay:!0,autoplayHoverPause:!0,margin:8,responsive:{0:{items:1},414:{items:4}}}),$(".menu-tour-item").click((function(e){e.preventDefault(),$(".menu-tour-item").removeClass("active"),$(this).addClass("active");var t=$(this).attr("href");$("html, body").stop().animate({scrollTop:$(t).offset().top-100},1e3)})),$(".schedule-item-title").on("click",(function(){var e=$(this).parent();e.children(".schedule-item-title").toggleClass("show"),e.children(".schedule-item-detail").slideToggle(1e3)})),$(".btn-rule").change((function(){var e=$(this).attr("id");$(".rule-content > div").css("display","none"),$(".rule-content #"+e+"-content").slideToggle(1e3)})),$(".popular-slide").owlCarousel({items:1,nav:!1,dots:!0,loop:!0,center:!0,autoplayTimeout:1500}),$(".tour-rule-title").on("click",(function(){$(this).toggleClass("expand",1e3),$(this).parent().children(".tour-rule-content").slideToggle()})),$("#btn-contact").click((function(){$("#contact-form").modal({show:!0,closeOnEscape:!0})})),$(".faq-menu-title").on("click",(function(){var e=$(this).parent();window.matchMedia("(max-width: 414px)").matches?e.hasClass("active")?($(".faq-menu-item.active").children(".faq-content").stop().slideUp(100),e.removeClass("active")):($(".faq-menu-item.active").children(".faq-content").stop().slideUp(100),$(".faq-menu-item.active").removeClass("active"),e.addClass("active"),$(".faq-menu-item.active").children(".faq-content").stop().slideDown(1e3)):e.hasClass("active")||($(".faq-menu-item.active").children(".faq-content").stop().slideUp(100),$(".faq-menu-item.active").removeClass("active"),e.addClass("active"),$(".faq-menu-item.active").children(".faq-content").stop().slideDown(1e3))})),$("#mien-bac").change((function(){$("#mien-trung").val("default").selectpicker("refresh"),$("#mien-nam").val("default").selectpicker("refresh")})),$("#mien-trung").change((function(){$("#mien-bac").val("default").selectpicker("refresh"),$("#mien-nam").val("default").selectpicker("refresh")})),$("#mien-nam").change((function(){$("#mien-trung").val("default").selectpicker("refresh"),$("#mien-bac").val("default").selectpicker("refresh")}))}));
