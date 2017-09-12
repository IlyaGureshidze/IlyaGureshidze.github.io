$(document).ready(function() {
    $('.shares__list.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        center: false,
        dots: true,
        items : 1
    });
    $('.reviews__list.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        center: false,
        dots: true,
        items : 1,
        autoHeight:true
    });
     $('.fullscreen-menu').height($( window ).height());
     $('.fullscreen-menu__close').click(function(){
        $('.fullscreen-menu').fadeOut(300);
    });
    $('.hamburger').click(function(){
        $('.fullscreen-menu').fadeIn(300);
    });
    $('.portfolio__list.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        center: false,
        dots: true,
        items : 3,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav: false,
                dots: true
            },
            320:{
                items:1,
                nav: false,
                dots: true
            },
            600:{
                items:1,
                dots: true,
                nav: false
            },
            1000:{
                items: 2,
                dots:true,
                nav: false
            },
            1251:{
                items: 2,
                dots:true,
                nav: false
            },
            1920:{
                items: 3,
                dots:true,
                nav: true
            }
        }
    });
    $('.remount__button').click(function(){
        var parent = $(this).closest('.remount__item');
        if(parent.hasClass('remount__item_active')){
            parent.removeClass('remount__item_active');
        }
        else{          parent.addClass('remount__item_active').siblings().removeClass('remount__item_active');
        }
    });
});