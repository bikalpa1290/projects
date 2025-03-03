const checkIcon=document.querySelectorAll(".fa-solid");
const progress=document.querySelector("#progress");
const input=document.querySelectorAll("input")
const comment=document.querySelectorAll("#comment")

let checkValue=[];
let progressValue=0;
checkIcon.forEach((check,index)=>{
    check.addEventListener("click",()=>{
        check.style.backgroundColor="green";
        check.style.color="green";
        checkValue=index
        if(checkValue===1,2,3){
            progressValue+=33.33
            progress.style.width=`${progressValue}%`;
        }
    })
})


