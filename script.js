function init(e) {
	let search = document.getElementById("search")
	let form = document.querySelector('.search')
	search.focus()
	search.value = ''
	let links = Array.from(document.querySelectorAll(".link"))
	let results = document.querySelector(".search-results")

	search.addEventListener("keyup", e => {
		results.innerHTML = ""
		let needle = new RegExp(`${e.target.value}`)
		let matches = links.filter(link => needle.test(link.dataset.name))

		matches.forEach(match => {
			let matchItem = document.createElement("div")
			matchItem.appendChild(match)
			results.appendChild(matchItem)
		})
	})

	form.addEventListener("submit", e => {
		e.preventDefault()

		let url = document.querySelector('.search-results a').href
		console.log(url)
		window.location = url
	})
}

window.addEventListener("DOMContentLoaded", init)
