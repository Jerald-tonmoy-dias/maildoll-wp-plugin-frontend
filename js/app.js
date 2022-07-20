const apiGenerateBtn = document.getElementById("copyGeneratBtn");
const copyApiText = document.getElementById("copyGeneratedApi");

apiGenerateBtn.addEventListener("click", () => {
  let result = copyApiText.innerText;
  copyTextToClipboard(result);
  console.log(result);
});
