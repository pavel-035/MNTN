$(window).on('scroll', function() {
	$(".addClassOnScroll").each(function() {
		var height = $(window).height();
		var scrollTop = $(window).scrollTop();
		var obj = $(this);
		var pos = obj.position();
		if (height + scrollTop - 200 > pos.top) {
	  		$(this).addClass('animated');
		}
		else {
	  		$(this).removeClass('animated');
		}
	})
});

function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
	var mql = window.matchMedia(mediaQuery);
	mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
	layoutChangedCallback(mql.matches);
}

installMediaQueryWatcher("(min-width: 600px)", function(matches) {
	if (matches) {
		gsap.to(".header__human", {
			scrollTrigger: {
				trigger: ".header",
				scrub: 1,
				start: "top top",
				end: "bottom center",
				// markers: true
			},
			y: () => {
				return -100 * 100 / 1920 + 'vw';
			}
		});
		gsap.to(".header__mountainBg", {
			scrollTrigger: {
				trigger: ".header",
				scrub: 1,
				start: "start 80%",
				end: "bottom"
			},
			y: () => {
				return -500 * 100 / 1920 + 'vw';
			}
		});
		gsap.to(".header__middleBlock", {
			scrollTrigger: {
				trigger: ".header",
				scrub: 1,
				start: "start 80%",
				end: "bottom"
			},
			y: () => {
				return 600 * 100 / 1920 + 'vw';
			}
		});
		gsap.to(".header", {
			scrollTrigger: {
				trigger: ".header",
				scrub: 1,
				start: "start 80%",
				end: "bottom"
			},
			backgroundPosition: '50% 100%'
		});

		gsap.to(".header", {
			scrollTrigger: {
				trigger: ".header",
				scrub: 1,
				start: "start 80%",
				end: "bottom"
				// markers: true,
			},
			backgroundPosition: '50% 100%'
		});

		gsap.to('.first .card__discription', {
			scrollTrigger: {
				trigger: '.section_triger.one',
				start: 'top bottom',
				end: 'bottom 10%',
				scrub: 1,
				// markers: true
			},
			y: 0
		});
		gsap.to('.first .card__image', {
			scrollTrigger: {
				trigger: '.section_triger.one',
				start: 'top bottom',
				end: 'bottom 10%',
				scrub: 1,
				// markers: true
			},
			y: 0
		});
		gsap.to('.second .card__discription', {
			scrollTrigger: {
				trigger: '.section_triger.two',
				start: 'top bottom',
				end: 'bottom 10%',
				scrub: 1,
				// markers: true
			},
			y: 0
		});
		gsap.to('.second .card__image', {
			scrollTrigger: {
				trigger: '.section_triger.two',
				start: 'top bottom',
				end: 'bottom 10%',
				scrub: 1,
				// markers: true
			},
			y: 0,
		});
		gsap.to('.third .card__discription', {
			scrollTrigger: {
				trigger: '.section_triger.three',
				start: 'top bottom',
				end: 'bottom 10%',
				scrub: 1,
				// markers: true
			},
			y: 0
		});
		gsap.to('.third .card__image', {
			scrollTrigger: {
				trigger: '.section_triger.three',
				start: 'top bottom',
				end: 'bottom 10%',
				scrub: 1,
				// markers: true
			},
			y: 0
		});
		gsap.to('.header__navItem.start', {
			scrollTrigger: {
				trigger: '#section_start',
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1,
				// markers: true
			},
			borderRightWidth: '0.15625vw',
			borderRightColor: '#fff',
			borderRightStyle: 'solid'
		});
		gsap.to('.header__navItem.one', {
			scrollTrigger: {
				trigger: '#section_one',
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1,
				// markers: true
			},
			borderRightWidth: '0.15625vw',
			borderRightColor: '#fff',
			borderRightStyle: 'solid'
		});
		gsap.to('.header__navItem.two', {
			scrollTrigger: {
				trigger: '#section_two',
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1,
				// markers: true
			},
			borderRightWidth: '0.15625vw',
			borderRightColor: '#fff',
			borderRightStyle: 'solid'
		});
		gsap.to('.header__navItem.three', {
			scrollTrigger: {
				trigger: '#section_three',
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1,
				// markers: true
			},
			borderRightWidth: '0.15625vw',
			borderRightColor: '#fff',
			borderRightStyle: 'solid'
		});
	} else {
		gsap.to(".header__human", {
			scrollTrigger: {
				trigger: ".header",
				scrub: 1,
				start: "top top",
				end: "bottom center",
				// markers: true
			},
			y: () => {
				return -100 * 100 / 600 + 'vw';
			}
		});
		gsap.to(".header__mountainBg", {
			scrollTrigger: {
				trigger: ".header",
				scrub: 1,
				start: "start 80%",
				end: "bottom"
			},
			y: () => {
				return -600 * 100 / 600 + 'vw';
			}
		});
		gsap.to(".header__middleBlock", {
			scrollTrigger: {
				trigger: ".header",
				scrub: 1,
				start: "start top",
				end: "bottom"
			},
			y: () => {
				return 600 * 100 / 600 + 'vw';
			}
		});
		gsap.to(".header", {
			scrollTrigger: {
				trigger: ".header",
				scrub: 1,
				start: "start 80%",
				end: "bottom"
			},
			backgroundPosition: '50% 100%'
		});

		gsap.to(".header", {
			scrollTrigger: {
				trigger: ".header",
				scrub: 1,
				start: "start 80%",
				end: "bottom"
				// markers: true,
			},
			backgroundPosition: '50% 100%'
		});

		gsap.to('.header__navItem.start', {
			scrollTrigger: {
				trigger: '#section_start',
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1,
				// markers: true
			},
			borderRightWidth: '0.5vw',
			borderRightColor: '#fff',
			borderRightStyle: 'solid'
		});
		gsap.to('.header__navItem.one', {
			scrollTrigger: {
				trigger: '#section_one',
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1,
				// markers: true
			},
			borderRightWidth: '0.5vw',
			borderRightColor: '#fff',
			borderRightStyle: 'solid'
		});
		gsap.to('.header__navItem.two', {
			scrollTrigger: {
				trigger: '#section_two',
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1,
				// markers: true
			},
			borderRightWidth: '0.5vw',
			borderRightColor: '#fff',
			borderRightStyle: 'solid'
		});
		gsap.to('.header__navItem.three', {
			scrollTrigger: {
				trigger: '#section_three',
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1,
				// markers: true
			},
			borderRightWidth: '0.5vw',
			borderRightColor: '#fff',
			borderRightStyle: 'solid'
		});
	}
});


$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 1000);
});
