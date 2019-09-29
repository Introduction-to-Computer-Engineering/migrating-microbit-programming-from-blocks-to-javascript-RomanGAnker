// Activity 8: Coin Flipper
let FlippedCoin = false
let FlippedCoin2 = false
let Player1Score = 0
let Player2Score = 0
input.onButtonPressed(Button.B, function () {
    FlippedCoin = true
    FlippedCoin2 = true
    if (FlippedCoin == FlippedCoin2) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            # . . . #
            # . . . #
            `)
        basic.pause(100)
        Player1Score += 1
    } else {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            # . # . .
            # # # . .
            `)
        basic.pause(100)
        Player2Score += 1
    }
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . # .
        . . # # #
        . . . # .
        `)
})
input.onButtonPressed(Button.A, function () {
    FlippedCoin = Math.randomBoolean()
    FlippedCoin2 = Math.randomBoolean()
    Player2Score = 0
    Player1Score = 0
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . # .
        . . # # #
        . . . # .
        `)
})
