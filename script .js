let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.getElementById("msg");
let yourScore=document.querySelector("#your-score");
let computerScore=document.querySelector("#comp-score");
let refresh=document.querySelector("#refresh");
refresh.addEventListener("click",()=>{
    location.reload();
})

const compChoiceGenerator=()=>{
    let options=["rock","paper","scissors"];
    let randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const Drawgame=()=>{
    console.log("Game is draw");
    msg.innerHTML="Game is drawn";
    msg.style.backgroundColor="yellow";
    msg.style.borderRadius="50px";

}
const showWinner=(userWin)=>{
    if(userWin==true){
        msg.innerHTML=`You won the game `;
        msg.style.backgroundColor="blue";
        msg.style.borderRadius="50px";
        userScore++;
        yourScore.innerHTML=userScore;

    }else if(userWin==false){
        msg.innerHTML=`Computer won the game `;
        msg.style.backgroundColor="green";
        msg.style.borderRadius="50px";
        compScore++;
        computerScore.innerHTML=compScore;
    }
}

const playgame=(userchoice)=>{
console.log("User choice is",userchoice)
const compChoice=compChoiceGenerator();
console.log("Computer choice is ",compChoice);
if(userchoice===compChoice){
    Drawgame();
    
}else{
    let userWin=true;
    if(userchoice==="rock"){
    userWin=compChoice=="paper" ? false:true;
    
}
    else if(userchoice==="paper"){
        userWin=compChoice=="rock"?true:false;
    }else if(userchoice="scissiors"){
        userWin=compChoice=="rock"?false:true;
    }
 showWinner(userWin);
}}

choices.forEach((choice)=>{
    choice.removeEventListener("click", () => {});
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id")
        playgame(userchoice);
        
    })
})