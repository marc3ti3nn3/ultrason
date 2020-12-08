let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showString("" + Math.round(distance / 58 * 100 / 100) + "cm")
    basic.pause(1000)
})
