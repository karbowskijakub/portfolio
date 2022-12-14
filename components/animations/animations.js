const springTransition = {
	type: 'spring',
	duration: 0.8,
}

const slideLeft = {
	initial: { x: -50, opacity: 0 },
	animate: ({ delay, duration }) => ({
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			duration: duration || 0.9,
			delay: delay || 0,
		},
	}),
}
const scaleY = {
	initial: {
		opacity: 0,
		scaleY: 0.8,
	},
	animate: (delay = 0.3) => ({
		opacity: 1,
		scaleY: 1,
		transition: { delay, ...springTransition },
	}),
}

const slideRight = {
	initial: { x: 50, opacity: 0 },
	animate: ({ delay, duration }) => ({
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			delay: delay || 0,
			duration: duration || 0.9,
		},
	}),
}

const scaleUpDown = {
	initial: { opacity: 0 },
	animate: (delay = 0) => ({
		opacity: 1,
		scale: [1, 1.3, 1],
		transition: {
			delay,
			type: 'spring',
			duration: 0.4,
		},
	}),
}
const slideTop = {
	initial: { y: -30, opacity: 0 },
	animate: (delay = 0) => ({
		y: 0,
		opacity: 1,
		transition: {
			type: 'tween',
			duration: 0.4,
			delay,
		},
	}),
}

const slideBottom = {
	initial: { y: 50, opacity: 0 },
	animate: (delay = 0) => ({
		y: 0,
		opacity: 1,
		transition: { ...springTransition, delay },
	}),
}

export { slideLeft, slideRight, scaleY, scaleUpDown, slideTop, slideBottom }
