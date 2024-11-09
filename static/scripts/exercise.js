const explaination = document.getElementById("Explaination");
const explaination_text = document.getElementById("Explaination_text");

explaination_text.setAttribute("hidden", "true");

function explain() {
    console.log("Explained!");
    explaination_text.hidden = false;
}

explaination.addEventListener("click", explain);
