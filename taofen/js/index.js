/**
 * Created by Administrator on 2016/10/4.
 */


window.onload = function () {
    var tlogin = document.getElementById("tlogin");
    var plogin = document.getElementById("plogin");
    var contact = document.getElementById("contact");
    var download = document.getElementById("download");
    var close = document.getElementById('close');
    var wx = document.getElementById('wx-pic');
    var as = document.getElementById("top").getElementsByTagName("a");
    var lis = document.getElementById("nav").getElementsByTagName("a");
    var sign = document.getElementById("sign");

    close.onclick = function(){
       wx.style.display = 'none';
    }
    //  top
    for (var i = 0; i < as.length; i++) {
        as[i].onmouseover = function () {
            this.style.color = "#000";
        };
        as[i].onmouseout = function () {
            this.style.color = "#999";
        }
    }
    var arr1 = [{target: tlogin, newP: "-37px -81px", oldP: "-37px -64px"},
        {target: plogin, newP: "-37px -48px", oldP: "-37px -32px"},
        {target: contact, newP: "-37px -16px", oldP: "-37px 0"},
        {target: download, newP: "-37px -48px", oldP: "-37px -32px"}];

    function mouseover(arr, i) {
        arr[i].target.getElementsByTagName("span")[0].style.backgroundPosition = arr[i].newP;
        arr[i].target.style.color = "#000";
    }

    function mouseout(arr, i) {
        arr[i].target.getElementsByTagName("span")[0].style.backgroundPosition = arr[i].oldP;
        arr[i].target.style.color = "#999";
    }

    tlogin.onmouseover = function () {
        mouseover(arr1, 0);
    }
    tlogin.onmouseout = function () {
        mouseout(arr1, 0);
    }
    plogin.onmouseover = function () {
        mouseover(arr1, 1);
    }
    plogin.onmouseout = function () {
        mouseout(arr1, 1);
    }
    contact.onmouseover = function () {
        mouseover(arr1, 2);
    }
    contact.onmouseout = function () {
        mouseout(arr1, 2);
    }
    download.onmouseover = function () {
        mouseover(arr1, 3);
    }
    download.onmouseout = function () {
        mouseout(arr1, 3);
    }
    //  签到有好礼的弹出框
    sign.onmouseover = as[2].onmouseover = function () {
        sign.style.display = "block";
    };
    sign.onmouseout = as[2].onmouseout = function () {
        sign.style.display = "none";
    };

    //   nav的导航栏
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            if (this.style.borderBottom) {
                return;
            }
            this.style.borderBottom = "4px solid #F93579";
        }
        lis[i].onmouseout = function () {
            this.style.borderBottom = "";
        }
    }
    // 轮播图部分开始
    var pptBanner = document.getElementById('ppt-banner');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var len = 8;
    var animated = false;
    var interval = 3000;
    var timer;
    var timer2;

    function animate(offset) {
        if (offset == 0) {
            return;
        }
        animated = true;
        var time = 300;
        var inteval = 5;
        var speed = offset / (time / inteval);
        var left = parseInt(list.style.left) + offset;
        var go = function () {
            if ((speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }
            else {
                list.style.left = left + 'px';
                if (left > -1349) {
                    list.style.left = -1349 * len + 'px';
                }
                if (left < (-1349 * len)) {
                    list.style.left = '-1349px';
                }
                animated = false;
            }
        }
        go();
    }

    function showButton() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }

    function play() {
        timer = setTimeout(function () {
            next.onclick();
            play();
        }, interval);
    }

    function stop() {
        clearTimeout(timer);
    }

    next.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 8) {
            index = 1;
        }
        else {
            index += 1;
        }
        animate(-1349);
        showButton();
    }
    prev.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 1) {
            index = 8;
        }
        else {
            index -= 1;
        }
        animate(1349);
        showButton();
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (animated) {
                return;
            }
            if (this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -1349 * (myIndex - index);
            animate(offset);
            index = myIndex;
            showButton();
        }
    }
    pptBanner.onmouseover = stop;
    pptBanner.onmouseout = play;
    play();
