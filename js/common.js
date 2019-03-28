$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

// HOME SLIDER
$(function() {
$(".slider_types, .slider_nature").owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    loop:true,
    nav: false,
    autoplay : true,
    touchDrag:true,
    mouseDrag:true,
    margin:0,
    stagePadding:0,
    smartSpeed:450,
});
});
// HOME SLIDER
$(function() {
$(".owl-slider").owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    loop:true,
    nav: false,
    dots: false,
    touchDrag:false,
    mouseDrag:false,
    margin:0,
    stagePadding:0,
    smartSpeed:450,
    autoplay : true
});
});
//Gallery carousel
$(function() {
$(".slider_gallery").owlCarousel({
    items:6,
    loop:true,
    nav:false,
    dots:true,
    touchDrag:true,
    mouseDrag:true,
    margin:5,
    stagePadding:0,
    smartSpeed:450,
    responsive:{
        0:{
            items:1,
            dots: false
        },    	
        480:{
            items:2,
        },
         520:{
            items:3,
        },
        768:{
            items:4,
        },
        992:{
            items:5,
        }
    }
});
});
$(function() {
$(".js-q-fancybox").fancybox({
  protect: true,
  buttons : [
    'zoom',
    'thumbs',
    'close'
  ]
})
});
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});





	$(".toggle_mnu").click(function() {
		if ($(".low_mnu_wrap").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".low_mnu_wrap ").fadeOut(600);
			$(".low_mnu_wrap li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".low_mnu_wrap").fadeIn(600);
			$(".low_mnu_wrap li a").addClass("fadeInUp animated");
		};
	});

$(".high_mnu a, .low_mnu a, .middle_mnu a").mPageScroll2id();
$('table').basictable({
    breakpoint: 992,
     tableWrapper: true,
    forceResponsive: false,
});


           jQuery(function($)
 {
                var track = function(data) {
                  $('.min-price').val(data.from);
                  $('.max-price').val(data.to);
                };
                $("#range").ionRangeSlider({
                  type: "double",
                  hide_min_max: true,
                  hide_from_to: true,
                  //from: 1200000,
                  //to: 1800000,
                  grid: false,
                  onStart: track,
                  onChange: track,
                  onFinish: track,
                  onUpdate: track
                });
              });
         $(document).ready(function() {
            $('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
            $('.plus').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            });
        });          