let count = 0;

//select elements

const countE1 = document.getElementById("count");
const errorE1 = document.getElementById("error");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const clearBtn = document.getElementById("clear")

//Increment

incrementBtn.addEventListener("click",()=>{
    count++;
    updateUI();
});

//Decement

decrementBtn.addEventListener("click",()=>{
    if(count ===0 ){
        errorE1.style.display = "block";
    }else{
        count--;
        errorE1.style.display = "none";
        updateUI();
    }
});

//clear
clearBtn.addEventListener("click",()=>{
    count =0;
    updateUI();
})

//Update UI function
function updateUI(){
    countE1.innerHTML = count;

    //Hide error if valid
    if(count>0){
        errorE1.style.display = "none";
    }

    if(count>1){
        clearBtn.style.display ="inline-block"
    }
    else{
        clearBtn.style.display = "none";
    }
}