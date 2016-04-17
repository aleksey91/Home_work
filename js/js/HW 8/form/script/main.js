$(function () {
    var $inputs = $('input');
    var $tooltips = $('.tooltip');
    var $button = $('button');
    $inputs.hover(function () {
        $(this).siblings().addClass('tooltip-hovered');
    }, function () {
        $(this).siblings().removeClass('tooltip-hovered');
    });

    $button.on('click', function (e) {
        e.preventDefault();
        $tooltips.addClass('tooltip-hovered');
    });
});