$(document).ready(function(){
	var open = false;
	$('.piece').click(function(){
		if (open == false) {
			$('.gallery').slideToggle('slow');
			open = true;
		}
		var item = $(this).attr("show");
		$('.active').hide().removeClass('active');
		$(item).addClass('active');
		$(item).show();
		$.scrollTo('.gallery', 500);
	});
});