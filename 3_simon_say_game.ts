

// let gameSeq = [];
// let userSeq = [];
// let body = document.querySelector('body');
// let started = false;
// let level = 0;
// let maxScore = 0;
// let h2 = document.querySelector('h2');
// let h4 = document.querySelector('h4');
// let btns = ['pink', 'yellow', 'orange', 'blue'];

// function gameflash(btn:any) {
//     btn.classList.add('flash');
//     setTimeout(function () {
//         btn.classList.remove('flash');
//     }, 250);
// }

// function userflash(btn) {
//     btn.classList.add('userflash');
//     setTimeout(function () {
//         btn.classList.remove('userflash');
//     }, 250);
// }

// function levelUp() {
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;
//     let randIdx = Math.floor(Math.random() * btns.length);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     gameflash(randBtn);
//     gameSeq.push(randColor);
//     console.log(gameSeq);
// }

// document.addEventListener('keydown', function () {
//     if (!started) {
//         console.log('game started!');
//         started = true;
//         h4.innerText = '';
//         levelUp();
//     }
// });

// function reset() {
//     if (level > maxScore) {
//         maxScore = level;
//     }
//     h2.innerHTML = `Game Over!! Your score was <b>${level}</b>. Your highest score is <b>${maxScore}</b> <br>Press any key to start.`;
//     body.style.backgroundColor = "red";
//     setTimeout(function () {
//         body.style.backgroundColor = "white";
//     }, 150);
//     started = false;
//     level = 0;
//     gameSeq = [];
//     userSeq = [];
// }

// function checkSeq(idx) {
//     console.log(`Current level: ${level}`);
//     if (userSeq[idx] === gameSeq[idx]) {
//         if (userSeq.length === gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         reset();
//     }
// }

// function btnPress(this:any) {
//     let btn = this;
//     userflash(btn);
//     let userColor = btn.getAttribute('id');
//     userSeq.push(userColor);
//     console.log(userSeq);
//     checkSeq(userSeq.length - 1);
// }

// let allBtns = document.querySelectorAll('.btn');
// for (let btn of allBtns) {
//     btn.addEventListener('click', btnPress);
// }


let gameSeq: string[] = [];
let userSeq: string[] = [];
let body: HTMLElement | null = document.querySelector('body');
let started: boolean = false;
let level: number = 0;
let maxScore: number = 0;

let h2: HTMLElement | null = document.querySelector('h2');
let h4: HTMLElement | null = document.querySelector('h4');
let btns: string[] = ['pink', 'yellow', 'orange', 'blue'];

function gameflash(btn: HTMLElement) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 250);
}

function userflash(btn: HTMLElement) {
    btn.classList.add('userflash');
    setTimeout(function () {
        btn.classList.remove('userflash');
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    if (h2) {
        h2.innerText = `Level ${level}`;
    }
    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    if (randBtn instanceof HTMLElement) {
        gameflash(randBtn);
        gameSeq.push(randColor);
        console.log(gameSeq);
    }
}

document.addEventListener('keydown', function () {
    if (!started) {
        console.log('game started!');
        started = true;
        if (h4) {
            h4.innerText = '';
        }
        levelUp();
    }
});

function reset() {
    if (level > maxScore) {
        maxScore = level;
    }
    if (h2) {
        h2.innerHTML = `Game Over!! Your score was <b>${level}</b>. Your highest score is <b>${maxScore}</b> <br>Press any key to start.`;
    }
    if (body) {
        body.style.backgroundColor = "red";
        setTimeout(function () {
            if (body) {
                body.style.backgroundColor = "white";
            }
        }, 150);
    }
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}

function checkSeq(idx: number) {
    console.log(`Current level: ${level}`);
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        reset();
    }
}

function btnPress(this: HTMLElement) {
    userflash(this);
    let userColor = this.getAttribute('id');
    if (userColor) {
        userSeq.push(userColor);
        console.log(userSeq);
        checkSeq(userSeq.length - 1);
    }
}

let allBtns = document.querySelectorAll('.btn');
allBtns.forEach((btn) => {
    if (btn instanceof HTMLElement) {
        btn.addEventListener('click', btnPress);
    }
});
