document.addEventListener('DOMContentLoaded', function () {
		// ======================== slider
	let slideIndex = 1
	let slides = document.querySelectorAll(".modal-work")
	showSlides(slideIndex)
	let prev = document.querySelectorAll('.prev')
	let next = document.querySelectorAll('.next')
	prev.forEach(el => el.addEventListener('click', e => {
		showSlides(slideIndex -= 1)
	}))
	next.forEach(el => el.addEventListener('click', e => {
		showSlides(slideIndex += 1)
	}))
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

	
function disableOverflow(){
	document.body.style.overflow='hidden'
}
function enableOverflow(){
	document.body.style.overflow='auto'
}


	// let project = class Project {
	// 	/**
	// 	 *
	// 	 * @param {Array<string>}  about
	// 	 * @param {string}img
	// 	 */
	// 	//вот это вот залупа и зачем я так упоролся не знаю, всё равно бд подключать надо...
	// 	// constructor(about, img) {
	// 	// 	this.category = about[0].trim()
	// 	// 	this.title = about[1].trim()
	// 	// 	this.date = about[2].trim()
	// 	// 	this.img = img
	// 	// }
	// }
	// ============================== slider
	// ============================== burger & navigation in header
	(function burgerNavigation(){
		let burger = document.querySelector('.burger')
		burger.addEventListener('click', e => {
			let nav = (document.querySelector('.nav__link--block'))
			let footer = document.querySelector('.footer')
			if (window.getComputedStyle(nav).display === 'none') {
				nav.style.display = 'flex'
				nav.style.position = 'fixed'
				burger.classList.add('forBurger')
				footer.classList.add('forFooter')
				burger.style.removeProperty('position');
				footer.style.removeProperty('position');
				console.log(document.body.style)
				disableOverflow()
			} else {
				nav.style.display = 'none'
				burger.style.position = 'static'
				footer.style.position = 'static'
				enableOverflow()
			}
		})
	})()


	// filters =================================
	let portfolio = document.querySelectorAll('.portfolio__col')
	let filters = document.querySelectorAll('.works__nav-link')
	filters.forEach(el => el.addEventListener('click', e => {
			e.preventDefault()
			let filter = e.target.getAttribute('data-filter')
			for (let key = 0; key < portfolio.length; key++) {
				if (portfolio.hasOwnProperty(key)) {
					if (filter === 'all') {
						portfolio[key].style.display = 'flex'
						continue
					}
					if (portfolio[key].getAttribute('data-cat') !== filter) {
						portfolio[key].style.display = 'none'
					} else {
						portfolio[key].style.display = 'flex'
					}
				}
			}
		})
	)
	// modal =================================== ой хуйни наворотил(
	let modal = document.querySelectorAll('[data-modal]')
	let target = []
	modal.forEach((e) => {
			e.addEventListener('click', e => {
				console.log('open')
				disableOverflow()
				e.preventDefault()
				target.push(e.target.getAttribute('data-modal'))
				if (target[target.length - 1] === '#modal_hire_me') {
					resetDataModal(target)
					document.querySelector('#modal_hire_me').style.display = 'flex'
					document.querySelector('#modal_hire_me').style.position = 'fixed'// for lazy-loading
				}
				if (target[target.length - 1] === '#modal_resume') {
					resetDataModal(target)
					document.querySelector('#modal_resume').style.display = 'flex'
					document.querySelector('#modal_resume').style.position = 'fixed'// for lazy-loading
				}
			})
		}
	)
	let modalClose = document.querySelectorAll('.modal__close')
	modalClose.forEach(e => {
		e.addEventListener('click', e => {
			e.preventDefault()
			resetDataModal(target)
			target.splice(target.length - 1, 1)
			enableOverflow()
		})
	})
	/**
	 *
	 * @param {Array}  selector
	 */
	function resetDataModal(selector) {
		// crutch!
		if(selector.length===0){
			selector.push('#modal_project')
		}
		document.querySelector(selector[selector.length - 1]).style.display = 'none'
	}

	// function findAncestor(el, cls) {???????????
	// 	while ((el = el.parentElement) && !el.classList.contains(cls))
	// 		return el
	// }
	// work modal view=========================================
	// для каждой работы передавать данные и отображать в диалоговом окне
	let works = document.querySelectorAll('.work')
	works.forEach(e => {
		e.addEventListener('click', e => {
			console.log('hi')
			disableOverflow()
			let modal_project = document.querySelector('#modal_project').style.display='flex'
			document.querySelector('#modal_project').style.position = 'fixed'// for lazy-loading
			// crutch!
			// new project(e.currentTarget.textContent.split('\n').filter(e => e.trim().length > 0),
			// 	e.currentTarget.getElementsByTagName('img')[0].currentSrc)
		})
	})
}, false)

