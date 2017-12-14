//适配
(function() {
        var newRem = function() {
            var html = document.documentElement;
            html.style.fontSize = html.getBoundingClientRect().width / 16 + 'px';
        };
        window.addEventListener('resize', newRem, false);
        newRem();
    })();
  // window.onload = window.onresize = function() {
  //   document.documentElement.style.fontSize = document.documentElement.clientWidth * 20 / 320 + 'px';}
