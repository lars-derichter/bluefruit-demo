let broederjacob = 0
function play_twinkle () {
    music.playMelody("C C G G A A G - ", 100)
    music.playMelody("F F E E D D C - ", 100)
    music.playMelody("G G F F E E D - ", 100)
    music.playMelody("G G F F E E D - ", 100)
    music.playMelody("C C G G A A G - ", 100)
    music.playMelody("F F E E D D C - ", 100)
}
function play_broederjacob () {
    music.playMelody("C D E C C D E C ", 100)
    music.playMelody("- E F G - E F G ", 100)
    music.playMelody("- G A G F E - C ", 100)
    music.playMelody("- G A G F E - C ", 100)
    music.playMelody("G G C C G G - - ", 100)
    music.playMelody("G G C C G G - - ", 100)
}
input.onLightConditionChanged(LightCondition.Dark, function () {
    light.setBrightness(60)
    light.setAll(0xff8000)
})
input.onSwitchMoved(SwitchDirection.Right, function () {
    broederjacob = 0
})
input.onLightConditionChanged(LightCondition.Bright, function () {
    light.setBrightness(127)
    light.setAll(0x000000)
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.showAnimation(light.rainbowAnimation, 2000)
    if (broederjacob) {
        play_broederjacob()
    } else {
        play_twinkle()
    }
    light.showAnimation(light.theaterChaseAnimation, 2000)
    light.setAll(0xff0080)
})
input.onGesture(Gesture.Shake, function () {
    music.siren.loop()
    light.showAnimation(light.sparkleAnimation, 5000)
    light.setAll(0x7f00ff)
    music.stopAllSounds()
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff0000)
    pause(2000)
    music.baDing.play()
    light.setAll(0x00ff00)
    pause(2000)
    music.pewPew.play()
    light.setAll(0xff8000)
    pause(1000)
    music.siren.play()
    light.setAll(0xff0000)
})
input.onSwitchMoved(SwitchDirection.Left, function () {
    broederjacob = 1
})
