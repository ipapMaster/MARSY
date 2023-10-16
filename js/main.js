$(document).ready(function () {
    /* Плавная прокрутка в Desktop */
    $('nav a[href^="#"]').click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({ 
            scrollTop: $(target).offset().top
        }, 500);
        $('nav a[href^="#"]').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('.menu_mobile .menu').toggle(500);
        $('.menu__burger').toggleClass('close');
        return false;
    });
    /* Мобильное меню */
    $('.menu__burger').click(function() {
        $('.menu_mobile .menu').toggle(500);
        $(this).toggleClass('close');
    });
});