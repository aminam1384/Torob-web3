async function Header() {
  try {

    let data = await fetch("https://aminam1384.github.io/jsonServer/db.json");
    let res = await data.json();

    let headerData = res.Header; 

    let title = headerData.find((item) => item.id === 1);
    let logo = headerData.find((item) => item.id === 2);
    let search = headerData.find((item) => item.id === 3);
    let login = headerData.find((item) => item.id === 4);

    document.getElementById("titleMobile").textContent = title?.text || "";
    document.getElementById("logoText").textContent = logo?.text || "";
    document.getElementById("searchInput").placeholder =
      search?.placeholder || "";
    document.getElementById("loginButton").textContent = login?.text || "";
  } catch (error) {
    console.error("خطا:", error);
  }
}

export default Header;
