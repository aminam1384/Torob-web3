async function Menu() {
  try {
    let menuItems = "";
    
    let data = await fetch("https://aminam1384.github.io/jsonServer/db.json");
    let res = await data.json();

    let menuData = res.Menu;

    menuItems = menuData?.map((elem) => {
      return `
        <li>
          <a href="${elem.href}">${elem.text}</a>
        </li>`;
    });

    document
      .querySelector(".deskMenu>ul")
      .insertAdjacentHTML("afterbegin", menuItems.join(""));
  } catch (error) {
    console.error("خطا در دریافت منو:", error);
  }
}

export default Menu;
 