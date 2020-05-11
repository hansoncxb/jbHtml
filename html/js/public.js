var $page = $(".page");

/////////教师模块执行切换
if ($page.hasClass('index-page')) {
    tearchTab(1);
} else if($page.hasClass('indesign-page')) {
    tearchTab(0);
} else if($page.hasClass('graphic-page')){
    tearchTab(6);
} else if($page.hasClass('clothing-page')){
    tearchTab(4);
}else if($page.hasClass('eshop-page')){
    tearchTab(3);
}
////////课程详情执行
if($page.hasClass('ui-page') || $page.hasClass('clothing-page') || $page.hasClass('indesign-page')){
    classTab(6)
}else{
    classTab(5)
}
// 通用教师切换功能
function tearchTab(index) {
    // 教师团队
    var galleryThumbs2 = new Swiper('.teams .gallery-thumbs', {
        initialSlide: index,//首页跟内页默认第几个轮播设置
        spaceBetween: 5,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop2 = new Swiper('.teams .gallery-top', {
        spaceBetween: 10,
        initialSlide: index,//首页跟内页默认第几个轮播设置
        thumbs: {
            swiper: galleryThumbs2
        },
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
    });
    $(".teams .gallery-thumbs .swiper-slide").on("click", function () {
        var _index = $(this).index();
        galleryTop2.slideTo(_index, 500, true);
    });
}
// 通用课程详情TAB
function classTab(showNum) {
    //详情页课程切换
    var galleryThumbs3 = new Swiper('.outline .gallery-thumbs', {
        spaceBetween: 5,
        slidesPerView: showNum,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop3 = new Swiper('.outline .gallery-top', {
        spaceBetween: 10,
        thumbs: {
            swiper: galleryThumbs3
        },
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
    });
    $(".outline .gallery-thumbs .swiper-slide").on("click", function () {
        var _index = $(this).index();
        galleryTop3.slideTo(_index, 500, true);
    });
}
// 商务通代码
function business(){
    alert("我是执行链接到商务通")
}