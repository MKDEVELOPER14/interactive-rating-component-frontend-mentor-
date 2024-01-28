readyStateCheck();

function readyStateCheck(){
    document.addEventListener("readystatechange",(event)=>{
        if(event.target.readyState==="complete"){
            console.log("complete");
            initApp();
        }
        else{
           readyStateCheck(); 
        }
    })
}
function initApp(){
    let number = 0;
    const btn = document.getElementsByClassName("Rbtn")
    const submit = document.getElementById("submitBtn");
    console.log(submit);
    for(let i=0;i<btn.length;i++){
        clicked(i);
    }
    console.log(number);
    submit.onclick=submitButton;
}


function clicked(n){
    const btn = document.getElementsByClassName("Rbtn");
    btn[n].addEventListener("click",()=>{
        const ClickBtn = document.getElementsByClassName("Rbtn");
        console.log(ClickBtn[n]);
        const checkBg = ClickBtn[n].classList.contains("bg")
        // console.log(checkBg);
        if(checkBg==false){
            ClickBtn[n].classList.add("bg");
        }
        else{
            ClickBtn[n].classList.remove("bg");
        }
        for(let i=0;i<btn.length;i++){
               if(i!=n){
                ClickBtn[i].classList.remove("bg");
               } 
        }   
        
            
        })
}



function submitButton(){
    const main = document.getElementById("mainCard");
    main.style.display="none";
    const thankyou = document.getElementById("thankyouDiv");
    thankyou.style.display="block";
    const btn = document.getElementsByClassName("Rbtn");
    const rating =document.getElementById("value")
    console.log(rating.textContent);
    for(let i=0;i<btn.length;i++){;
        const number = btn[i].classList.contains("bg");
        if(number===true){
            rating.textContent=i+1;
        }
    }
    
}