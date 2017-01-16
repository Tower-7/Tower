$(document).ready(function(){
	$('nav .collapse .nav li').mouseover(function(){
		$(this).addClass('active')
	})
	$('nav .collapse .nav li').mouseout(function(){
		$(this).removeClass('active')
	})
})