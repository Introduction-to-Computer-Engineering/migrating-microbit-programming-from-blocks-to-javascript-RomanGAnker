// A traveling LED light that moves around the Microbit//
input.onButtonPressed(Button.A, function () {
    for (let i = 0; i < 1; i++) {
        sprite.move(4)
        sprite.turn(Direction.Right, 90)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
let index = 0
basic.forever(function () {
    for (let yindex = 0; yindex <= 4; yindex++) {
        for (let xindex = 0; xindex <= 4; xindex++) {
            led.plot(xindex, yindex)
            basic.pause(100)
            led.unplot(xindex, yindex)
            basic.pause(100)
        }
    }
})
