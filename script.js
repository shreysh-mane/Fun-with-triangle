const angleInputs = document.querySelectorAll(".angle__input");
const isTriangleBtn = document.querySelector("#isTriangle__btn");
const isTriangleAns = document.querySelector("#isTriangle__ans");

const sideInputs = document.querySelectorAll(".side__input");
const hypoBtn = document.querySelector("#hypo__btn");
const hypoAns = document.querySelector("#hypo__ans");

const areaInputs = document.querySelectorAll(".area__side__input");
const areaBtn = document.querySelector("#area__btn");
const areaAns = document.querySelector("#area__ans");

const calArea = () => {
  let area = 0;
  let mul = 1;

  for (side of areaInputs) {
    side = Number(side.value);
    mul = mul * side;
  }
  area = mul / 2;
  areaAns.textContent = `${area}`;
};
areaBtn.addEventListener("click", calArea);

const calHypo = () => {
  let hypo = 0;
  for (side of sideInputs) {
    side = Number(side.value);
    hypo += side ** 2;
  }
  hypoAns.textContent = `${Math.sqrt(hypo)}`;
};
hypoBtn.addEventListener("click", calHypo);

const checkTriangle = () => {
  let sum = 0;
  for (angle of angleInputs) {
    sum += Number(angle.value);
  }
  if (sum == 180) {
    isTriangleAns.textContent = "YES";
  } else {
    isTriangleAns.textContent = "NO";
  }
};

isTriangleBtn.addEventListener("click", checkTriangle);
