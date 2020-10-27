document.addEventListener("DOMContentLoaded", function () {
    let el_questions = document.querySelectorAll("div.frm-question");

    el_questions.forEach(function(div) {
        div.addEventListener("click", function() {
            toogleDiv(div);
        });
    });
});

function toogleDiv(div){
    try {
        const p = div.querySelector("p");
        div.classList.toggle("active");
        p.classList.toggle("active");
    } catch (error) {
        console.log(error);
    }
}