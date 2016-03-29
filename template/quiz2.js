(function(){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseover = $('.mouse-over');
	$click = $('.click');
	$sub = $('.submit');

	$mouseover.on('mouseover', function() {
	$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$click.on('click', function() {
        $(this).html('Peace Out!');
		$(this).fadeOut(1500);
		return false;
	});

	$sub.on('submit', function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			$(this).find('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).append('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});

	$(document).on('ready', function() {
		setTimeout(function(){
			$(".timeout").fadeIn('slow');  
		}, 1000);
	});
    
    var firstCall = true;
    $( "#title" ).on( "click", function()
    {

            $.ajax(
            {
                url: "http://www.mattbowytz.com/simple_api.json?data=quizData",
                success: function( data )
                {
                    var movies = data.data;
                    var randMovie = movies[ Math.floor( Math.random() * movies.length ) ];
                    $( "#currMovie" ).html( randMovie );
                }
            });
        if( firstCall )
        {
            $(this).val( "Change It" );
            firstCall = false;
            $( "#currMovie" ).after( $("<input type=\"button\" id=\"keep\" value=\"Keep It\">") );
        }

    });
    
    
    
})();