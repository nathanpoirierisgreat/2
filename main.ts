music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(196, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(330, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(330, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Half))
music.playTone(330, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Half))
music.playTone(523, music.beat(BeatFraction.Whole))
basic.showString("HELLO   IT IS GOOD TO SEE YOU!",75)
basic.showLeds(`
    . # . # .
    . # . # .
    . . # . .
    # . . . #
    # # # # #
    `)
basic.pause(100)
basic.showLeds(`
    . # . . .
    . # . # #
    . . # . .
    # . . . #
    # # # # #
    `)
basic.pause(100)
basic.showLeds(`
    . # . # .
    . # . # .
    . . # . .
    # . . . #
    # # # # #
    `)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
	
})
