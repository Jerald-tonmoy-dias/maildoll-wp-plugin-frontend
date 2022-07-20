// const apiGenerateBtn = document.getElementById("copyGeneratBtn");
// const copyApiText = document.getElementById("copyGeneratedApi");

// apiGenerateBtn.addEventListener("click", () => {
//   let result = copyApiText.innerText;
//   copyTextToClipboard(result);
//   console.log(result);
// });

// customer stepper js

// stepper_progress
let stepper_progress = document.getElementById("stepper_progress");
let stepper_wrapper = document.getElementById("stepper_wrapper");
let childItem = document.querySelectorAll(".stepper_item");

// functions
let customProgressFunc = (percentage, itemToAdd) => {
  // percentage
  stepper_progress.style.width = `${percentage}%`;
  //   stepper_progress.classList.add("bg-violate-800");

  //   code here
  for (let i = 0; i < childItem.length; i++) {
    childItem[i].classList.add("hidden");
  }
  document.getElementById(`${itemToAdd}`).classList.remove("hidden");
  //   code here
};
