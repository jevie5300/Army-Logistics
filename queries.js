function savePlayerData() {
	let user = firebase.auth().currentUser

	let userData = [user.email, rawMetal]
	
	database.collection('users').doc(user.email).set({
		'username': user.email,
		'rawMetal': rawMetal,
		'metal': metal
	  });
}

function loadPlayerData() {
	let user = firebase.auth().currentUser

	database.collection('users').doc(user.email).get().then((doc) => {
		if(doc.exists) {
			let labelRawMetal = document.getElementById('label-raw-metal-farm')
			let labelMetal = document.getElementById('label-metal-farm')

			if(labelRawMetal)
			labelRawMetal.innerText = doc.data()['rawMetal']

			if(labelMetal)
			labelMetal.innerText = doc.data()['metal']
			
			metal = doc.data()['metal']
			rawMetal = doc.data()['rawMetal']
		}
	})
}