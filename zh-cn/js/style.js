$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20)
      $(".navbar").addClass("sticky");
    else
      $(".navbar").removeClass("sticky");
  });

  
  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  
});


function weixin(){
	alert("微信不便透露，请联系我的Email（butterfly@mail.xgbutterfly.cn）哦~");
}