//    轮播图部分结束
//    品牌特卖部分
    var temai = document.getElementById("temai").getElementsByTagName("li");
    for(var i = 0; i < temai.length; i++){
        temai[i].onmouseover = function () {
            this.getElementsByClassName("wrap")[0].style.display = "none";
        }
        temai[i].onmouseout = function () {
            this.getElementsByClassName("wrap")[0].style.display = "block";
        }
    }

    var goods = document.getElementById("goods").getElementsByTagName("li");
    // var like = goods.getElementsByTagName("a");
    for (var i = 0; i < goods.length; i++) {
        goods[i].onmouseover = function () {
            this.style.borderColor = "rgb(238,71,125)";
            this.getElementsByTagName("a")[2].style.display = "inline-block";
            this.getElementsByTagName("a")[2].style.marginLeft = "126px";

        }
        goods[i].onmouseout = function () {
            this.style.borderColor = "gray";
            this.getElementsByTagName("a")[2].style.display = "none";
        }
    }

    arr2 = ["TB2zBVYeXXXXXbdXXXXXXXXXXXX_!!2296013456.png", "TB21yXOeXXXXXcvXXXXXXXXXXXX_!!2296013456.png", "TB2QW4WeXXXXXb0XXXXXXXXXXXX_!!2296013456.png",
        "TB2.ht0eXXXXXawXXXXXXXXXXXX_!!2296013456.png", "TB2A7XGeXXXXXbnXpXXXXXXXXXX_!!2296013456.png","TB2fU8DeXXXXXctXpXXXXXXXXXX_!!2296013456.png",
        "TB2OjBWeXXXXXaKXXXXXXXXXXXX_!!2296013456.png","TB2Iw4IeXXXXXaNXpXXXXXXXXXX_!!2296013456.png"];
    var brandAs = document.getElementById("brand").getElementsByTagName("a");
    for (var i = 0; i < brandAs.length; i++) {
        brandAs[i].onmouseover = function () {
            if(this.getAttribute("index") == "1"){
                this.getElementsByTagName("div")[0].style.background = "url(images/"+ arr2[1] +") no-repeat"
            }
            if(this.getAttribute("index") == "2"){
                this.getElementsByTagName("div")[0].style.background = "url(images/"+ arr2[3] +") no-repeat"
            }
            if(this.getAttribute("index") == "3"){
                this.getElementsByTagName("div")[0].style.background = "url(images/"+ arr2[5] +") no-repeat"
            }
            if(this.getAttribute("index") == "4"){
                this.getElementsByTagName("div")[0].style.background = "url(images/"+ arr2[7] +") no-repeat"
            }
            this.getElementsByTagName("p")[0].style.color = "#eb005e";

        }
        brandAs[i].onmouseout = function () {
            if(this.getAttribute("index") == "1"){
                this.getElementsByTagName("div")[0].style.background = "url(images/"+ arr2[0] +") no-repeat"
            }
            if(this.getAttribute("index") == "2"){
                this.getElementsByTagName("div")[0].style.background = "url(images/"+ arr2[2] +") no-repeat"
            }
            if(this.getAttribute("index") == "3"){
                this.getElementsByTagName("div")[0].style.background = "url(images/"+ arr2[4] +") no-repeat"
            }
            if(this.getAttribute("index") == "4"){
                this.getElementsByTagName("div")[0].style.background = "url(images/"+ arr2[6] +") no-repeat"
            }
            this.getElementsByTagName("p")[0].style.color = "#333";
        }
    }
    //  超高返部分悬停

    var target = 0;
    var leader = 0;
    var retTop = document.getElementById('retTop');
    window.onscroll = function (e) {
        var gaofan = document.getElementById("gaofan");
        var sTop = document.body.scrollTop;
         //leader = scroll().top;
        var cWidth = document.documentElement.clientHeight;
        var xuanfudivs = document.getElementById("youxuanfu").childNodes;


        //if(leader > 0){
        //    retTop.style.display = 'block';
        //}else{
        //    retTop.style.display = 'none';
        //}


        if(sTop > cWidth){
            xuanfudivs[7].style.opacity = "1";

        }else{
            xuanfudivs[7].style.opacity = "0";
        }
        if(sTop > 936){
            gaofan.style.position = "fixed";
            gaofan.style.top = "0" + "px";
            gaofan.style.left = "150" + "px";
            gaofan.style.zIndex = "10";
            gaofan.style.background = "white";
        }else{
            gaofan.style.position = "static";
        }
    }

    retTop.onclick = function(){
        var timer6 =setInterval(function(){
            leader = leader + (target - leader)/10;
            window.scrollTo(0,leader);
            if(leader == target){
                clearInterval(timer6);
            }
        },100)

    }
    //  右侧悬浮框
    var divs = document.getElementById("youxuanfu").getElementsByTagName("div");
    for(var i = 0; i < divs.length - 1; i++){
        divs[i].onmouseover = function () {

            this.firstElementChild.style.display = "block";

        }
        divs[i].onmouseout = function () {
            this.firstElementChild.style.display = "none";

        }
    }
    divs[3].onmouseover = function (){
        this.style.background = "url('images/smallthing.png') 0 37px";
    }
    divs[3].onmouseout = function (){
        this.style.background = "url('images/smallthing.png') 0 74px";
    }

   // 底部友情链接
   //  var scrollAs = document.getElementsByClassName("scroll_bottom");
   //  for( var i = 0; i < scrollAs.length; i++){
   //      scrollAs[i].onmouseover = function () {
   //          this.style.color = "#f53e7b";
   //      }
   //      scrollAs[i].onmouseout = function () {
   //          this.style.color = "#828282";
   //      }
   //  }

    //  底部滚动 友情链接
    var scroll = document.getElementById("scroll");
    var scrollDivs = scroll.getElementsByTagName("div");
    function donghua() {

        var ii = 0;
            timer2 = setInterval(function () {
                scrollDivs[ii].style.display = "none";
                ii++;
                if( ii> 2){
                    ii = 0;
                    for(var i = 0; i < 3; i++){
                        scrollDivs[i].style.display = "block";
                    }
                }
            },4000)
        }
    donghua();


}

