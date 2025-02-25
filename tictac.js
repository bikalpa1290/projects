const boxes = document.querySelectorAll(".boxes");  
const resetbutton =document.querySelector("#button")
const winMessage=document.querySelector("#winMessage");
let isUserOne=true;
const winConditions=[[0,4,8],[6,4,2],[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8]]
let playerX=[];
let playery=[];
let gameOver=false;
boxes.forEach((box,index) => {
  box.addEventListener("click", () => {
    if(box.innerText==="" && !gameOver){
        if(isUserOne){
            box.innerText="X";
            isUserOne=!isUserOne;
            playerX.push(index);

        }else{
            box.innerText="O";
            playery.push(index);
            isUserOne=!isUserOne;

        };
        checkwinner()
        draw();
    }
  });
});

function checkwinner(){
    for(let condition of winConditions){
        if(condition.every(i=>playerX.includes(i))){
            winMessage.innerText="Player X is the winner! 🎉"
            gameOver=true;
        }else if(condition.every(i=>playery.includes(i))){
            winMessage.innerText="Player y is the winner! 🎉"
            gameOver=true;
        }
    };
}

function draw(){
    if(playerX.length+playery.length===9 && !gameOver){
        winMessage.innerText="It's a draw!"
        gameOver=true;
        // return true
    }
}
resetbutton.addEventListener("click",resetgame);

function resetgame(){
    boxes.forEach((box)=>{
        box.innerText=""
    });
    playerX=[];
    playery=[];
    gameOver=false;
    isUserOne=true;
    winMessage.innerText="";
}