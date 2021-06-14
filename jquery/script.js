import $ from 'jquery';

$(document).ready(() => {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', () => {
        $('.image:even').fadeToggle();
    });

    $('.list-item:eq(4)').on('click', () => {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 1000);
    });
});