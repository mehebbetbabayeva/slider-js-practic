let slider =document.querySelector(".slider");
let left = document.querySelector(".leftbtn");
let right = document.querySelector(".rightbtn");


right.addEventListener("click" , function(){
    rightClick();
})
left.addEventListener("click" , function(){
    leftClick();
})

function rightClick(){
   let active= document.querySelector(".active");
   if(active.nextElementSibling != null ){
    active.nextElementSibling.classList.add("active");
    active.classList.remove("active");
   }
   else{
    slider.children[0].children[0].classList.add("active");
    active.classList.remove("active");
   }
}
function leftClick(){
    let active= document.querySelector(".active");
    if(active.previousElementSibling != null ){
     active.previousElementSibling.classList.add("active");
     active.classList.remove("active");
    }
    else{
     let count =slider.children[0].childElementCount;
     slider.children[0].children[count-1].classList.add("active");
     active.classList.remove("active");
    }
}

document.body.addEventListener("keyup", (e)=>{
    if(e.which==37){
        leftClick();
    }
    if(e.which==39){
        rightClick();
    }
})

setInterval(rightClick, 2000)