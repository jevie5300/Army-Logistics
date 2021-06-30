function handleButtonLogInOut() {
	console.log('Handling Login Button' + firebase.auth().currentUser)

	var logInOutButton = document.getElementById('button-log-in-out')

	if (firebase.auth().currentUser) {
		logInOutButton.innerText = 'Log Out'
		logInOutButton.setAttribute('onclick', 'logOut()')
		document.getElementById('player-email').innerText = firebase.auth().currentUser.email
	} else {
		logInOutButton.innerText = 'Log In'
		logInOutButton.setAttribute('onclick', 'logIn()')
	}
}

function getCurrentTime() {
	let date = new Date()
	return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

function generateRawMetal() {
	let html = ''

	let metalAmount = Math.floor(Math.random() * (10 - 5) + 5)

	for (let i = 0; i < 10; i++) {
		html += '<div class="row justify-content-center">'
		for (let k = 0; k < 10; k++) {
			if ((Math.floor(Math.random() * 100)) > 90 && metalAmount != 0) {
				html += '<div class="col-sm"><button onclick="addRawMetal(this)" type="button" class="btn btn-warning">R</button></div>'
				metalAmount -= 1
			} else {
				html += '<div class="col-sm"><button type="button" class="btn btn-dark">R</button></div>'
			}
		}
		html += '</div>'
	}
	document.getElementById('container-raw-materials').innerHTML = html
}

function generateSulphur() {
	let html = ''

	let metalSulphur = Math.floor(Math.random() * (10 - 5) + 5)

	for (let i = 0; i < 10; i++) {
		html += '<div class="row justify-content-center">'
		for (let k = 0; k < 10; k++) {
			if ((Math.floor(Math.random() * 100)) > 90 && metalSulphur != 0) {
				html += '<div class="col-sm"><button onclick="addSulphur(this)" type="button" class="btn btn-warning">R</button></div>'
				metalSulphur -= 1
			} else {
				html += '<div class="col-sm"><button type="button" class="btn btn-dark">R</button></div>'
			}
		}
		html += '</div>'
	}
	document.getElementById('container-raw-materials').innerHTML = html
}

function generateCharcoal() {
	let html = ''

	let metalCharcoal = Math.floor(Math.random() * (10 - 5) + 5)

	for (let i = 0; i < 10; i++) {
		html += '<div class="row justify-content-center">'
		for (let k = 0; k < 10; k++) {
			if ((Math.floor(Math.random() * 100)) > 90 && metalCharcoal != 0) {
				html += '<div class="col-sm"><button onclick="addCharcoal(this)" type="button" class="btn btn-warning">R</button></div>'
				metalCharcoal -= 1
			} else {
				html += '<div class="col-sm"><button type="button" class="btn btn-dark">R</button></div>'
			}
		}
		html += '</div>'
	}
	document.getElementById('container-raw-materials').innerHTML = html
}

function hideElement(element) {
	element.innerText = ''
}