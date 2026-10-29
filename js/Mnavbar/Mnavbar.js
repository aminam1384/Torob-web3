async function Mnavbar() {
  try {
    let data = await fetch("https://aminam1384.github.io/jsonServer/db.json");
    let res = await data.json();

    let navbarData = res.MnavBar;

    document
      .querySelector(".item-1 a")
      .insertAdjacentHTML("beforeend", navbarData.top.item1);
    document
      .querySelector(".item-2")
      .insertAdjacentHTML("afterbegin", navbarData.top.item2);
    document
      .querySelector(".item-3")
      .insertAdjacentHTML("afterbegin", navbarData.top.item3);
    document
      .querySelector(".item-4 a")
      .insertAdjacentHTML("beforeend", navbarData.top.item4);

    document
      .querySelector(".navbarSearch a")
      .insertAdjacentHTML("beforeend", navbarData.bottom.navbarSearch);
    document
      .querySelector(".navbarCategory a")
      .insertAdjacentHTML("beforeend", navbarData.bottom.navbarCategory);
    document
      .querySelector(".navbarOffer a")
      .insertAdjacentHTML("beforeend", navbarData.bottom.navbarOffer);
    document
      .querySelector(".navbarAcount a")
      .insertAdjacentHTML("beforeend", navbarData.bottom.navbarAccount);
  } catch (error) {
    console.error("خطا در دریافت منوی موبایل:", error);
  }
}

export default Mnavbar;
