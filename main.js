const msg = new SpeechSynthesisUtterance()
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type="range"], [name="tet"]')
const speakButton = document.querySelector('#speak')
const stopButton = document.querySelector('#stop')