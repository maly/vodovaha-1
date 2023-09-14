naklon = 0

def on_forever():
    global naklon
    naklon = input.acceleration(Dimension.X)
    basic.clear_screen()
    if naklon > 100:
        led.plot(0, 2)
    elif naklon > 10:
        led.plot(1, 2)
    elif naklon == 0:
        led.plot(2, 2)
    elif naklon < -100:
        led.plot(4, 2)
    else:
        led.plot(3, 2)
basic.forever(on_forever)
