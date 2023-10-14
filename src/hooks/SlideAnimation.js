export const SlideAnimation = (className, width, margin, slideShown, PrevBtn, NextBtn) => {
	const slideContainer = document.querySelector(`.${className}`);
	const slides = slideContainer.querySelectorAll('.slides');
	const slideCount = slides.length;
	const slideWidth = parseInt(`${width}`);
	const slideMargin = parseInt(`${margin}`);
	const slidesShown = parseInt(`${slideShown}`)
	let currentIndex = 0;
	const prevBtn = document.querySelector(`.${PrevBtn}`);
	const nextBtn = document.querySelector(`.${NextBtn}`);

	const newWidth = () => {
		let newWidth = slideCount * (slideWidth + slideMargin) - slideMargin;
		slideContainer.style.width = `${newWidth}px`;
		console.log(newWidth)
	}

	const moveSlide = (idx) => {
		let movingValue = -idx * (slideWidth + slideMargin);
		slideContainer.style.left = `${movingValue}px`;
		currentIndex = idx;
	}

	prevBtn.addEventListener('click', () => {
		if(currentIndex > 0) {
			moveSlide(currentIndex - 1);
		} else {
			moveSlide(slideCount - slidesShown);
		}
	});

	nextBtn.addEventListener('click', () => {
		if(currentIndex < slideCount - slidesShown) {
			moveSlide(currentIndex + 1)
		} else {
			moveSlide(0)
		}
	});

	newWidth();
}