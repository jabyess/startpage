function init(e){

	let search = document.getElementById('search')
	search.focus()
	let links = Array.from(document.querySelectorAll('.link'))
	let results = document.querySelector('.search-results')

	search.addEventListener('keyup', (e) => {
		results.innerHTML = ''
		let needle = new RegExp(`${e.target.value}`)
		let matches = links.filter(link => needle.test(link.dataset.name))

		matches.forEach(match => {
			let matchItem = document.createElement('div')
			matchItem.appendChild(match)
			results.appendChild(matchItem)
		})
		
	})

}

window.addEventListener('DOMContentLoaded', init)