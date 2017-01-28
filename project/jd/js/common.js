$(document).ready(function(){
	header()
})
var header = function(){
	$(".header .item").mouseover(function(){
		$(this).children('.dd').css('display','block')
		$(this).children('.symbol').css('display','block')
	})
	$(".header .item").mouseout(function(){
		$(this).children('.dd').css('display','none')
		$(this).children('.symbol').css('display','none')
	})
}