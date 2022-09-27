let numero = randint(0, 5)
basic.pause(2000)
basic.showNumber(numero)
for (let contar = 0; contar <= numero; contar++) {
    basic.showNumber(contar)
    basic.pause(200)
    for (let index = 0; index < contar; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(100)
    }
}
basic.showString("A buscar!")
music.playMelody("G D G A E F G F ", 120)
basic.forever(function () {
	
})
