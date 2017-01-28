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
	$('.banner .dots .dots_item:eq(0)').css('border-color','#aaa')
	$('.banner .dots .dots_item').mouseover(function(){
		$('.banner .dots .dots_item').css('border-color','#fff')
		$(this).css('border-color','#aaa')
	})
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
}