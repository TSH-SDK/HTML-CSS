console.log("ready!");

let p_phrase = document.querySelector("#phrase");

let div_story = document.querySelector("#story");

let a_guide = document.querySelector("#a_guide");

let a_story = document.querySelector("#a_story");

let nav_items = document.querySelectorAll("nav > #nav_item");

function transition(el){
    el.classList.toggle("back_hover");
}

p_phrase.addEventListener("mouseout", transition(p_phrase));

div_story.addEventListener("mouseout", transition(div_story));

a_guide.addEventListener("mouseout", transition(a_guide));

a_story.addEventListener("mouseout", transition(a_story));

nav_items.forEach(function(item) {
    item.addEventListener("mouseout", transition(item));
});