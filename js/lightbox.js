/**
* Developed by Sanjay Khadka
* https://github.com/yegya
*/
$(document).ready(function(){
	$("a#show-panel").click(function(){
		$("#sold-out-lightbox-backdrop, #sold-out-lightbox-panel").fadeIn('slow');
	})

	$("a#close-panel, #sold-out-lightbox-backdrop").click(function(){
		$("#sold-out-lightbox-backdrop, #sold-out-lightbox-panel").fadeOut('slow');
	})

	// message post button click
	$('#postmessage').click(function() {

        var message = $('#message').val();

        var error = false;
        if (!message) {

            error = true;
            $('#message').css({
                "border": "#F00 1px solid"
            });
        }
        else
        {
            $('#message').css({
                "border": ""
            });
        }

        if(!error) {
        	alert('Do some ajax call here');
        	// $.ajax();
        }
	});
});