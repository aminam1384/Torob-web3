function toggleDisplay(element) {
  element.style.display = element.style.display === "none" ? "" : "none";
}

document.querySelector(".Category").addEventListener("click", () => {
  toggleDisplay(document.querySelector(".CategoryItems"));
});

document.querySelector(".categoryPrice").addEventListener("click", () => {
  toggleDisplay(document.querySelector(".inputWrapper"));
});

document.querySelector(".categorySearch").addEventListener("click", () => {
  toggleDisplay(document.querySelector(".categorySearchInput"));
});
