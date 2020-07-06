document.addEventListener('DOMContentLoaded', function () {
	// filters =================================
	let portfolio = document.querySelectorAll('.portfolio__col')
	let filters = document.querySelector('.works__nav')
	filters.addEventListener('click', e => {
		e.preventDefault()
		let filter = e.target.getAttribute('data-filter')
		for (let key = 0; key < portfolio.length; key++) {
			if (portfolio.hasOwnProperty(key)) {
				if (filter === 'all') {
					portfolio[key].style.display = 'block'
					continue
				}
				if (portfolio[key].getAttribute('data-cat') !== filter) {
					portfolio[key].style.display = 'none'
				} else {
					portfolio[key].style.display = 'block'
				}
			}
		}
	})
	// modal ===================================
	let modal = document.querySelectorAll('[data-modal]')
	let target = null
	modal.forEach((e) => {
			e.addEventListener('click', e => {
				e.preventDefault()
				target = e.target.getAttribute('data-modal')
				if (target === '#modal_hire_me') {
					resetDataModal(target)
					document.querySelector('#modal_hire_me').style.display = 'flex'
				}
				if (target === '#modal_resume') {
					resetDataModal(target)
					document.querySelector('#modal_resume').style.display = 'flex'
				}
				// if (e.target.getAttribute('data-modal') === '#modal_project_1') {
				// 	resetDataModal()
				// 	document.querySelector('#modal_project_1').style.display = 'flex'
				// }
			})
		}
	)
	let modalClose = document.querySelectorAll('.modal__close')
	modalClose.forEach(e => {
		e.addEventListener('click', e => {
			e.preventDefault()
			resetDataModal(target)
		})
	})
	// =========================================
	// для каждой работы передавать данные и отображать в диалоговом окне
	// let works = document.querySelectorAll('.work')
	// works.forEach(e=>{
	// 	e.addEventListener('click',e=>{
	// 		e.preventDefault()
	// 		console.log(e.target)
	// 	})
	// })
}, false)
/**
 *
 * @param {string}  selector
 */
function resetDataModal(selector) {
	document.querySelector(selector).style.display = 'none'
}
