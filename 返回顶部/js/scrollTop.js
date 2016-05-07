//页面加载完毕后触发
window.onload = function() {
  var scrollBtn = document.getElementById("scrollBtn");
  var clientHeight = document.documentElement.clientHeight;
  var timer = null;
  var isTop = true;

  window.onscroll = function(){
    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (osTop >= clientHeight) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
    if (!isTop) {
      clearInterval(timer);
    }
    isTop = false;
  }

  scrollBtn.onclick = function() {
    //设置定时器
    timer = setInterval(function(){
      //获取滚动条距离顶部的高度
      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
      var ispeed = Math.floor( -osTop / 5);
      document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
      isTop = true;
      if (osTop == 0) {
        clearInterval(timer);
      }
    }, 30);

  }
}
