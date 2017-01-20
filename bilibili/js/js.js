/**
 * Created by Administrator on 2017/1/13.
 */

var b_post = document.getElementById('tougao');
var b_post_list = document.getElementById('b_post_list');
var sptg=document.getElementById("sptg");
var tggl=document.getElementById("tggl");
var czzx =document.getElementById("czzx");
var header_bg=document.getElementsByClassName("header_bg")[0];
var banner_title=document.getElementsByClassName("banner_title")[0];
var search_btn=document.getElementById("search_btn");
var paihang=document.getElementById("paihang");
var input_search=document.getElementById("input_search");


b_post.onmouseover = function () {
    b_post_list.style.zIndex = 100;
};
b_post.onmouseout= function () {
    b_post_list.style.zIndex = -1;

};
b_post_list.onmouseover= function () {
    b_post_list.style.zIndex = 100;
}
b_post_list.onmouseout= function () {
    b_post_list.style.zIndex = -1;
};

sptg.onmouseover= function () {
    sptg.style.backgroundColor="#e5e9ef";
}
sptg.onmouseout= function () {
    sptg.style.backgroundColor="#fff";
}
tggl.onmouseover= function () {
    tggl.style.backgroundColor="#e5e9ef";
}
tggl.onmouseout= function () {
    tggl.style.backgroundColor="#fff";
}
czzx.onmouseover= function () {
    czzx.style.backgroundColor="#e5e9ef";
}
czzx.onmouseout= function () {
    czzx.style.backgroundColor="#fff";
};

header_bg.onmouseover= function () {
    banner_title.style.zIndex=100
}
header_bg.onmouseout= function () {
    banner_title.style.zIndex=-1
}
search_btn.onmouseover= function () {
    $('#click_search').addClass("active_search")
}
search_btn.onmouseout= function () {
    $('#click_search').removeClass("active_search")
}

paihang.onmouseover= function () {
    paihang.style.backgroundColor="rgb(255,255,255)";
}
paihang.onmouseout= function () {
    paihang.style.backgroundColor="rgba(255,255,255,0.8)";
}

input_search.onmouseover= function () {
    input_search.style.backgroundColor="rgb(255,255,255)"
}
input_search.onmouseout= function () {
    input_search.style.backgroundColor="rgba(255,255,255,0.8)";
}