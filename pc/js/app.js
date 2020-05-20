$(function(){
	
	jQuery(".picScroll-kb").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,vis:1});
	//大图的切换
	jQuery(".picBan").slide({ mainCell:".pic",effect:"left",titCell:'.hd li', autoPlay:true, delayTime:300,interTime:3500});
	jQuery(".picBan").hover(function() {
        $(this).find(".prev").stop(true, true).animate({
            "left":50 + 'px'
        }, 700);
        $(this).find(".next").stop(true, true).animate({
            "right":50 + 'px'
        }, 700)
    }, function() {
        $(this).find(".prev").stop(true, true).animate({
            "left": -70 + 'px'
        }, 100);
        $(this).find(".next").stop(true, true).animate({
            "right": -70 + 'px'
        }, 100)
    });
	jQuery(".aboutPic").slide({ mainCell:".pic",effect:"left",titCell:".hd li", autoPlay:true, delayTime:300,interTime:3500});
	//金牌老师切换
	jQuery(".tearchPic").slide({titCell:".hd ul",mainCell:".tearchMain ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4,pnLoop:true});
	//新闻切换
	jQuery(".newsBox").slide({ mainCell:".bdwrap",titCell:".hd a", effect:"fold"});
	//就业切换
	jQuery(".studentScroll").slide({mainCell:".pic ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:6,pnLoop:true,scroll:2});
	
    //免费试听下拉
    if($('div[name="class"]').length){
    	$('div[name="class"]').inputbox({
			height:24,
			width:185
		});
    }
	//免费学页面
	// if($(".freeform").length){
	// 	$('[name="rbt"]').inputbox();
	// }
	$("#radio1,#radio2").click(function(){
		var _this = $(this);
		if (!_this.hasClass('rb_active')) {
			_this.siblings().removeClass('rb_active');
			_this.addClass('rb_active');
		}
	});
	if($("#radio1").length){
		if($("#radio1").find('input').get(0).checked){
			$("#radio1").click();
		}
		if($("#radio2").find('input').get(0).checked){
			$("#radio2").click();
		}
		if (!$("#radio1").find('input').get(0).checked && !$("#radio2").find('input').get(0).checked) {
			$("#radio1").click();
		}
	}
	
	//试听课程页面
	if($(".applyClass").length){
		$('.rbt').inputbox();
		$('.cbt').inputbox();
	}
	
	/*金榜简介*/
	if($(".envirentPic").length){
		jQuery(".envirentPic").slide({mainCell:".picwrap ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:1,pnLoop:true});
	}
	/*课程详情*/
	if($(".workScroll").length){
		jQuery(".workScroll").slide({ mainCell:".pic ul",effect:"left", autoPlay:true, delayTime:300});
	}
	
})
