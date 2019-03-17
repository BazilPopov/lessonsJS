$(document).ready(function(){

	function open(){
		$('.overlay').fadeIn();
		$('.modal').fadeIn();
	}
	function close(){
		$('.overlay').fadeOut();
		$('.modal').fadeOut();
	}

	$('.main_btna').on('click',function(){
		open();
	})
	$('.main_btn').on('click',function(){
		open();
	})

	$('.overlay').on('click',function(){
		close()
	});

	$('.close').on('click',function(){
		close()
	});

});	