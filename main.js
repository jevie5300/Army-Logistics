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
		// html += '<div class="row justify-content-center">'
		for (let k = 0; k < 10; k++) {
			if ((Math.floor(Math.random() * 100)) > 90 && metalAmount != 0) {
				html += '<button onclick="addRawMetal(this)" type="button" class="btn btn-warning">Fe</button>'
				metalAmount -= 1
			} else {
				html += '<button type="button" class="btn btn-dark">X</button>'
			}
		}
		// html += '</div>'
	}
	document.getElementById('container-raw-materials').innerHTML = html
}

function generateSulphur() {
	let html = ''

	let metalSulphur = Math.floor(Math.random() * (10 - 5) + 5)

	for (let i = 0; i < 10; i++) {
		html += ''
		for (let k = 0; k < 10; k++) {
			if ((Math.floor(Math.random() * 100)) > 90 && metalSulphur != 0) {
				html += '<button onclick="addSulphur(this)" type="button" class="btn btn-warning">S</button>'
				metalSulphur -= 1
			} else {
				html += '<button type="button" class="btn btn-dark">X</button>'
			}
		}
		html += ''
	}
	document.getElementById('container-raw-materials').innerHTML = html
}

function generateCharcoal() {
	let html = ''

	let metalCharcoal = Math.floor(Math.random() * (10 - 5) + 5)

	for (let i = 0; i < 10; i++) {
		html += ''
		for (let k = 0; k < 10; k++) {
			if ((Math.floor(Math.random() * 100)) > 90 && metalCharcoal != 0) {
				html += '<button onclick="addCharcoal(this)" type="button" class="btn btn-warning">C</button>'
				metalCharcoal -= 1
			} else {
				html += '<button type="button" class="btn btn-dark">X</button>'
			}
		}
	}
	document.getElementById('container-raw-materials').innerHTML = html
}

/* function hideElement(element) {
	element.innerText = ''
} */