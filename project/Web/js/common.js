$(document).ready(function(){
	
	getLength()
})
var getLength = function(){
	var lengthTop = 0
	var screenHeight = $(window).height();
	productAnimation(lengthTop,screenHeight)
	showAnimation(lengthTop,screenHeight)
	gotoTop(screenHeight)
}

var productAnimation = function(lengthTop,screenHeight){
		productAnimated(lengthTop,screenHeight)
	$(document).scroll(function(){
		productAnimated(lengthTop,screenHeight)
	})
}
var productAnimated = function(lengthTop,screenHeight){
	lengthTop = $('.product').offset().top - screenHeight + $('.product').height();
	if(lengthTop <= $(window).scrollTop()){
		$('.product .dd li').eq(0).addClass('corporate')
		$('.product .dd li').eq(1).addClass('shop')
		$('.product .dd li').eq(2).addClass('education')
	}
}
var showAnimation = function(lengthTop,screenHeight){
	showAnimated(lengthTop,screenHeight)
	$(document).scroll(function(){
		showAnimated(lengthTop,screenHeight)
	})
	
}
var showAnimated = function(lengthTop,screenHeight){
	lengthTop = $('.show').offset().top - screenHeight + $('.product').height()/2;
	if(lengthTop <= $(window).scrollTop()){
		$('.show>div').addClass('showScal')
		$('.show .dots .title').addClass('showMove')
		$('.news').addClass('newsHeight')
	}
}
var gotoTop = function(screenHeight){
	var lengthTop = $(window).scrollTop()
	$(document).scroll(function(){
		lengthTop = $(window).scrollTop()
		if(lengthTop > 0){
			$('.gotoTop').css('right','0')

		}
		else {
			$('.gotoTop').css('right','-50px')
		}
	})
	$('.gotoTop .item').eq(2).click(function(){
		 $('body,html').animate({ scrollTop: 0 }, 200);
		 return false;
	})
	if(lengthTop > 0){
			$('.gotoTop').css('right','0')

		}
}