$(document).ready(function() {
    $('.hero,.fullscreen-menu').height($( window ).height());
     $('.fullscreen-menu__close').click(function(){
        $('.fullscreen-menu').fadeOut(300);
    });
    $('.hamburger').click(function(){
        $('.fullscreen-menu').fadeIn(300);
    });
    /*---- Слайдер преимуществ----*/
    var owl = $('.slider.owl-carousel');
    owl.owlCarousel({
        loop: true,
        nav: true,
        center: false,
        dots: true,
        items : 4,
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
            items:3,
            dots: true,
            nav: false
        },
        1000:{
            items: 3,
            dots:true,
            nav: false
        },
        1200:{
            items: 4,
            dots:true,
            nav: true
        }
    }
    });
    /*---- Слайдер отзывов----*/
    var owl2 = $('.reviews-slider.owl-carousel');
    owl2.owlCarousel({
        loop: true,
        nav: true,
        center: false,
        dots: true,
        items : 1,
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
        1000:{
            items: 1,
            dots:true,
            nav: false
        }
    }
    });
    
    $('.consult-form__input').on('input',function(){
        var label = $(this).closest('.consult-form__inputWrapper').find('.consult-form__label');
        if($(this).val()) {
            label.hide();
        }
        else {
            label.show();
        }
    });
    $('.dropdown__title').on('click', function() {
        var title = $(this);
        var item = title.closest('.dropdown__item');
        if(!item.hasClass('dropdown__item_active')) {
            item.addClass('dropdown__item_active')
            .siblings().removeClass('dropdown__item_active');
        }
        else {
            item.removeClass('dropdown__item_active');
        }
    });
    $('.city-info__item').on('click', function() {
        var cityItem = $(this);
        var idItem = cityItem.data('id');
        if(!cityItem.hasClass('city-info__item_active')) {
            cityItem.addClass('city-info__item_active').siblings()
            .removeClass('city-info__item_active');
        }
        $('.city-info__block').each(function() {
            var cityBlock = $(this);
            var idBlock = cityBlock.data('id');
            if (idItem === idBlock) {
                cityBlock.addClass('city-info__block_active').siblings()
            .removeClass('city-info__block_active');
            }
        });
    });
   $('.baner__button').click(function(e){
       e.preventDefault();
       var link = document.createElement('a');
        link.setAttribute('href',$(this).attr('href'));
        link.setAttribute('download','download');
        onload=link.click();
});
    $("a[href^=#]").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
        $('.fullscreen-menu').fadeOut(300);
    });

});
