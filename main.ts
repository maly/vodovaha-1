let naklon = 0
basic.forever(function () {
    naklon = input.acceleration(Dimension.X)
    basic.clearScreen()
    if (naklon > 100) {
        led.plot(0, 2)
    } else if (naklon > 10) {
        led.plot(1, 2)
    } else if (naklon == 0) {
        led.plot(2, 2)
    } else if (naklon < -100) {
        led.plot(4, 2)
    } else {
        led.plot(3, 2)
    }
})
