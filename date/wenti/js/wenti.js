// 问题js
// 滑动toggle
$(function(){
    $('li').click(function() {
        var index=$(this).index();
        $('p').stop().eq(index).slideToggle('slow');
    });
});