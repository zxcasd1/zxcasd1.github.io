//轮播图部分功能实现
$(function () {
  var $carousel = $(".wjs_banner>.carousel");
  var $item = $carousel.find(".item");
  var $img = $carousel.find("img");
  // $carousel.carousel();
  //屏幕从pc端到移动端变换的时候 pc端的轮播图固定高度410px
  $(window).on("resize", function () {
    var pageWidth = $(window).width(); //获取页面的宽度
    // console.log(pageWidth);
    //小于640是移动端的
    var isMobil = pageWidth >= 640 ? false : true;
    if (isMobil) {
      
      $item.removeClass("item_pc");
      
    } else {
      //item_pc的类是高度定死  宽度
      $item.addClass("item_pc");
    }
    var src = "";
    $img.each(function (i, el) {
      // $(el).eq(i).attr("src",src);
      if (isMobil) {
        src = $(el).data("msrc");
      } else {
        src = $(el).data("psrc");
      }
      $(el).attr("src", src);
    })
  }).trigger("resize");
  
  var startX=0;
  $carousel.on("touchstart",function (e) {
    // console.log(e);
    startX=e.originalEvent.changedTouches[0].clientX;
  })
  $carousel.on("touchend",function (e) {
      var distance=e.originalEvent.changedTouches[0].clientX-startX;
    if(Math.abs(distance)>30){
      if(distance>0){
        console.log("上一屏");
        $carousel.carousel('prev');
      }
      if(distance<0){
        console.log("下一屏");
        $carousel.carousel('next');
      }
    }
  })
});

//iscroll插件
$(function () {
  var ul=$(".wjs_product .nav");
  var lis=ul.children();
  // console.log(lis);
  var width=0;
  lis.each(function (i,el) {
      width+=$(this).outerWidth(true);
  })
  // console.log(width);
  ul.css("width",width);  //把动态算出来的宽给ul
  //使用iscroll插件
  new IScroll(".nav_wrap",{
    scrollX:true,
    scrollY:false
  });
  
})
