input.onButtonPressed(Button.A, function () {
    control.reset()
})
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    # . . . #
    . # # # .
    `)
basic.pause(1000)
basic.showString("" + (pins.analogReadPin(AnalogPin.P0)))
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 500) {
        basic.showIcon(IconNames.Target)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
