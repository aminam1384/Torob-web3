async function Products() {
  try {

    let data = await fetch("https://aminam1384.github.io/jsonServer/db.json");
    let res = await data.json();

    let productsData = res.Products;

    let breadcrumb = document.querySelector(".productsHeader");
    breadcrumb.innerHTML = `<a href="#">${productsData.breadcrumb.home}</a> > <a href="#">${productsData.breadcrumb.current}</a>`;

    // عنوان
    document.querySelector(".productsTitle .top span").textContent =
      productsData.title;

    // فیلترها
    document
      .querySelector(".productsTitle .bottom .item-1")
      .insertAdjacentHTML("afterbegin", productsData.filters.item1);
    document
      .querySelector(".productsTitle .bottom .item-2")
      .insertAdjacentHTML("afterbegin", productsData.filters.item2);
    document
      .querySelector(".productsTitle .bottom .item-3 a")
      .insertAdjacentHTML("afterbegin", productsData.filters.item3);

    // محصولات
    let productsContainer = document.querySelector(".productsItem");
    productsContainer.innerHTML = "";

    productsData.productList.forEach((product) => {
      productsContainer.insertAdjacentHTML(
        "beforeend",
        `
            <div class="productBox">
                <div class="pic">
                    <img src="${product.img}" alt="" />
                </div>
                <div class="aboutProduct">${product.title}</div>
                <div class="productPrice">${product.price}</div>
                <div class="more">
                    <span>${product.storeCount}</span>
                    <div class="leftMore">
                        <a href="#"><svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M 10 17.5 
           C 10 17.5, 2 11.5, 2 7 
           C 2 3.5, 6 2.5, 10 5.5 
           C 14 2.5, 18 3.5, 18 7 
           C 18 11.5, 10 17.5, 10 17.5 Z"
                      fill="none"
                      stroke="#94a3b8"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg></a>
                        <a href="#"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#94a3b8"
                    width="17px"
                    height="17px"
                    class="svg-bell"
                  >
                    <path
                      d="M 11.992188 0.9921875 A 0.50005 0.50005 0 0 0 11.5 1.5 L 11.5 3.1015625 C 7.350916 3.3738548 4.0332031 6.7498274 4.0332031 10.966797 L 4.0332031 14.167969 C 4.0332031 17.145781 2.046875 19.146484 2.046875 19.146484 A 0.50005 0.50005 0 0 0 2.4003906 20 L 9 20 C 9 21.651094 10.348906 23 12 23 C 13.651094 23 15 21.651094 15 20 L 21.599609 20 A 0.50005 0.50005 0 0 0 21.953125 19.146484 C 21.953125 19.146484 19.966797 17.145781 19.966797 14.167969 L 19.966797 10.966797 C 19.966797 6.7498274 16.649084 3.3738548 12.5 3.1015625 L 12.5 1.5 A 0.50005 0.50005 0 0 0 11.992188 0.9921875 z M 11.96875 4.0058594 A 0.50005 0.50005 0 0 0 12.029297 4.0058594 C 15.868695 4.0225904 18.966797 7.1233977 18.966797 10.966797 L 18.966797 14.167969 C 18.966797 16.654161 19.964948 18.160272 20.623047 19 L 3.3769531 19 C 4.0350519 18.160272 5.0332031 16.654161 5.0332031 14.167969 L 5.0332031 10.966797 C 5.0332031 7.1240638 8.1302752 4.023658 11.96875 4.0058594 z M 10 20 L 14 20 C 14 21.110906 13.110906 22 12 22 C 10.889094 22 10 21.110906 10 20 z"
                    />
                  </svg></a>
                    </div>
                </div>
            </div>
        `,
      );
    });
  } catch (error) {
    console.error("خطا در دریافت محصولات:", error);
  }
}

export default Products;
