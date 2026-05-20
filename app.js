let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const genComputerChoice=()=>{
    const options=["rock","paper","scisors"];
    Math.random
}

const playGame=(userchoice)=>{
    console.log("user choice = ",userchoice);
}

choices.forEach((choice)=> {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
       playGame(userchoice)
})
})