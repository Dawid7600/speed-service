function animateOnIntersection(target, animationFunction, threshold) {
	const animationStarted = new WeakSet();

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (
					entry.isIntersecting &&
					entry.intersectionRatio >= threshold &&
					!animationStarted.has(entry.target)
				) {
					animationFunction(entry.target); // Przekazujemy konkretny element do funkcji animacji
					animationStarted.add(entry.target);
				}
			});
		},
		{ threshold }
	);

	target.forEach((element) => {
		observer.observe(element);
	});
}

const animations = [
	{
		target: ".hero__heading",
		animation: (target) => {
			anime({
				targets: [target, ".white-line", ".hero__desc"],
				translateX: ["-1200", "0"],
				opacity: [0, 1],
				duration: 1500,
				delay: 500,
				delay: anime.stagger(300, { easing: "easeOutQuad" }),
			});
		},
	},
	{
		target: ".features-primary__container .container",
		animation: (target) => {
			anime({
				targets: target,
				translateX: ["-1400", "0"],
				opacity: [0, 1],
				duration: 750,
				delay: 500,
				easing: "easeInOutQuad",
			});
		},
	},
	{
		target: ".features-primary__image",
		animation: (target) => {
			anime({
				targets: target,
				translateX: ["1200", "0"],
				opacity: [0, 1],
				duration: 2000,
				delay: 250,
				scale: ["0.25", "1"],
			});
		},
	},
	{
		target: ".features-secondary__container .container:nth-child(odd)",
		animation: (target) => {
			anime({
				targets: target,
				translateX: ["-300", "0"],
				opacity: [0, 1],
				duration: 750,
				delay: 250,
				delay: function (el, i, l) {
					return i * 300;
				},
				easing: "easeInOutQuad",
			});
		},
	},
	{
		target: ".features-secondary__container .container:nth-child(even)",
		animation: (target) => {
			anime({
				targets: target,
				translateX: ["300", "0"],
				opacity: [0, 1],
				duration: 1000,
				delay: 250,
				delay: function (el, i, l) {
					return i * 300;
				},
				easing: "easeInOutQuad",
			});
		},
	},
	{
		target: ".services__list .services__item:nth-child(odd)",
		animation: (target) => {
			anime({
				targets: target,
				translateX: ["-1200", "0"],
				opacity: [0, 1],
				duration: 1000,
				delay: 250,
				delay: function (el, i, l) {
					return i * 300;
				},
				easing: "easeInOutQuad",
			});
		},
	},
	{
		target: ".services__list .services__item:nth-child(even)",
		animation: (target) => {
			anime({
				targets: target,
				translateX: ["1200", "0"],
				opacity: [0, 1],
				duration: 750,
				delay: 250,
				delay: function (el, i, l) {
					return i * 300;
				},
				easing: "easeInOutQuad",
			});
		},
	},
];

animations.forEach(({ target, animation }) => {
	const targetElements = document.querySelectorAll(target);
	const targetArray = Array.from(targetElements);

	targetArray.forEach((element) => {
		element.style.opacity = 0;
		animateOnIntersection(targetArray, animation, 0.25);
	});
});
