$(document).ready(function(){
	nav()
	banner()
})
var nav = function(){
	$('.nav .item:eq(0) a').css({
		'color':'#69B0AC',
	'border-bottom-color':'#69B0AC'})
	$('.nav .item').mouseover(function(){
		$(this).children('.dd').css('display','block')
	})
	$('.nav .item').mouseout(function(){
		$(this).children('.dd').css('display','none')
	})
}
var banner = function(){
	//按钮显示样式
	$('.banner').mouseover(function(){
		$('.banner .btn').css('display','block')
	})
	$('.banner').mouseout(function(){
		$('.banner .btn').css('display','none')
	})
	$('.banner .btn').mouseover(function(){
		$(this).css('opacity','1')
	})
	$('.banner .btn').mouseout(function(){
		$(this).css('opacity','0.5')
	})
	//自动播放banner
	var timer = setInterval(next,5000)
	$('.banner .banner_box li').mouseover(function(){
		clearInterval(timer)
	})
	$('.banner .banner_box li').mouseout(function(){
		timer = setInterval(next,5000)
	})
	//切换下一张banner
	$('.banner .next').click(function(){
		next()
	})
	//切换上一张banner
	$('.banner .pre').click(function(){
		pre()
	})
	//选择点切换
	$('.banner .dots .dots_item:eq(0)').css('border-color','#aaa')
	$('.banner .dots .dots_item').mouseover(function(){
		$('.banner .dots .dots_item').css('border-color','#fff')
		$(this).css('border-color','#aaa')
		$('.banner .dots .dots_item').each(function(index){
			if($(this).css('border-color')=='rgb(170, 170, 170)'){
				i = index
			}
		})
		$('.banner .banner_box li').removeClass('active')
		$('.banner .banner_box li:eq('+i+')').addClass('active')
	})
	//下一张banner
	var next = function(){
		var i = 0
		$('.banner .banner_box li').each(function(index){
			if($(this).css('z-index')==1){
				i = index+1
				if(i>=$('.banner .banner_box li').length){
					i = 0
				}
			}
		})
		bannerSwitch(i)
	}
	//上一张banner
	 var pre = function(){
	 	var i = 0
		$('.banner .banner_box li').each(function(index){
			if($(this).css('z-index')==1){
				i = index-1
				if(i<0){
					i = $('.banner .banner_box li').length-1
				}
			}
		})
		bannerSwitch(i)
	 }
	 //切换banner
	 var bannerSwitch = function(i){
	 	$('.banner .banner_box li').removeClass('active')
		$('.banner .banner_box li:eq('+i+')').addClass('active')
		$('.banner .dots .dots_item').css('border-color','#fff')
		$('.banner .dots .dots_item:eq('+i+')').css('border-color','#aaa')
	 }
		
}