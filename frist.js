const cards = document.querySelectorAll(".inner-container");

function removeActive() {
    cards.forEach((cards) =>{
        cards.classList.remove("active")

    });
};

cards.forEach((cards)=>{
     cards.addEventListener("click",()=>{
        removeActive();
        cards.classList.add("active")
     });
});