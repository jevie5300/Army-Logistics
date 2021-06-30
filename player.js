var playerName = 'Temp'
var rawMetal = 0
var metal = 0
var sulphur = 0
var charcoal = 0

function addRawMetal(element) {
  element.setAttribute('class', 'btn btn-dark')

  rawMetal += 1

  document.getElementById('label-raw-metal-farm').innerText = rawMetal

  savePlayerData()
}

function addSulphur(element) {
  element.setAttribute('class', 'btn btn-dark')

  sulphur += 1

  document.getElementById('label-sulphur').innerText = sulphur

  savePlayerData()
}

function addCharcoal(element) {
  element.setAttribute('class', 'btn btn-dark')

  charcoal += 1

  document.getElementById('label-charcoal').innerText = charcoal

  savePlayerData()
}

function refineMetal() {
  if (rawMetal >= 5) {
    rawMetal -= 5
    metal++
  } else {
    document.getElementById('label-refinary-message').innerText = 'Not enough raw metal'
    setTimeout(function () { document.getElementById('label-refinary-message').innerText = '' }, 3000)
  }

  savePlayerData()
  loadPlayerData()
}