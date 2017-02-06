$(document).ready(function(){
	
	getLength()
})
var getLength = function(){
	var lengthTop = $('.product').offset().top - $('.product').scrollTop()
	$(document).scroll(function(){
		// alert($('.product').scrollTop())
		if(lengthTop=='750'){
			// alert(lengthTop)
		}
	})
	
		
}