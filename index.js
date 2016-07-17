(function($) {
    $.fn.switch = function(options) {
        var defalut = {
            trackW: 70,
            color: '#ef473a',
        };
        var setting = $.extend(defalut, options);
        var $that = $(this);
        $("#checkbox").click(function() {
            console.log($('#checkbox').prop('checked'));
            if ($('#checkbox').prop('checked')) {
                $(".handle").css({
                    "-webkit-transform":'translate3d(' + (setting.trackW - 27) + 'px, 0, 0)',
                    "transform": 'translate3d(' + (setting.trackW - 27) + 'px, 0, 0)'
                })
            }
            else
            {
                $(".handle").css({
                    "-webkit-transform":'translate3d(0px, 0, 0)',
                    "transform": 'translate3d(0px, 0, 0)'
                })
            }
        })
        $that.find(".track").css("width", setting.trackW + 'px');
    }
})(jQuery)
$(".toggle").switch({
    trackW: 80
});