let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P14,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
    basic.showString("" + Math.round(distance / 58 * 100) * 100 + "cm")
    basic.pause(1000)
})
