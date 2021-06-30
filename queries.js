function savePlayerData() {
	let user = firebase.auth().currentUser

	let userData = [user.email, rawMetal]

	database.collection('users').doc(user.email).set({
		'username': user.email,
		'rawMetal': rawMetal,
		'metal': metal,
		'sulphur': sulphur,
		'charcoal': charcoal
	});
}

function loadPlayerData() {
	let user = firebase.auth().currentUser

	database.collection('users').doc(user.email).get().then((doc) => {
		if (doc.exists) {
			let labelRawMetal = document.getElementById('label-raw-metal-farm')
			let labelMetal = document.getElementById('label-metal-farm')
			let labelSulphur = document.getElementById('label-sulphur')
			let labelCharcoal = document.getElementById('label-charcoal')

			if (labelRawMetal)
				labelRawMetal.innerText = doc.data()['rawMetal']

			if (labelMetal)
				labelMetal.innerText = doc.data()['metal']

			if (labelSulphur)
				labelSulphur.innerText = doc.data()['sulphur']

			if (labelCharcoal)
				labelCharcoal.innerText = doc.data()['charcoal']

			doc.data()['metal'] === 'NaN' ? metal = 0 : metal = doc.data()['metal']
			doc.data()['metal'] === 'Nan' ? rawMetal = 0 : rawMetal = doc.data()['rawMetal']
			doc.data()['sulphur'] === 'Nan' ? sulphur = 0 : sulphur = doc.data()['sulphur']
			doc.data()['charcoal'] === 'Nan' ? charcoal = 0 : charcoal = doc.data()['charcoal']
		}
	})
}