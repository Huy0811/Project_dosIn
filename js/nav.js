export function createNav() {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
    <div class="nav">
      <img src="images/dosiin-logo.png" class="brand-logo" alt="" />
      <div class="nav-items">
        <div class="search">
          <input
            type="text"
            class="search-box"
            placeholder="search brand, product"
          />
          <button class="search-btn">search</button>
        </div>
        <a href="#"><img src="images/user.jpg" alt="" /></a>
        <a href="#"><img src="images/cart.jpg" alt="" /></a>
      </div>
    </div>
    <ul class="links-container">
      <li class="link-item"><a href="#" class="link header-item">home</a></li>
      <li class="link-item"><a href="#" class="link header-item">product</a></li>
    </ul>
  `;
}
