var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
const player1_Button = document.getElementById('player-1');
const player2_Button = document.getElementById('player-2');

player1_Button.addEventListener('click', rollDice_1);
player2_Button.addEventListener('click', rollDice_2);


console.log(board);
console.log(player1_Button);
console.log(player2_Button);


var player1 = ["Chaitra", 0, 1000];
var player2 = ["Anju", 0, 1000];

//--------Player 1 Rolls
function rollDice_1() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("Player-1 Rolls ", position);
    changePosition_1(player1[1], position);
}
//--------Player 1 -Position change
function changePosition_1(old, currPos) {
    var newposition = old + currPos;
    player1[1] = newposition;
    console.log(player1[1]);
    updateMoney_1(player1[1]);
}
////--------Player 1 Money Update
function updateMoney_1(p1) {
    var updateMoney = 0;
    if (p1 < board.length) {
        updateMoney = player1[2] - board[p1 - 1];
    } else {
        p1 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1];
    }
    console.log(updateMoney);
}

//-----------Player-2 Rolld Dice-------
function rollDice_2() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("Player-2 Rolls ", position);
    changePosition_2(player2[1], position);
}

//-----------Player-2 - Position Change------------
function changePosition_2(old, currPos) {
    var newposition = old + currPos;
    player2[1] = newposition;
    console.log(player2[1]);
    updateMoney_2(player2[1]);
}

//-----------Player-2 Money Update -------------------
function updateMoney_2(p2) {
    var updateMoney = 0;
    if (p2 < board.length) {
        updateMoney = player2[2] - board[p2 - 1];
    } else {
        p2 = p2 % 15;
        updateMoney = player2[2] - board[p2 - 1];
    }


    console.log(updateMoney);
}