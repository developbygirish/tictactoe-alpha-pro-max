let boxes = document.querySelectorAll(".btn");
let host = document.querySelector('.active')
let Owin = document.querySelector(".O_win");
let Xwin = document.querySelector(".X_win");
let draw = document.querySelector(".draw");
let playerX = true;

let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


function checkForDraw() {
    for (let box of boxes) {
        if (box.innerText === "") {
            return false;
        }
    }
    return true;
}

let drawinc = 0;

for (let box of boxes) {
    box.onclick = (e) => {
        if (playerX) {
            e.target.innerText = "X";
            playerX = false;
            host.style.left = "60px"
        }
        else {
            e.target.innerText = "O";
            playerX = true;
            host.style.left = "-10px"
        }
        box.disabled = true;
        gettingWinner();
        if (checkForDraw()) {
            drawinc = drawinc + 1;
            draw.innerHTML = `${drawinc} draw`;
            setTimeout(() => {
                for (let btn of boxes) {
                    btn.innerText = "";
                    btn.disabled = false;
                }        
            }, 2000)
            return;
        }
    }
}

let Xinc = 0;

let Oinc = 0;

function gettingWinner() {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]];
        let pos2Val = boxes[pattern[1]];
        let pos3Val = boxes[pattern[2]];


        if (pos1Val.innerText != "" && pos2Val.innerText != "" && pos3Val.innerText != "") {
            if (pos1Val.innerText == pos2Val.innerText && pos2Val.innerText == pos3Val.innerText) {
                pos1Val.style.backgroundColor = "#A5C7B7";
                pos2Val.style.backgroundColor = "#A5C7B7";
                pos3Val.style.backgroundColor = "#A5C7B7";
                if (pos1Val.innerText === "X") {
                    Xinc = Xinc + 1;
                    Xwin.innerHTML = `${Xinc} wins`;
                    playerX = true;
                    host.style.left = "-10px";
                }
                else if (pos1Val.innerText === "O") {
                    Oinc = Oinc + 1;
                    Owin.innerHTML = `${Oinc} wins`;
                    playerX = false;
                    host.style.left = "60px";
                }
                for (let btn of boxes) {
                    btn.disabled = true;
                }
                setTimeout(() => {
                    for (let btn of boxes) {
                        btn.innerText = "";
                        btn.disabled = false;
                    }
                    pos1Val.style.background = "transparent";
                    pos2Val.style.background = "transparent";
                    pos3Val.style.background = "transparent";
                }, 2000)
            }

        }

    }
}


