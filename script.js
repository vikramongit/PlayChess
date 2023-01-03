
const popup = document.querySelector(".popupBox");
const close = document.querySelector(".close");

window.onload = function () {
  setTimeout(() => {
    popup.style.display = "block";
  }, 1500);
};

close.addEventListener("click", () => {
  popup.style.display = "close";
});

