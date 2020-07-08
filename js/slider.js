document.addEventListener('DOMContentLoaded', function () {
	// ======================== slider
	let slideIndex = 1
	let slides = document.querySelectorAll(".modal-work")
	showSlides(slideIndex)
	let prev = document.querySelectorAll('.prev')
	let next = document.querySelectorAll('.next')
	console.log(prev, next)
	prev.forEach(el => el.addEventListener('click', e => {
		showSlides(slideIndex -= 1)
	}))
	next.forEach(el => el.addEventListener('click', e => {
		showSlides(slideIndex += 1)
	}))
	next.addEventListener('click', () => {
		showSlides(slideIndex += 1)
	})
	/* Основная функция слайдера */
	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1
		}
		if (n < 1) {
			slideIndex = slides.length
		}
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = "none"
		}
		slides[slideIndex - 1].style.display = "flex"
	}
}, false)
