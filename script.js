const button = document.getElementById("btncambiarcolor");
let isColor = true;

button.addEventListener("click", () => {
  document.body.style.backgroundColor = isColor ? "#799BFF" : "#E979FF";
  isColor = !isColor;
});
