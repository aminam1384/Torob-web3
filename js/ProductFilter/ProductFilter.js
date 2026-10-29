async function ProductFilters() {
  try {

    let data = await fetch("https://aminam1384.github.io/jsonServer/db.json");
    let res = await data.json();

    let filtersData = res.ProductFilters;

    document
      .querySelector(".Category")
      .insertAdjacentHTML("beforeend", filtersData.category);

    // آیتم‌های دسته‌بندی
    let categoryItemsContainer = document.querySelector(".CategoryItems");
    categoryItemsContainer.innerHTML = "";
    filtersData.categoryItems.forEach((item) => {
      categoryItemsContainer.insertAdjacentHTML(
        "beforeend",
        `<a href="#">${item}</a>`,
      );
    });

    // قیمت
    document
      .querySelector(".categoryPrice")
      .insertAdjacentHTML("beforeend", filtersData.price);

    // جست و جو در نتایج
    document
      .querySelector(".categorySearch")
      .insertAdjacentHTML("beforeend", filtersData.searchInResults);

    // لیست قیمت
    document.querySelector(".listPrice a").textContent = filtersData.listPrice;

    // دسته‌بندی‌های پربازدید
    document.querySelector(".mostVisitedCategory span").textContent =
      filtersData.mostVisitedTitle;
    let mostVisitedLinks = document.querySelectorAll(".mostVisitedCategory a");
    filtersData.mostVisitedItems.forEach((item, index) => {
      if (mostVisitedLinks[index]) {
        mostVisitedLinks[index].textContent = item;
      }
    });
  } catch (error) {
    console.error("خطا در دریافت فیلترهای محصولات:", error);
  }
}

export default ProductFilters;
