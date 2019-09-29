// Activity 11: Array, led generator
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= list.length - 1; index++) {
        for (let j = 0; j <= list[index] - 1; j++) {
            led.plot(Math.randomRange(0, 5), Math.randomRange(0, 5))
        }
        basic.pause(1000)
        basic.clearScreen()
    }
})
let list: number[] = []
list = [5, 2, 1, 3, 4]
