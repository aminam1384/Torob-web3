const loginButton = document.querySelector(".login a");
const popup = document.getElementById("myPopup");
const closeBtn = document.getElementById("closePopupBtn");

loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});

popup.addEventListener("click", function (e) {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
