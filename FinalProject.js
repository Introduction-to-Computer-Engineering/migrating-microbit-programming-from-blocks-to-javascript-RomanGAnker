// A game where the player must survive for 20 seconds to win. Press "A" and "B" to move, and press "A+B" to reset the game.
input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let sprite: game.LedSprite = null
game.setScore(6)
sprite = game.createSprite(3, 3)
basic.pause(2000)
basic.pause(2000)
let sprite_1 = game.createSprite(2, 2)
let Sprite_2 = game.createSprite(4, 6)
let sprite_3 = game.createSprite(2, 2)
basic.forever(function () {
    Sprite_2.move(1)
    basic.pause(500)
    Sprite_2.turn(Direction.Right, Math.randomRange(0, 260))
    Sprite_2.move(1)
})
basic.forever(function () {
    sprite_1.move(1)
    basic.pause(200)
    sprite_1.turn(Direction.Right, Math.randomRange(0, 360))
    basic.pause(300)
    sprite_1.move(1)
    basic.pause(200)
})
basic.forever(function () {
    sprite_3.turn(Direction.Left, Math.randomRange(0, 180))
    basic.pause(300)
    sprite_3.move(Math.randomRange(0, 6))
    basic.pause(300)
})
basic.forever(function () {
    if (sprite.isTouching(sprite_1)) {
        game.addScore(-1)
    }
    if (sprite.isTouching(Sprite_2)) {
        game.addScore(-1)
    }
    if (game.score() == 0) {
        game.gameOver()
        basic.clearScreen()
    }
    if (sprite.isTouching(sprite_3)) {
        game.addScore(-1)
    }
})
basic.forever(function () {
    if (input.runningTime() >= 20000) {
        if (game.score() >= 1) {
            for (let i = 0; i < 10; i++) {
                basic.showString(" Win! Press \"A+B\" to reset")
                basic.showLeds(`
                    # . . . #
                    . . # . .
                    . . . . .
                    # . . . #
                    # # # # #
                    `)
            }
        }
    }
})
