const quiz = document.querySelector(".quiz");
const submitBtn = document.querySelector("#submint-btn");
const showAns = document.querySelector("#show-ans");

const ans = ["PR² + QR² = PQ²", "4.5 cm"];

function checkAns() {
  let score = 0;
  let index = 0;
  showAns.textContent = `your sco`;
  const formResults = new FormData(quiz);
  for (let uans of formResults.values()) {
    if (uans == ans[index]) {
      score += 1;
    }
  }
  index += 1;
  //   showAns.textContent = `your score is ${score}`;
}

submitBtn.addEventListener("click", checkAns);
