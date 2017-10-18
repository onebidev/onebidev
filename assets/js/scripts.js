
/* ===========   SPINNER WHEN PAGE IS LOADING   =============   */

$(window).on('load', function() {
    // Animate loader off screen
	setTimeout(function () {
        $('.loadingWrapper').fadeOut("slow");
    }, 1200)
});

/* ===========     SCROLL TO ID      ============ */

$('.menu-item a').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 60
        }, 1500);
    }
});

/* ===========   SLIDE DOWN BUTTON FUNCTION    ========= */

$('.slideDown').on('click', function(){
	$('html, body').stop().animate({
            scrollTop: $('#about-us').offset().top
        }, 1500);
});

/* ========   FADING SCROLL BTN AFTER SCROLL    ========= */

$(window).scroll(function(){
	if ($(this).scrollTop() > 700) {
		$('.scrollTop').fadeIn();
	} else {
		$('.scrollTop').fadeOut();
	}
});
	
/* ===========     SCROLL TO TOP     ============ */

$('.scrollTop').on('click', function(){
	$('html, body').animate({scrollTop : 0},800);
	return false;
});

/* =======   SLIDE DOWN MOBILE MENU & HIDE MENU ON MENU ITEM CLICK   =======  */

$('.hamburgerBtn').on('click', function(){
	$('.mobileWrapper').toggleClass('open');
});


$('.menu-item').on('click', function () {
	$('.mobileWrapper').toggleClass('open');
})

/* ============   STICKY NAVBAR   ============== */

$(window).scroll(function(){
	if ($(this).scrollTop() > 200 && $( window ).width() > 750) {
		$('.navigation-wrapper').addClass('sticky');
	} else {
		$('.navigation-wrapper').removeClass('sticky');
	}
});