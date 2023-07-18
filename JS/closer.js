console.log("Hi");

let btn_guide = document.querySelector("#cl_but");

let div_guide = document.querySelector("#guide");

let extra_div = document.querySelector("#extra_div");

function transition(el){
    el.classList.toggle("back_hover");
}

div_guide.addEventListener("mouseout", transition(div_guide));

btn_guide.addEventListener("mouseout", transition(btn_guide));

extra_div.addEventListener("mouseout", transition(extra_div));

btn_guide.addEventListener("click", function(){
    
    if(div_guide.classList.toggle("nothing")){
        btn_guide.textContent = "Показать гайд";
        extra_div.classList.remove("nothing");
    }else{
        btn_guide.textContent = "Скрыть гайд";
        extra_div.classList.add("nothing");
        }
});


