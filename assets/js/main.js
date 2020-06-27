jQuery(function ($) {
	'use strict';
	// Preloader
	$(window).on('load', function () {
		$('.preloader').addClass('preloader-deactivate');
	});


	// Mean Menu
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});

	// Wow  JS
	// new WOW({
	// 	offset: 100,
	// 	mobile: true
	// }).init();

	new WOW().init();

	// Popup images
	$('.image-pop').magnificPopup({
		type: 'image',
		removalDelay: 300,
		gallery: {
			enabled: true
		},
	});


	$('.review-slider').owlCarousel({
		loop: true,
		margin: 20,
		dots: true,
		autoplay: true,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			575: {
				items: 1,
			},
			576: {
				items: 1,
			},
			768: {
				items: 1,
			},
			992: {
				items: 1,
			},
			1200: {
				items: 1,
			}
		}
	});

	$(".nav-item").on("click", function (e) {
		$(".nav-item").removeClass("active");
		$(this).addClass("active");
	});

	// Mixit Up
	var config = document.querySelector('.mix-content');
	var mix = mixitup(config);
	var config = {
		animation: {
			enable: true,
			effects: 'fade translateZ(-100px)'
		},
		selectors: {
			target: '.mix-content'
		}
	};

	// Skill
	$(".resume-area").on('scroll', function () {
		var c4 = $('.skills-circle .skill');
		var myVal = $(this).attr('data-value');
		$(".skills-circle .skill").each(function () {
			c4.circleProgress({
				startAngle: -Math.PI / 2 * 1,
				value: myVal,
				thickness: 5,
				size: 90,
				fill: { color: "#ffbe00" }
			});

		});
	});


	$(".resume-area").on('scroll', function () {
		$(document).ready(function () {
			$('#bar1 ,#bar2').barfiller({
				barColor: '#ffbe00'
			}
			);
			$('#bar2').barfiller({
				barColor: '#ffbe00'
			}
			);
			$('#bar3').barfiller({
				barColor: '#ffbe00'
			}
			);
			$('#bar4').barfiller({
				barColor: '#ffbe00'
			}
			);
			$('#bar5').barfiller({
				barColor: '#ffbe00'
			}
			);
		}
		);
	});

	function mousecursor() {
		if ($("body")) {
			const e = document.querySelector(".cursor-inner"),
				t = document.querySelector(".cursor-outer");
			let n, i = 0,
				o = !1;
			window.onmousemove = function (s) {
				o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
			}, $("body").on("mouseenter", "a, .cursor-pointer", function () {
				e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
			}), $("body").on("mouseleave", "a, .cursor-pointer", function () {
				$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
			}), e.style.visibility = "visible", t.style.visibility = "visible"
		}
	};

	$(function () {
		mousecursor();
	});



}(jQuery));
