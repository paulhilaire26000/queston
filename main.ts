input.onButtonPressed(Button.A, function () {
    reponse = 1
})
input.onButtonPressed(Button.B, function () {
    reponse = 2
})
let reponse = 0
reponse = 0
basic.showString("quelle est la meilleur application a netflix b youtube")
basic.forever(function () {
    if (reponse == 1) {
        basic.clearScreen()
        basic.showString("faux")
        basic.clearScreen()
        reponse = 0
    }
    if (reponse == 2) {
        basic.clearScreen()
        basic.showString("vrai")
        basic.clearScreen()
        reponse = 0
    }
})
