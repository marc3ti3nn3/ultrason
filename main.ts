let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P14,
    DigitalPin.P15,
    PingUnit.MicroSeconds
    )
    basic.showString("" + (distance))
    basic.pause(1000)
})
