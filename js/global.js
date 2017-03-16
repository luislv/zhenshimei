$(function() {
    /**
     *  导航下拉列表
     */
    $('.J_shop').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.J_shopDropdown').slideToggle('fast');
    });
    $(document).on('click', function() {
        $('.J_shopDropdown').slideUp('fast');
    });
});