$(document).ready(function(){
	
	getLength()
})
var getLength = function(){
	var lengthTop = 0
	var screenHeight = $(window).height();
	productAnimation(lengthTop,screenHeight)
	showAnimation(lengthTop,screenHeight)
}

var productAnimation = function(lengthTop,screenHeight){
	$(document).scroll(function(){
		lengthTop = $('.product').offset().top - $(window).scrollTop()-screenHeight/2
		if(lengthTop <= screenHeight){
			$('.product .dd li').eq(0).addClass('corporate')
			$('.product .dd li').eq(1).addClass('shop')
			$('.product .dd li').eq(2).addClass('education')
		}
	})
}
var showAnimation = function(lengthTop,screenHeight){
	$(document).scroll(function(){
		lengthTop = $('.show').offset().top - $(window).scrollTop()+400
		if(lengthTop <= screenHeight){
			$('.show>div').addClass('showScal')
			$('.show .dots .title').addClass('showMove')
			$('.news').addClass('newsHeight')
		}
	})
}