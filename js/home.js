$(document).ready(function(){
	$('.user').click(function(){
		$('.list-option').slideDown('fast');
	});
	$('.list-option').mouseleave(function(){
		$(this).slideUp('fast');
	});
});