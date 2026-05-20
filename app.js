let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msgpara=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score")

const genComputerChoice=()=>{
    const options=["rock","paper","scisors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawgame=()=>{
    msg.innerText="Game was draw , Play again!"
    msg.style.backgroundColor="black";
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
         msg.innerText=`You lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userchoice)=>{

    const compchoice=genComputerChoice();
    
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissor,paper
            userwin=compchoice==="paper"? false:true;
        }
        else if(userchoice==="paper"){
            //scissor,rock
            userwin=compchoice==="scissor"?false:true;
        }
        else if(userchoice==="scissor"){
            //paper,rock
            userwin=compchoice==="rock"?false:true;
    }
    showwinner(userwin,userchoice,compchoice);
}
}

choices.forEach((choice)=> {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
       playGame(userchoice)
})
})