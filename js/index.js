window.onload = window.onresize = function() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth * 20 / 320 + 'px';
    // 菜单显示
    $('.xs').click(function() {
        $('.boxl').stop().animate({ 'left': '-8.0213rem' });
        $('.cmenu').css('display', 'block');

        $('.cmenu').stop().animate({ 'width': '8.0213rem' });
        $('.zzc').css('display', 'block');
        // $("body").css("overflow","hidden");
        $('html,body').addClass('ovfHiden');
    });
    // 隐藏菜单
    $('.zzc').click(function() {
        $('.boxl').stop().animate({ 'left': '0' });
        $('.cmenu').stop().animate({ 'width': '0' });
        $('.zzc').css('display', 'none');
        $('html,body').removeClass('ovfHiden');
    });

    // 产品与服务
    $('.serve-li').bind('click',function(event) {
        var index = $(this).index();
        $('.serverData').stop().animate({ 'bottom': '-6.4rem' });
        $('.serverData').eq(index - '1').stop().animate({ 'bottom': '0' });
        $('.cen-a').html('.tel优势');
        event.stopPropagation(); 
    });
    // 优势
    var arr = ['用中文<br />连接世界', '37种语言<br />全球服务', '打破边界<br />真正共享', '有生命力神经元<br />传递所有能力'];
    $('.advantage-s').bind('click',function(event) {
        $('.cen-a').css('display', 'none');
        var index = $(this).index();
        $('.cen-a').html(arr[index]);
        $(".cen-a").fadeIn(500);
        $('.serverData').stop().animate({ 'bottom': '-6.4rem' });
        event.stopPropagation(); 
    })
    // 还原产品与服务和优势
    	$('.advantage,.serve,.guanxitu').bind("click",function(event){
			$('.cen-a').html('.tel优势');
			$('.serverData').stop().animate({ 'bottom': '-6.4rem' });
			event.stopPropagation();    //  阻止事件冒泡
		});
    // 回到顶部
    $(window).scroll(function() {
        var sc = $(window).scrollTop();
        var rwidth = $(window).width();
        if (sc > 0) {
            $(".hddb").css("display", "block");
            $(".hddb").css("left", (rwidth - 36) + "px")
        } else {
            $(".hddb").css("display", "none");
        }
    })
    $(".hddb").click(function() {
        var sc = $(window).scrollTop();
        $('body,html').stop().animate({ scrollTop: 0 }, 500);
    })
    // 视频
    var oVideo=document.getElementById('vide');

        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){

             $('#vide').css('height','10rem');
             $('#vide').css('paddingTop','1rem');
        } else if (/(Android)/i.test(navigator.userAgent)) {
             
        } else {
          
        };
    

};