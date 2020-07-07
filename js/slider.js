document.addEventListener('DOMContentLoaded', function () {
	let slideIndex = 1
	let slides = document.querySelectorAll(".modal-work")
	showSlides(slideIndex)
	let prev = document.querySelector('.prev')
	let next = document.querySelector('.next')
	console.log(prev, next)
	prev.onclick = () => {
		showSlides(slideIndex -= 1)
	}
	next.onclick = () => {
		showSlides(slideIndex += 1)
	}
	/* Основная функция слайдера */
	function showSlides(n) {
		// todo доделать слайдер
		if (n < 1) {
			slides.forEach((e, i, arr) => {
				console.log(arr.length)
				if (i < arr.length-1)
					e.style.display = 'none'
				else{
					e.style.display = 'flex'
				}
			})
		}
	}
}, false)
