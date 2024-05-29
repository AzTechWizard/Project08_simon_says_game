// let gameSeq=[]
// let body = document.querySelector('body');
// let userSeq=[]
// let started = false;
// let level=0;
// let h2 = document.querySelector('h2')
// let btns: string[]=['pink','lightBlue','orange','blue']
// let maxScore = 0;
// function gameflash(btn){
//     btn.classList.add('flash')
//     setTimeout(function(){
//         btn.classList.remove('flash')
//     }, 250)
// }
// function userflash(btn){
//     btn.classList.add('userflash')
//     setTimeout(function(){
//         btn.classList.remove('userflash')
//     }, 250)
// }
// function levelUp(){
//     userSeq=[]
//     level++;
//     h2.innerText = `Level ${level}`;
//     let randIdx = Math.floor(Math.random()*3);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     gameflash(randBtn);
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     // console.log(randIdx);
//     // console.log(randColor);
//     // console.log(randBtn);
// }
// document.addEventListener('keydown', function(){
//     if(started==false){
//         console.log('game started!');
//         started=true;
//     };
//     levelUp();
// })
// function reset(){
//     started = false;
//     level = 0;
//     gameSeq=[];
//     userSeq=[];
// }
// function checkSeq(idx){
//     console.log(`Current level: ${level}`);
//     if (userSeq[idx] == gameSeq[idx]) {
//         if (userSeq.length == gameSeq.length) {
//             setTimeout(levelUp , 1000)
//         }
//     }else{
//         if (maxScore > gameSeq.length) {
//             maxScore = gameSeq.length
//         }
//         h2.innerHTML = `Game Over!! Your score was<b>${level}</b>. Your highest score is<b>${maxScore}</b> <br>Press any key to start.`;
//         body.style.backgroundColor= "red";
//         setTimeout(function(){
//             body.style.backgroundColor= "white";
//         }, 150)
//         reset();
//     }
// }
// function btnPress(){
//     let btn = this;
//     userflash(btn);
//     let userColor = btn.getAttribute('id')
//     userSeq.push(userColor);
//     console.log(userSeq);
//     checkSeq(userSeq.length - 1);
// }
// let allBtns = document.querySelectorAll('.btn')
// for(let btn of allBtns){
//     btn.addEventListener('click',btnPress)
// }
let gameSeq = [];
let userSeq = [];
let body = document.querySelector('body');
let started = false;
let level = 0;
let maxScore = 0;
let h2 = document.querySelector('h2');
let h4 = document.querySelector('h4');
let btns = ['pink', 'yellow', 'orange', 'blue'];
function gameflash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 250);
}
function userflash(btn) {
    btn.classList.add('userflash');
    setTimeout(function () {
        btn.classList.remove('userflash');
    }, 250);
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameflash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
}
document.addEventListener('keydown', function () {
    if (!started) {
        console.log('game started!');
        started = true;
        h4.innerText = '';
        levelUp();
    }
});
function reset() {
    if (level > maxScore) {
        maxScore = level;
    }
    h2.innerHTML = `Game Over!! Your score was <b>${level}</b>. Your highest score is <b>${maxScore}</b> <br>Press any key to start.`;
    body.style.backgroundColor = "red";
    setTimeout(function () {
        body.style.backgroundColor = "white";
    }, 150);
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}
function checkSeq(idx) {
    console.log(`Current level: ${level}`);
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        reset();
    }
}
function btnPress() {
    let btn = this;
    userflash(btn);
    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    console.log(userSeq);
    checkSeq(userSeq.length - 1);
}
let allBtns = document.querySelectorAll('.btn');
for (let btn of allBtns) {
    btn.addEventListener('click', btnPress);
}
