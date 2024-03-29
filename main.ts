input.onButtonPressed(Button.A, function () {
    if (reponse == 0) {
        reponse = 1
    }
    if (reponse == 3) {
        reponse = 4
    }
    if (reponse == 6) {
        reponse = 7
    }
})
input.onButtonPressed(Button.B, function () {
    if (reponse == 0) {
        reponse = 2
    }
    if (reponse == 3) {
        reponse = 5
    }
    if (reponse == 3) {
        reponse = 8
    }
})
let reponse = 0
reponse = 0
basic.showString("quelle est la meilleur application a netflix b youtube")
let score = 0
basic.forever(function () {
    if (reponse == 1) {
        basic.clearScreen()
        basic.showString("faux")
        basic.clearScreen()
        score = score - 1
        reponse = 3
        basic.showString("quelle est le meilleur livre a miss perigrinne et les enfant particulier b autre monde")
    }
    if (reponse == 2) {
        basic.clearScreen()
        basic.showString("vrai")
        basic.clearScreen()
        score = score + 1
        reponse = 3
        basic.showString("quelle est le meilleur livre a miss perigrine et les enfant particulier b autre monde")
    }
    if (reponse == 4) {
        basic.clearScreen()
        basic.showString("vrai")
        basic.clearScreen()
        score = score + 1
        reponse = 6
        basic.showString("quelle est la meilleure personnage de miss perigrine et les enfant particulier a noor pradeche b emma bloume")
    }
    if (reponse == 5) {
        basic.clearScreen()
        basic.showString("faux")
        basic.clearScreen()
        score = score - 1
        reponse = 6
        basic.showString("quelle est la meilleure personnage de miss perigrine et les enfant particulier a noor pradeche b emma bloume")
    }
    if (reponse == 7) {
        basic.clearScreen()
        basic.showString("vrai")
        basic.clearScreen()
        score = score + 1
        basic.showNumber(score)
        reponse = 0
    }
    if (reponse == 8) {
        basic.clearScreen()
        basic.showString("faux")
        basic.clearScreen()
        score = score - 1
        basic.showNumber(score)
        reponse = 0
    }
})
