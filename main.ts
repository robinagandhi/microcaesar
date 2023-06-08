function modulo () {
    if (index < 0) {
        index = index + 26
    } else {
        if (index > 25) {
            index = index - 26
        }
    }
    if (key < 1) {
        key = key + 25
    } else {
        if (key > 25) {
            key = key - 25
        }
    }
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    key += -1
    modulo()
    basic.showString("" + (key))
})
input.onButtonPressed(Button.A, function () {
    index += -1
    modulo()
})
input.onGesture(Gesture.TiltLeft, function () {
    index = index - key
    modulo()
})
input.onButtonPressed(Button.B, function () {
    index += 1
    modulo()
})
input.onGesture(Gesture.TiltRight, function () {
    index = index + key
    modulo()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    key += 1
    modulo()
    basic.showString("" + (key))
})
let key = 0
let index = 0
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
index = 0
key = 3
basic.forever(function () {
    basic.showString(alphabet.charAt(index))
})
