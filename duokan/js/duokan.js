// 1>书籍分类选项卡
$("#banner_menu_wrap").children().hover(function(){
	// alert("111");
    $(this).css("background","#ff6700");
    $(this).children(".banner_menu_content").css("border","1px solid #F0F0F0").show();
},function(){
    $(this).css("background","none");
    $(this).children(".banner_menu_content").css("border","0px solid #F0F0F0").hide();
});

// 2>主导航栏切换效果
$('.center-nav').children().click(function () {
    $(this).addClass('checked');
    $(this).siblings().removeClass('checked');
});

