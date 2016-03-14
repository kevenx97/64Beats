var tabs = $('.tabs');

$('.tab').hide();

tabs.find('a').on('click', function(e){
	e.preventDefault();
	tabs.find('.current').removeClass('current');
	$(this).addClass('current');
	$(this.hash).show().siblings().hide();
}).first().click();