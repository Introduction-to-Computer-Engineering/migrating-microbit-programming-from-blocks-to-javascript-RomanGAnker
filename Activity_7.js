// Activity 7
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        for (let i = 0; i < 4; i++) {
            led.plot(Math.randomRange(0, 4), Math.randomRange(0, 4))
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (Math.randomRange(0, 4) == 4) {
        basic.showLeds(`
            # . . . #
            . . # . .
            . . # . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . . # . .
            . . # . .
            . # # # .
            # . . . #
            `)
    }
})
