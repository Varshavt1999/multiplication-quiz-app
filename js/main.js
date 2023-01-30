const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const correctAns = num1 * num2;
// parse ---> to convert string to number
let score = JSON.parse(localStorage.getItem("score"));
//while you open a new browser
if (!score) {
    score = 0;
}

const formEl = document.getElementById("form");
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

questionEl.innerText = `what is ${num1} multiplied by  ${num2} ?`;

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}

formEl.addEventListener("submit", () => {
    // +inputEl.value --> to convert inputEl.value(string) to number
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
});
scoreEl.innerText = `score : ${score}`;
