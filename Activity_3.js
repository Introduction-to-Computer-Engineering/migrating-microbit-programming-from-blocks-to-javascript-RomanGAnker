// Small game which uses a score and RNG system//
let Player_B = 0
let Player_A = 0
let Player_A_score = 0
input.onButtonPressed(Button.B, function () {
    if (Math.randomRange(0, 10) < 5) {
        basic.showString("Win")
        Player_B += 1
    } else {
        basic.showString("Lose")
    }
})
input.onButtonPressed(Button.A, function () {
    if (Math.randomRange(0, 10) < 5) {
        basic.showString("Win")
        Player_A += 1
    } else {
        basic.showString("Lose")
        basic.showString("" + Player_A)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("P-A Score:")
    basic.showString("" + Player_A)
    basic.showString(" P-B Score")
    basic.showString("" + Player_B)
})
basic.forever(function () {
    if (Player_A == 2) {
        basic.showString("P-A Wins!")
        Player_A_score = 0
        Player_B = 0
    } else if (Player_B == 2) {
        basic.showString("P-B Wins!")
        Player_B = 0
        Player_A_score = 0
    } else {

    }
})
