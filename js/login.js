// گرفتن دکمه ورود/ثبت نام (همون a که داخلش button هست)
const loginButton = document.querySelector(".login a");
const popup = document.getElementById("myPopup");
const closeBtn = document.getElementById("closePopupBtn");

// وقتی روش کلیک شد، پاپ‌آپ رو نشون بده
loginButton.addEventListener("click", function (e) {
  e.preventDefault(); // جلوگیری از رفتن به لینک #
  popup.style.display = "flex";
});

// بستن پاپ‌آپ با دکمه x
closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});

// بستن با کلیک روی بیرون پاپ‌آپ
popup.addEventListener("click", function (e) {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
