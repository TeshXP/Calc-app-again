// SCOREBOARD NUMBERS
let homeNumber = document.getElementById("homeScore")
let guestNumber = document.getElementById("guestScore")
let homeScore = 0
let guestScore = 0
// HOME BUTTONS
let homeBtn1 = document.getElementById("home-btn1")
let homeBtn2 = document.getElementById("home-btn2")
let homeBtn3 = document.getElementById("home-btn3")
// GUEST BUTTONS
let guestBtn1 = document.getElementById("home-btn1")
let guestBtn2 = document.getElementById("home-btn2")
let guestBtn3 = document.getElementById("home-btn3")
// HOME CALCULATIONS
function homeAdd1() {
    homeScore += 1
    homeNumber.textContent = homeScore
}
function homeAdd2() {
    homeScore += 2
    homeNumber.textContent = homeScore
}
function homeAdd3() {
    homeScore += 3
    homeNumber.textContent = homeScore
}
// GUEST CALCULATIONS
function guestAdd1() {
    guestScore += 1
    guestNumber.textContent = guestScore
}
function guestAdd2() {
    guestScore += 2
    guestNumber.textContent = guestScore
}
function guestAdd3() {
    guestScore += 3
    guestNumber.textContent = guestScore
}