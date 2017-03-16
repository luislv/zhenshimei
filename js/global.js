$(function() {
    /**
     *  导航下拉列表
     */
    $('.J_shop').on('click', function(e) {
        var self = $(this);
        e.preventDefault();
        e.stopPropagation();
        if(self.hasClass('active')) {
            self.removeClass('active');
        } else {
            self.addClass('active');
        }
        $('.J_shopDropdown').slideToggle('fast');
    });
    $(document).on('click', function() {
        $('.J_shop').removeClass('active');
        $('.J_shopDropdown').slideUp('fast');
    });
});