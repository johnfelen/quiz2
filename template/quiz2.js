(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseover = $('.mouseover');
	$click     = $('.click');
	$sub       = $('.submit');

	$mouseover.on('mouseover', function() {
		$(this) = $(this);
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$click.on('click', function() {
        $(this).hmtl('Peace Out!')
		$(this).fadeout(1500);
		return false;
	});

	$sub.on('submit', function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			$(this).find('input').foreach(function() {
				$(this).fadeout('slow');
			});
			$(this).appendwith('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});

	$(document).on('ready', function() {
		setTimeout(function(){
			$("#timeout").fadeIn('slow');
		}, 1000);
	});

})(jQuery);