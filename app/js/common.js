$('.main-home__slider').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true
});

$('.variable-products__slider').slick({
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.portfolio-slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true
});

$('.reviews-slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);

                $('.slider-quiz').slick({
                    slidesToShow: 1,
                    prevArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt="" class="icon">Назад</button>',
                    nextArrow: '<button type="button" class="slick-prev">Пропустить<img src="img/arrow-right.png" alt=""></button>',
                    appendArrows: '.slider-quiz-nav',
                    infinite: false,
                    adaptiveHeight: true
                });
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

$(".slider-quiz").on("afterChange", function (event) {
    if ($(this).find('.slick-slide').last().hasClass('slick-active')) {
        $('.slick-prev').hide();
    } else {
        $('.slick-prev').show();
    }
});
