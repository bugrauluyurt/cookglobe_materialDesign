$( document ).ready(function(){

	$(window).load(function() {
		$(".loader").fadeOut("slow");
	});

    $(".button-collapse").sideNav();

	$(".cuisines-menu-button").dropdown({
		hover: false,
	});

	$(".user-dropdown-button").dropdown({
		hover: false,
	});

    $('.register').leanModal();
    $('.login-modal').leanModal();	

	$('.counter').counterUp({
	    delay: 10,
	    time: 1000
	});

});