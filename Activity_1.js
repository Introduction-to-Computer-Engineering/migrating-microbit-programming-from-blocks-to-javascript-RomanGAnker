// Activity 1: Jumping Jacks
basic.forever(function () {
    basic.showIcon(IconNames.StickFigure)
    basic.pause(5000)
    basic.showLeds(`
        . . # . .
        # # # # #
        # . # . #
        . # . # .
        . # . # .
        `)
    basic.pause(5000)
})
