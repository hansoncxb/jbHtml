$(function(){
	
	//当页面小于1200时 头部的变化
	$(window).resize(function(){
		widthGet();
	})
	widthGet();
	function widthGet(){
		if($(window).width()<1200){
    	$(".headWrap").addClass("small")
    }else{
    	$(".headWrap").removeClass("small")
    }
	};
    
})
