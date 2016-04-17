$(function () {
    var $tabs = $('.tabs-list').children();
    var $tabsInfo = $('.tabs-info').children();
    $tabs.on('click', function (e) {
        e.preventDefault();
        $tabs.removeClass('tab-selected');
        $(this).addClass('tab-selected');
        $tabsInfo.removeClass('tab-info-selected');
        $tabsInfo.eq($(this).index()).addClass('tab-info-selected');
    });
});