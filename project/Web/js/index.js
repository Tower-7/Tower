$(document).ready(function(){
	
	show()
})
var show =function(){
	var i = 0 
	var timer = setInterval(function(){
		AutoPlayer()
	},3000)
	var AutoPlayer =function(){
		$('.show .cases .web ul').css('transform','translateY('+i*-485+'px)')
		i++
		if(i>$('.show .dot').length-1){
			i = 0
		}
	}
	$('.show .dot').each(function(index){
		$(this).mouseover(function(){
			$('.show .cases .web ul').css('transform','translateY('+index*-485+'px)')
			clearInterval(timer)
		})
		$(this).mouseout(function(){
			timer = setInterval(AutoPlayer,3000)
		})
	})
}