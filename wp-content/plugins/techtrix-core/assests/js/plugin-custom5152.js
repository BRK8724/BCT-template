(function(jQuery) {
    "use strict";
    jQuery(document).ready(function() {
        jQuery('.pt-image-icon').on('mouseover', function() {
            var value = jQuery(this).attr('data-src');
            jQuery('#cord-cover').attr('src', value);
        });
        var a = jQuery('.pt-image i').first().attr('data-src');
        jQuery('#cord-cover').attr('src', a);
    });
    jQuery(window).on('load', function(e) {


        jQuery('.timeline').each(function() {
            var app_slider = jQuery(this);
            console.log(jQuery(this).data('forceverticalwidth'));
            console.log(app_slider.data('forceverticalwidth'));

            app_slider.timeline({
                visibleItems: app_slider.data("desk_num"),
                mode: 'horizontal',
                forceVerticalMode: app_slider.data('forceverticalwidth'),
                visibleItems: app_slider.data('visibleitems'),
            });
        });


        /*----------------
                   //award 
                   ---------------------*/

         jQuery(document).ready(function() {
            jQuery('.pt-award-tabs.pt-style-2 .award-tabs-item:first-child').addClass("active");
            jQuery('.pt-award-tabs.pt-style-2 .award-tabs-item').on({
              mouseenter: function() {
                jQuery('.pt-award-tabs.pt-style-2 .award-tabs-item').removeClass('active');
                jQuery(this).addClass('active');
            },

        });

          });
        /*----------------
                   //circle circle
                   ---------------------*/


        (function(e) {
            e.fn.circle = function(t) {
                var n = e.extend({
                    speed: "5000"
                }, t);
                return this.each(function() {
                    function t() {
                        var e = i.find("li.block.active").index();
                        c.removeClass("active"), c.eq(e).addClass("active")
                    }

                    function o() {
                        var n;
                        i.addClass("disable-hover"), i.stop(!0, !0).animate({
                            rotatedeg: p.deg += p.step
                        }, {
                            duration: 400,
                            step: function(t) {
                                t >= 360 ? t -= 360 : t <= -360 && (t += 360), e(this).css("transform", "rotate(" + t + "deg)"), e(this).css("-webkit-transform", "rotate(" + t + "deg)")
                            },
                            complete: function() {
                                p.active = i.find("li.active").removeClass("active"), "right" == p.direction && p.step == d && (p.active.prev() && p.active.prev().length ? (n = p.active.prev().index(), p.active.prev().addClass("active")) : (p.active.siblings(":last-child").addClass("active"), n = 9)), "left" == p.direction && p.step == u && (p.active.next() && p.active.next().length ? (n = p.active.next().index(), p.active.next().addClass("active")) : (p.active.siblings(":first-child").addClass("active"), n = 0)), i.is(":animated"), i.removeClass("disable-hover"), t()
                            }
                        }, "ease")
                    }

                    function r() {
                        i.addClass("disable-hover"),
                        i.stop(!0, !0).animate({
                            rotatedeg: p.deg += p.step
                        }, {
                            duration: 400,
                            step: function(t) {
                                t >= 360 ? t -= 360 : t <= -360 && (t += 360),
                                e(this).css("transform", "rotate(" + t + "deg)"),
                                e(this).css("-webkit-transform", "rotate(" + t + "deg)")
                            },
                            complete: function() {
                                p.active = i.find("li.active"),
                                i.is(":animated"),
                                i.removeClass("disable-hover")
                            }
                        }, "ease")
                    }
                    var i = e(this),
                    s = i.find("li").length,
                    a = i.find(" > li .icon"),
                    l = "count" + s,
                    u = 0,
                    c = i.next().find(".animate"),
                    p = {
                        duration: n.speed,
                        deg: 0,
                        step: u,
                        active: i.find("li.active"),
                        direction: "left"
                    };
                    switch (s) {
                    case 10:
                        u = -36;
                        break;
                    case 9:
                        u = -40;
                        break;
                    case 8:
                        u = -45;
                        break;
                    case 7:
                        u = -51.5;
                        break;
                    case 6:
                        u = -60;
                        break;
                    case 5:
                        u = -72;
                        break;
                    case 4:
                        u = -90;
                        break;
                    case 3:
                        u = -120;
                        break;
                    case 2:
                        u = -180;
                        break;
                    case 1:
                        u = -360
                    }
                    i.addClass(l);
                    var d = u - 2 * u;
                    i.find("> li").first().addClass("active"),
                    i.find("> li").first().find("a").attr("href"),
                    c.eq(0).addClass("active"),
                    e(a).on("click", function() {
                        var n = e(this).parent().index() - i.find("li.active").index();
                        i.children("li").removeClass("active"),
                        e(this).parent().addClass("active"),
                        p.step = -n * d, n * d >= 288 && (p.step = -n * d + 360),
                        n * d <= -288 && (p.step = -n * d - 360),
                        r(), p.step = u, p.direction = "left", t()
                    });
                    var f = i.parent().find("div.next"),
                    h = i.parent().find("div.prev");
                    f.on("click", function() {
                        i.is(":animated") || (p.direction = "left", p.step = u, o())
                    }), h.on("click", function() {
                        i.is(":animated") || (p.direction = "right", p.step = d, o())
                    })
                })
}
}(jQuery));
        /*----------------
                   //Background image
                   ---------------------*/
jQuery(function() {
    jQuery('div').each(function() {
        var url = jQuery(this).attr('data-image');
        if (url) {
            jQuery(this).css('background-image', 'url(' + url + ')');
        }
    });
    jQuery('section').each(function() {
        var url = jQuery(this).attr('data-image');
        if (url) {
            jQuery(this).css('background-image', 'url(' + url + ')');
        }
    });
            // Service Auto height circle
    function autoHeightCircle() {
        var circle = jQuery('.circle--rotate'),
        circleInner = jQuery('.animate-wrapper'),
        circleH = circle.width(),
        circleInnerH = circleInner.width();
        circle.height(circleH);
        circleInner.height(circleInnerH);
    }
    jQuery("#circle--rotate").circle();
    autoHeightCircle();
    jQuery(window).resize(function() {
        autoHeightCircle();
    });
});
        /*----------------
           Counter
           ---------------------*/
jQuery('.timer').countTo();
jQuery('p:empty').remove();
        /*----------------
           image grid
           ---------------------*/
        // external js: isotope.pkgd.js
jQuery(".grid").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    masonry: {
        columnWidth: ".grid-sizer"
    }
});
        /*----------------
            Tox Progress Bar
            ---------------------*/
jQuery('.pt-circle-progress-bar').each(function() {
    var number = jQuery(this).data('skill-level');
    var empty_color = jQuery(this).data('empty-color');
    var fill_color = jQuery(this).data('fill-color');
    var size = jQuery(this).data('size');
    var thickness = jQuery(this).data('thickness');
    jQuery(this).circleProgress({
        value: '0.' + number,
        size: size,
        emptyFill: empty_color,
        fill: {
            color: fill_color
        }
    }).on('circle-animation-progress', function(event, progress) {
        jQuery(this).find('.pt-progress-count').html(Math.round(number * progress) + '%');
    });
});
jQuery('.pt-progress-bar > span').each(function() {
    var progress_bar = jQuery(this);
    var width = jQuery(this).data('percent');
    progress_bar.css({
        'transition': 'width 2s'
    });
    jQuery('.progress-value').css({ 'transition': 'margin 2s' });
    setTimeout(function() {
        jQuery(this).show(function() {
            progress_bar.css('width', width + '%');
        });
    }, 500);
    setTimeout(function() {
        jQuery('.pt-progressbar-style-2 .progress-value').show(function() {
            jQuery('.pt-progressbar-style-2 .progress-value').css('margin-left', width + 'px');
        });
    }, 500);
    setTimeout(function() {
        jQuery('.pt-progressbar-style-3 .progress-tooltip').show(function() {
            jQuery('.pt-progressbar-style-3 .progress-tooltip').css('margin-left', width + 'px');
        });
    }, 500);
});
        /*------------------------
        Accordion
        --------------------------*/
jQuery('.pt-accordion-block .pt-accordion-box .pt-accordion-details').hide();
jQuery('.pt-accordion-block .pt-accordion-box:first').addClass('pt-active').children().slideDown('slow');
jQuery('.pt-accordion-block .pt-accordion-box').on("click", function() {
    if (jQuery(this).children('div.pt-accordion-details').is(':hidden')) {
        jQuery('.pt-accordion-block .pt-accordion-box').removeClass('pt-active').children('div.pt-accordion-details').slideUp('slow');
        jQuery(this).toggleClass('pt-active').children('div.pt-accordion-details').slideDown('slow');
    }
}); 
/*------------------------
        service dropdown
        --------------------------*/
jQuery('.pt-service-block .pt-service-box .pt-service-details').hide();
jQuery('.pt-service-block .pt-service-box:first').addClass('pt-active').children().slideDown('slow');
jQuery('.pt-service-block .pt-service-box').on("click", function() {
    if (jQuery(this).children('div.pt-service-details').is(':hidden')) {
        jQuery('.pt-service-block .pt-service-box').removeClass('pt-active').children('div.pt-service-details').slideUp('slow');
        jQuery(this).toggleClass('pt-active').children('div.pt-service-details').slideDown('slow');
    }
});


   jQuery(".pt-fancy-box.pt-fancybox-11").each(function() {

             jQuery(".pt-fancy-box.pt-fancybox-11").hover(function () {
              jQuery(".pt-fancy-box.pt-fancybox-11").removeClass("active");
              jQuery(this).addClass("active");
            });

              });


   jQuery(".pt-award-tabs.pt-style-2 .award-tabs-item ").each(function() {

             jQuery(".award-tabs-item ").hover(function () {
              jQuery(".award-tabs-item ").removeClass("active");
              jQuery(this).addClass("active");
            });

              });



        /*------------------------
        Owl Carousel
        --------------------------*/
jQuery('.owl-carousel').each(function() {
    var app_slider = jQuery(this);
    app_slider.owlCarousel({
        items: app_slider.data("desk_num"),
        loop: app_slider.data("loop"),
        margin: app_slider.data("margin"),
        nav: app_slider.data("nav"),
        dots: app_slider.data("dots"),
        autoplay: app_slider.data("autoplay"),
        autoplayTimeout: app_slider.data("autoplay-timeout"),
        navText: ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
        responsiveClass: true,
        responsive: {
                    // breakpoint from 0 up
            0: {
                items: app_slider.data("mob_sm"),
                nav: false,
                        // dots: true
            },
                    // breakpoint from 480 up
            480: {
                items: app_slider.data("mob_num"),
                nav: false,
                        // dots: true
            },
                    // breakpoint from 786 up
            767: {
                items: app_slider.data("tab_num")
            },
                    // breakpoint from 1023 up
            1023: {
                items: app_slider.data("lap_num")
            },
            1199: {
                items: app_slider.data("desk_num")
            }
        }
    });
});


jQuery('.slick-slider-main').each(function() {
    // console.log('in');
    var $slider = jQuery('.slick-slider-main')
    .slick({
      slidesToShow: 1,
      infinite: false,
      arrows: true,
      autoplay: false,
      dots: false,
      lazyLoad: 'ondemand',
      autoplaySpeed: 3000,
      loop: true,
      asNavFor: '.slick-slider-thumb'
  });

    var $slider2 = jQuery('.slick-slider-thumb')

    .slick({
      slidesToShow: 1,
      infinite: false,
      lazyLoad: 'ondemand',
      asNavFor: '.slick-slider-main',
      autoplay: false,
      dots: false,
      Default:'50px',
      arrows: false,
      centerMode: false,
      loop: true,
      focusOnSelect: true
  });
});



jQuery(".pt_background_list_wrapper").each(function() {
    var parentDiv = jQuery(this);
    parentDiv.children('.pt_background_list_column').hover(function() {
        parentDiv.find('.pt_background_list_column').removeClass('hover');
        parentDiv.find('.pt_background_list_overlay').removeClass('hover');
        jQuery(this).next('.pt_background_list_overlay').addClass('hover');
        jQuery(this).addClass('hover');
    });
});
jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps, .button-play').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    preloader: true,
});
setTimeout(init, 1000);

