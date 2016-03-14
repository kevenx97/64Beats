$(function(){

	var liWidth = $("#galeria ul li").outerWidth();
		speed = 6500,
		rotate = setInterval(auto, speed);

	// Mostrar botões
	$("div#galeria").hover(function(){ 
		$("div#bt-slide").fadeIn();
		clearInterval(rotate);
	}, 	function(){
		$("div#bt-slide").fadeOut();
		rotate = setInterval(auto, speed);
	});

	//Proximo
	$(".next").click(function(e){
		e.preventDefault();

		$("div#galeria ul").css({'width': '99999%'}).animate({left:-liWidth}, function(){
			$("#galeria ul li").last().after($("#galeria ul li").first());
			$(this).css({'left':'0', 'width':'auto'});
		});
	});

	//Voltar
	$(".prev").click(function(e){
		e.preventDefault();

		
		$("#galeria ul li").first().before($("#galeria ul li").last().css({'margin-left':-liWidth}));
		$("div#galeria ul").css({'width':'99999%'}).animate({left:liWidth}, function(){
			$("#galeria ul li").first().css({'margin-left':'0'});
			$(this).css({'left':'0', 'width':'auto'});
		});
	});


	function auto(){
		$(".next").click();
	}
});