const quiz = document.querySelector(".quiz");
const submitBtn = document.querySelector("#submit-btn");
const showAns = document.querySelector("#show-ans");

const ans = ["PR² + QR² = PQ²", "4.5 cm", "Two sides are equal", "Equilateral"];

function checkAns(e) {
  e.preventDefault();
  let score = 0;
  let index = 0;
  const formResults = new FormData(quiz);
  // console.log(formResults);

  for (let uans of formResults.values()) {
    if (uans == ans[index]) {
      score += 1;
    }
    index += 1;
  }

  showAns.textContent = `your score is ${score}`;
}

submitBtn.addEventListener("click", checkAns);
