/* 轮播图 */
(function(){
    let oSiper = document.querySelector(".swiper-img"),
    oImag = document.querySelector("#root .swiper-area .swiper-img ul"),
    oTab = document.querySelectorAll("#root .swiper-area .tab ul li"),
    index = 0,
    len = oTab.length,
    te;/* 定时器储存 */

    oTab.forEach(function(item,i){
      item.onclick = function(){
        fn(i);              
      }
    })

    //鼠标移入停止
    oSiper.onmouseenter = function(){
      clearInterval(te);
    };

    // 移开启动
    oSiper.onmouseleave = ties();

    function ties(){
    // 自动轮播 
    te = setInterval(function(){
      fn((index + 1) % len);
    },3000)

    return ties;  // 自执行,执行完,把函数返回出来,给oRoot.onmouseleave = ties();调用
  };

    function fn(s){
      oTab[index].classList.remove("on");
      index = s;
      oImag.style.marginLeft = "-"+s+"00%";
      oTab[index].classList.add("on");
    }
})();

/* 返回顶部 */
(function(){
    $(document).ready(function(){
      let $oTop = $("#return");
    // 获取滚动高
    $(window).scroll(function m(){
      let sTop = $(window).scrollTop();
      if(sTop >= 1000){
        $oTop.stop().animate({
          height:45
        },300)
      }else{
        $oTop.stop().animate({
          height:0
        },300)
      }
    });
    // 点击返回顶部
    $oTop.click(function() {
      $("html").stop().animate({
        scrollTop: 0
      },
      1000);
    });
});


/*   // 返回顶部
 (function(){
  let backTop = document.getElementById("return") //获取到div 对象
  　　// onscroll 事件 ====》在元素滚动条在滚动时触发。
  　　window.onscroll = function (){
  　　　　let scrollTop = 
        document.documentElement.scrollTop? document.documentElement.scrollTop:document.body.scrollTop;

  　　　　if(scrollTop > 800){      //当滚动条滚动的距离大于 800 的时候，才会显示 回到顶部的div
  　　　　　　backTop.style.display = "block"
  　　　　}else{
  　　　　　　backTop.style.display = "none"
  　　　　}
  　　}

  　　// 为 div 添加点击事件
  　　let id;  // ===== 要注意 id声明的位置
  　　backTop.onclick = function (){
  　　　   id = setInterval(function (){  
     　　　　let current = document.documentElement.scrollTop? document.documentElement.scrollTop:document.body.scrollTop;
     　　　　if(current === 0){
     　　　　　　clearInterval(id);  　　// 当滚动距离为0 的时候，要清除这个间隔函数
     　　　　}
     　　　　document.documentElement.scrollTop = current - 100    // 形成一个慢慢过渡到0 的过程
     　　　　document.body.scrollTop = current - 100  // 写两个是为了兼容
  　　　　 },16)

  　 }
  　　// 在回到顶部的过程时候，鼠标滚轮动的时候，滚动会暂停
  　　// 添加一个鼠标滚轮事件
  　　window.onmousewheel = function (){
  　　  clearInterval(id);  // 这个时候会涉及到上面标注的要注意id的位置，最开始的时候 把他写在了函数体里面，到这里的时候就获取不到了。
  　　} */
})();