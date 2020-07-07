document.addEventListener('DOMContentLoaded', function () {
	// filters =================================
	let portfolio = document.querySelectorAll('.portfolio__col')
	let filters = document.querySelectorAll('.works__nav-link')
	filters.forEach(el => addEventListener('click', e => {
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
	)
	// modal =================================== ой хуйни наворотил(
	let modal = document.querySelectorAll('[data-modal]')
	let target = []
	modal.forEach((e) => {
			e.addEventListener('click', e => {
				e.preventDefault()
				target.push(e.target.getAttribute('data-modal'))
				console.log(target)
				if (target[target.length - 1] === '#modal_hire_me') {
					console.log('hi')
					resetDataModal(target)
					document.querySelector('#modal_hire_me').style.display = 'flex'
				}
				if (target[target.length - 1] === '#modal_resume') {
					resetDataModal(target)
					document.querySelector('#modal_resume').style.display = 'flex'
				}
			})
		}
	)
	let modalClose = document.querySelectorAll('.modal__close')
	modalClose.forEach(e => {
		e.addEventListener('click', e => {
			e.preventDefault()
			console.log(target)
			resetDataModal(target)
			target.splice(target.length - 1, 1)
		})
	})
	/**
	 *
	 * @param {Array}  selector
	 */
	function resetDataModal(selector) {
		console.log(selector, 'hop')
		document.querySelector(selector[selector.length - 1]).style.display = 'none'
	}
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

