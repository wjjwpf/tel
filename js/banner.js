window.onload = window.onresize = function() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth * 20 / 320 + 'px';
	 var mySwiper = new Swiper('.swiper-container', {
		autoplay: 2000, //可选选项，自动滑动
		pagination: '.swiper-pagination',
		loop: true,
	});
};