var swiper = new Swiper(".my-swiper", {
	autoplay: {
		delay: 3000,
	},
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
		clickable: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	loop: true,
	spaceBetween: 30,
});