function init() {
    jQuery('.content__image-wrap').each(function() {
        var watcher_id = jQuery(this).attr('id');
        var color = jQuery(this).data("color")
        var direction = jQuery(this).data("direction")
        var scrollElemToWatch_1 = document.getElementById(watcher_id);
        var watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -300);
        var rev3 = new RevealFx(scrollElemToWatch_1, {
            revealSettings: {
                bgcolor: color,
                direction: direction,
                onCover: function(contentEl, revealerEl) {
                    contentEl.style.opacity = 1;
                }
            }
        });
        watcher_1.enterViewport(function() {
            rev3.reveal();
            watcher_1.destroy();
        });
    });
}
var sliders = [];
jQuery('.swiper-container').each(function(index, element) {
    var ele = jQuery(this);
    ele.addClass('s' + index);
    var slider = new Swiper('.s' + index, {
        observer: true,
        observeParents: true,
        slidesPerView: ele.data('desk_num'),
        spaceBetween: ele.data('margin'),
        loop: ele.data('loop'),
        autoplay: ele.data('autoplay'),
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: ele.data('pagination_type'),
            renderFraction: function(currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                ' <span class="pt-page-seprate">/</span> ' +
                '<span class="' + totalClass + '"></span>';
            },
        },
        breakpoints: {
                    // when window width is >= 320px
            0: {
                slidesPerView: ele.data('mob_sm'),
            },
            480: {
                slidesPerView: ele.data('mob_num'),
            },
                    // when window width is >= 480px
            767: {
                slidesPerView: ele.data('tab_num'),
            },
                    // when window width is >= 640px
            1023: {
                slidesPerView: ele.data('lap_num'),
            },
            1199: {
                slidesPerView: ele.data('desk_num'),
            }
        }
    });
    sliders.push(slider);
});

jQuery(document).ready(function () {
  var mySwiper = new Swiper(".swiper", {
    autoHeight: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
  },
  speed: 500,
  direction: "horizontal",
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
  },
  pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
  },
  loop: false,
  effect: "slide",
  spaceBetween: 30,
  on: {
      init: function () {
        jQuery(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        jQuery(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
    },
    slideChangeTransitionStart: function () {
        jQuery(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        jQuery(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
    }
}
});
  jQuery(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
    mySwiper.slideTo(jQuery(this).index());
    jQuery(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
    jQuery(this).addClass("active");
});
});
});
})(jQuery);