let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame = () => {
    turno = true;
    enableBoxes();
    msgcontainer.classList.add("hide")
}


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box has been clicked");
        if(turno){
            box.innerText = "O";
            turno = false;
        }else {
            box.innerText = "X"
            turno = true;
        }
        box.disabled = true;

        checkwinner();
    

    });
    
});
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


 const showWinner = (winner) => {
    msg.innerText =`congratulation , the winner is  ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
 };


const checkwinner =() =>{
    for(let pattern of winPatterns){
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;

        if(pos1Val != "" &&pos2Val != "" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);

                showWinner(pos1Val);
            }
        }
    }
};


newbtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);