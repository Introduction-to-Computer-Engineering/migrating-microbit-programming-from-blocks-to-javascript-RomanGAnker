// Alternate version of Rock, Paper, Scissors called Bunny, Carrot, Gun//
let Hand = 0
let Winner = 0
input.onGesture(Gesture.Shake, function () {
    Hand = Math.randomRange(0, 10)
    if (Hand == 0) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (Hand == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            # # . # #
            `)
    } else {
        basic.showLeds(`
            # . . . .
            # # # # #
            . # # . .
            . # . . .
            . # . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    Winner += 1
    basic.showString("  Winner")
})
basic.forever(function () {
	
})
