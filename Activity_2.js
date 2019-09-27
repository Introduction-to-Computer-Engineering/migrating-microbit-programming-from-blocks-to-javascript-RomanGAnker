// Activity 2: Button Activated Jumping Jacks
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        # # # # #
        # . # . #
        . . # . .
        . # . # .
        `)
})
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        # . . . #
        `)
})
