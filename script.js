const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circleList = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");

let activeStep = 1;
const maxStep = circleList.length;

prevBtn.addEventListener("click", () => {
  if (activeStep !== 1) {
    activeStep--;

    update();
    checkBtnState();
  }
});

nextBtn.addEventListener("click", () => {
  if (activeStep < maxStep) {
    activeStep++;
    update();
    checkBtnState();
  }
});

function update() {
  circleList.forEach((circle, index) => {
    if (index < activeStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  changeProgressWidth();
}

function changeProgressWidth() {
  const actives = document.querySelectorAll(".active");
  const progressWidth = ((actives.length - 1) / (circleList.length - 1)) * 100;
  progress.style.width = `${progressWidth}%`;
}

function checkBtnState() {
  if (activeStep === 1) {
    prevBtn.disabled = true;
  } else if (activeStep === circleList.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
