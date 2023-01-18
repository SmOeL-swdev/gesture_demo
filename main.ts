grove.onGesture(GroveGesture.Down, function () {
    basic.showArrow(ArrowNames.South)
})
grove.onGesture(GroveGesture.Wave, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
    }
    basic.clearScreen()
})
grove.onGesture(GroveGesture.Right, function () {
    basic.showArrow(ArrowNames.East)
})
grove.onGesture(GroveGesture.Clockwise, function () {
    teller += 1
    _4digit.show(teller)
})
grove.onGesture(GroveGesture.Up, function () {
    basic.showArrow(ArrowNames.North)
})
grove.onGesture(GroveGesture.Left, function () {
    basic.showArrow(ArrowNames.West)
})
grove.onGesture(GroveGesture.Anticlockwise, function () {
    teller += -1
    _4digit.show(teller)
})
let teller = 0
let _4digit: grove.TM1637 = null
_4digit = grove.createDisplay(DigitalPin.P2, DigitalPin.P16)
_4digit.clear()
grove.initGesture()
teller = 0
