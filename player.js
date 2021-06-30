var playerName = 'Temp'
var rawMetal = 0
var metal = 0

function addRawMetal(element) {
  element.setAttribute('class', 'btn btn-dark')

  rawMetal += 1

  document.getElementById('label-raw-metal-farm').innerText = rawMetal

  savePlayerData()
}

function refineMetal() {
	if (rawMetal >= 5)
	{
		rawMetal -= 5
		metal ++
	}

  savePlayerData()
  loadPlayerData()
}