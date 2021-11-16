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
        <a href="login.html"><img src="images/user.jpg" alt="" /></a>
        <a href="#"><img src="images/cart.jpg" alt="" /></a>
      </div>
    </div>
    <ul class="links-container">
      <li class="link-item"><a href="#" class="link header-item">home</a></li>
      <li class="link-item"><a href="#" class="link header-item">product</a></li>
      <li class="link-item"><a href="login.html" class="link header-item">login</a>
      <li class="link-item"><a href="product-details.html" class="link header-item">product detail</a>
      <li class="link-item"><a href="cart.html" class="link header-item">cart</a>
    </ul>
  `;
}
