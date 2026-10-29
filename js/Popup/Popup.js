async function Popup() {
  try {
    let data = await fetch("https://aminam1384.github.io/jsonServer/db.json");
    let res = await data.json();

    let popupData = res.Popup;

    document.getElementById("popupTitle").textContent = popupData.title;
    document.getElementById("popupSubtitle").textContent = popupData.subtitle;
    document.getElementById("popupLabel").textContent = popupData.label;
    document.getElementById("smsButton").textContent = popupData.smsBtn;
    document.getElementById("callButton").textContent = popupData.callBtn;
  } catch (error) {
    console.error("خطا در دریافت پاپ‌آپ:", error);
  }
}

export default Popup;
