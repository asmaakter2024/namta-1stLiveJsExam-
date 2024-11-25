let player1input = document.querySelector(".player1input")
let player1button = document.querySelector(".player1button")
let player2input = document.querySelector(".player2input")
let player2button = document.querySelector(".player2button")
let heading = document.querySelector(".heading")
let anotherHeading = document.querySelector(".anotherHeading")
let span = document.querySelector("span")
let error = document.querySelector(".error")
let h3 = document.querySelector("h3")

let player1Number;
let count = 5;

let p2;





player1button.addEventListener("click", function () {
    if (Number(player1input.value) == "") {
        console.log("p1")
        error.style.color = "red"
        error.innerHTML = "please give a number"

    } else {
        if (Number(player1input.value)) {
            error.innerHTML = ""
            if (Number(player1input.value) >= 1 && Number(player1input.value) <= 10) {
                player1Number = player1input.value
                console.log(player1Number)
                error.innerHTML = ""
                heading.innerHTML = "Player 2"
                anotherHeading.style.display = "block"
                span.innerHTML = count
                display("p1np2b")
            } else {

                error.innerHTML = "please give number 1 to 10"
                error.style.color = "red"
            }

        } else {
            error.innerHTML = "please give a number"
        }
    }
})


player2button.addEventListener("click", function () {

    if (count > 0) {
        if (Number(player2input.value) == "") {
            error.innerHTML = "please give a number"
            error.style.color = "red"
        } else {
            if (Number(player2input.value)) {
                error.innerHTML = ""

                count--
                span.innerHTML = count
                if (Number(player2input.value) >= 1 && Number(player2input.value) <= 10) {
                    if (Number(player1Number == player2input.value)) {


                        count = 5
                        span.innerHTML = count
                        namta()
                        display("p1np2n")

                    } else if (count == 0) {

                        heading.innerHTML = "Player 1 Winner"
                        anotherHeading.innerHTML = ""
                        display("p1np2n")
                    }

                } else {
                    error.innerHTML = "please give number 1 to 10"
                    error.style.color = "red"
                }
            } else {
                error.innerHTML = "please give a number"
            }
        }
    } else {
        anotherHeading.innerHTML = "Game is over"
    }
})






function display(type) {
    if (type == "p1np2b") {
        player2input.style.display = "inline-block"
        player2button.style.display = "inline-block"
        player1input.style.display = "none"
        player1button.style.display = "none"
    } else if (type == "p1np2n") {
        player1input.style.display = "none"
        player1button.style.display = "none"
        player2input.style.display = "none"
        player2button.style.display = "none"

    }

}


function namta() {

    console.log("ami namta")
    var number = player2input.value;
    var playerdiv = document.querySelector(".playerdiv")

    playerdiv.innerHTML = ""

    for (var i = 1; i <= 10; i++) {
        playerdiv.innerHTML += `${number} x ${i} = ${number * i}<br/>`;
    }
}