import { createNav } from "./nav.js";
import { createFooter } from "./footer.js";
import { createCarousel } from "./product.js";
import { createProduct } from "./product.js";

let page = document.querySelector(".main");

let card_container_list = [
  {
    discount: "-50%",
    imgSrc: "images/deal-1.jpg",
    brand: "MVR Maverick",
    name: "Áo chữ viết maverick - LITH29052001 trắng",
    price: "119,000",
  },
  {
    discount: "-50%",
    imgSrc: "images/deal-2.jpg",
    brand: "T-MAG",
    name: "She Was There Tee (Beige)",
    price: "111,000",
  },
  {
    discount: "-50%",
    imgSrc: "images/deal-3.jpg",
    brand: "CHODOLE",
    name: "Áo thun unisex cotton 100% in hình Stranger things",
    price: "117,500",
  },
  {
    discount: "-50%",
    imgSrc: "images/deal-4.jpg",
    brand: "Battle er B.G",
    name: "Bóp viết BG x002",
    price: "120,000",
  },
  {
    discount: "-50%",
    imgSrc: "images/deal-5.jpg",
    brand: "Friends Forever Store",
    name: "TÚI FF PENCIL CASE SIGNATURE",
    price: "119,000",
  },
  {
    discount: "-50%",
    imgSrc: "images/deal-6.jpg",
    brand: "NEWCOMER",
    name: "Gray Skirt",
    price: "111,000",
  },
];

let option_list = [
  {
    type: "áo thun",
    quantity: "6,391 sản phẩm",
  },
  {
    type: "áo khoác",
    quantity: "735 sản phẩm",
  },
  {
    type: "nón",
    quantity: "681 sản phẩm",
  },
  {
    type: "quần",
    quantity: "1,677 sản phẩm",
  },
  {
    type: "ba lô, túi xách",
    quantity: "1,260 sản phẩm",
  },
  {
    type: "giày / dép",
    quantity: "961 sản phẩm",
  },
  {
    type: "phụ kiện",
    quantity: "849 sản phẩm",
  },
];

let hot_product_list = [
  {
    logoImgSrc: "images/product-logo-1.jpg",
    number: "01",
    productImgSrc: "images/hot-product-1.jpg",
    brand: "SAIGONZUP STORE",
    name: "Longsleeve Oversized T-shirt – White",
    price: "180,000",
  },
  {
    logoImgSrc: "images/product-logo-2.jpg",
    number: "02",
    productImgSrc: "images/hot-product-2.jpg",
    brand: "THE LAUGHTER STREETWEAR",
    name: " The Laughter - Silence Rose T Shirt Black",
    price: "250,000",
  },
  {
    logoImgSrc: "images/product-logo-3.jpg",
    number: "03",
    productImgSrc: "images/hot-product-3.jpg",
    brand: "THE MADE",
    name: "BASIC LOGO TANK TOP White",
    price: "96,000",
  },
  {
    logoImgSrc: "images/product-logo-4.jpg",
    number: "04",
    productImgSrc: "images/hot-product-4.jpg",
    brand: "HIDEN",
    name: " HIDEN 3DTEX TEE",
    price: "149,000",
  },
  {
    logoImgSrc: "images/product-logo-5.jpg",
    number: "05",
    productImgSrc: "images/hot-product-5.jpg",
    brand: "URBAN OUTFITS",
    name: "Áo Thun Tay Ngắn Nam Nữ URBAN OUTFITS In Illusio ATR08 100% Cotton",
    price: "110,000",
  },
  {
    logoImgSrc: "images/product-logo-6.jpg",
    number: "06",
    productImgSrc: "images/hot-product-6.jpg",
    brand: "Friends Forever Store",
    name: "ÁO THUN FF OVERSIZE WASH TEE",
    price: "280,000",
  },
  {
    logoImgSrc: "images/product-logo-7.jpg",
    number: "07",
    productImgSrc: "images/hot-product-7.jpg",
    brand: "DON GIAN BRAND",
    name: "NORMAL DAY T-SHIRT",
    price: "149,000",
  },
  {
    logoImgSrc: "images/product-logo-8.jpg",
    number: "08",
    productImgSrc: "images/hot-product-8.jpg",
    brand: "NEEDS OF WISDOM",
    name: "Dreams Above Tee – White - Trắng",
    price: "295,000",
  },
  {
    logoImgSrc: "images/product-logo-9.jpg",
    number: "09",
    productImgSrc: "images/hot-product-9.jpg",
    brand: "THE DENIMANIAC",
    name: "Logo Loose Tee – Aqua",
    price: "240,000",
  },
  {
    logoImgSrc: "images/product-logo-10.jpg",
    number: "10",
    productImgSrc: "images/hot-product-10.jpg",
    brand: "URBAN MONKEY$",
    name: "STAFF TEE",
    price: "600,000",
  },
];

let new_product_list = [
  {
    imgSrc: "images/new-product-1.jpg",
    brand: "MANDES",
    name: "Áo thun mandes basic cơ bản",
    price: "150,450",
  },
  {
    imgSrc: "images/new-product-2.jpg",
    brand: "MANDES",
    name: "Áo thun mandes nấm vui vẻ",
    price: "165,200",
  },
  {
    imgSrc: "images/new-product-3.jpg",
    brand: "MANDES",
    name: "Áo thun mandes basic giải trí",
    price: "156,350",
  },
  {
    imgSrc: "images/new-product-4.jpg",
    brand: "MANDES",
    name: "Áo thun mandes đồ họa những vì sao",
    price: "168,150",
  },
  {
    imgSrc: "images/new-product-5.jpg",
    brand: "MANDES",
    name: "Áo thun mandes basic gấu tình yêu",
    price: "156,350",
  },
];

let wrapper_list = [
  {
    imgSrc: "./images/wrapper-1.jpeg",
    title: `Hình xăm - "Toxic" và "Fashion"`,
    user: "dosiinmagazine",
    time: "1 tháng trước",
  },
  {
    imgSrc: "./images/wrapper-2.jpeg",
    title: `Breakdance: diện đồ như bboy, bgirl`,
    user: "Linh",
    time: "1 tháng trước",
  },
  {
    imgSrc: "./images/wrapper-3.jpeg",
    title: `[NEWS] Dr. Martens và atmos kết hợp cho ra mắt Tarik Zip Boots
    lấy cảm hứng từ Anime`,
    user: "Linh",
    time: "1 tháng trước",
  },
  {
    imgSrc: "./images/wrapper-4.jpeg",
    title: `Nhà thiết kế trẻ triển vọng Kiko Kostadinov là ai?`,
    user: "Linh",
    time: "1 tháng trước",
  },
  {
    imgSrc: "./images/wrapper-5.jpeg",
    title: `Các bước để “ăn cắp” thiết kế của T-Redx mà không bị bóc
    phốt`,
    user: "dosiinmagazine",
    time: "4 tháng trước",
  },
  {
    imgSrc: "./images/wrapper-6.jpeg",
    title: `Nắm bắt xu hướng hay "nắm bắt" thiết kế?`,
    user: "Linh",
    time: "4 tháng trước",
  },
  {
    imgSrc: "./images/wrapper-7.jpeg",
    title: `Sự đột phá hay sự lụi tàn (thời trang và những giải pháp)`,
    user: "Linh",
    time: "4 tháng trước",
  },
  {
    imgSrc: "./images/wrapper-8.jpeg",
    title: `Local Brands – Há miệng chờ sung, không làm mà đòi có ăn?`,
    user: "Linh",
    time: "4 tháng trước",
  },
  {
    imgSrc: "./images/wrapper-9.jpeg",
    title: `BEUTER - WASHED EVERYDAY, WEAR EVERYDAY`,
    user: "Linh",
    time: "5 tháng trước",
  },
  {
    imgSrc: "./images/wrapper-10.jpeg",
    title: `ROTY – STREETWEAR LOCAL BRAND 01: T-REDX`,
    user: "Lê Minh Trí",
    time: "6 tháng trước",
  },
  {
    imgSrc: "./images/wrapper-11.jpeg",
    title: `ROTY – STREETWEAR LOCAL BRAND 02: NAMED`,
    user: "Lê Minh Trí",
    time: "6 tháng trước",
  },
  {
    imgSrc: "./images/wrapper-12.jpeg",
    title: `ROTY – STREETWEAR LOCAL BRAND 03: DEADEND`,
    user: "Lê Minh Trí",
    time: "6 tháng trước",
  },
  {
    imgSrc: "./images/wrapper-13.jpeg",
    title: `Những “chợ phiên” local độc đáo bạn nên check-in ít nhất một
    lần`,
    user: "Thien nguyen",
    time: "9 tháng trước",
  },
  {
    imgSrc: "./images/wrapper-14.jpeg",
    title: `"Sao nhập ngũ" Khánh Vân và Võ Điền Gia Huy bật mí về gu thời
    trang đời thường`,
    user: "Thien nguyen",
    time: "9 tháng trước",
  },
  {
    imgSrc: "./images/wrapper-15.jpeg",
    title: `Vàng nhạt lên ngôi và cách phối màu hiệu quả`,
    user: "Thien nguyen",
    time: "9 tháng trước",
  },
  {
    imgSrc: "./images/wrapper-16.jpeg",
    title: `Còn ai yêu đồ local hơn Chi Pu?`,
    user: "Hery Thái",
    time: "10 tháng trước",
  },
];

function renderHome() {
  page.innerHTML = `
  <nav class="navbar"></nav>
  <div id="main-content">
    <div class="slider"></div>
    <section class="product"></section>
    <section class="banner"></section>
    <section class="hot_product"></section>
    <section class="new_brand"></section>
    <section class="magazine"></section>
  </div>
  <footer class="footer"></footer>
`;
  createNav();
  createSlider();
  createCardContainer();
  createBanner();
  createHotProduct();
  createNewBrand();
  createMagazine();
  createFooter();
}

const createSlider = () => {
  let slider = document.querySelector(".slider");

  slider.innerHTML = `
  <div class="slider-left">
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="images/slider-1.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="images/slider-2.jpg" alt="" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
  <div class="slider-right">
    <div class="item">
      <a href="#">
        <img src="images/sale-1.jpg" alt="" />
      </a>
    </div>
    <div class="item space">
      <a href="#">
        <img src="images/sale-2.jpg" alt="" />
      </a>
    </div>
    <div class="item space">
      <a href="#">
        <img src="images/sale-3.jpg" alt="" />
      </a>
    </div>
  </div>
  `;

  let swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

const createCardContainer = () => {
  let product = document.querySelector(".product");

  product.innerHTML = `
    <h2 class="product-category">deal siêu hot</h2>
    <button class="pre-btn"><img src="images/arrow.png" alt="" /></button>
    <button class="nxt-btn"><img src="images/arrow.png" alt="" /></button>
    <div class="product-container"></div>
  `;

  let container = document.querySelector(".product-container");
  for (let item of card_container_list) {
    container.innerHTML +=
      `
    <div class="product-card">
      <div class="product-image">
        <span class="discount-tag">` +
      item.discount +
      `</span>
        <img src="` +
      item.imgSrc +
      `" class="product-thumb" alt="" />
        <button class="card-btn">add to cart</button>
      </div>
      <div class="product-info">
        <p class="product-brand">` +
      item.brand +
      `</p>
        <h3 class="product-name">
          ` +
      item.name +
      `
        </h3>
        <p class="product-price">` +
      item.price +
      `</p>
      </div>
    </div>
    `;
  }

  const productContainers = [
    ...document.querySelectorAll(".product-container"),
  ];
  const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
  const preBtn = [...document.querySelectorAll(".pre-btn")];

  productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth;
    });
  });
};

const createBanner = () => {
  let banner = document.querySelector(".banner");

  banner.innerHTML = `
  <h2 class="banner-category">tiêu điểm</h2>
  <div class="banner-img">
    <div class="item left">
      <a href="#">
        <img src="./images/tieudiem-adidas-pc.jpg" alt="" />
      </a>
    </div>
    <div class="item right">
      <a href="#">
        <img src="./images/tieudiem-nike-pc.jpg" alt="" />
      </a>
    </div>
  </div>
  `;
};

const createHotProduct = () => {
  let hotProduct = document.querySelector(".hot_product");

  hotProduct.innerHTML = `
  <div class="content">
    <h2 class="hot_product-category">sản phẩm nổi bật</h2>
    <div class="option-list"></div>
    <div class="product-list">
      <div class="first-row"></div>
      <div class="second-row"></div>
    </div>
  </div>
  `;

  let optionList = document.querySelector(".option-list");
  let firstRowList = document.querySelector(".first-row");
  let secondRowList = document.querySelector(".second-row");

  for (let item of option_list) {
    optionList.innerHTML +=
      `
    <div class="option-item">
      <a href="#">
        <p>` +
      item.type +
      `</p>
        <span>` +
      item.quantity +
      `</span>
      </a>
    </div>
    `;
  }

  for (let i = 0; i < 5; i++) {
    firstRowList.innerHTML +=
      `
    <div class="product-item">
      <div class="product-head">
        <div class="product-intro">
          <img src="` +
      hot_product_list[i].logoImgSrc +
      `" alt="" />
          <div class="number">` +
      hot_product_list[i].number +
      `</div>
        </div>
      </div>
      <div class="product-cart">
        <a href="#">
          <img src="` +
      hot_product_list[i].productImgSrc +
      `" alt="" />
        </a>
        <div class="product-desc">
          <div class="product-brand">
            <a href="#">` +
      hot_product_list[i].brand +
      `</a>
          </div>
          <h4 class="product-name">
            <a href="#">` +
      hot_product_list[i].name +
      `</a>
          </h4>
          <div class="product-price">
            <span>` +
      hot_product_list[i].price +
      `</span>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  for (let i = 5; i < 10; i++) {
    secondRowList.innerHTML +=
      `
    <div class="product-item">
      <div class="product-head">
        <div class="product-intro">
          <img src="` +
      hot_product_list[i].logoImgSrc +
      `" alt="" />
          <div class="number">` +
      hot_product_list[i].number +
      `</div>
        </div>
      </div>
      <div class="product-cart">
        <a href="#">
          <img src="` +
      hot_product_list[i].productImgSrc +
      `" alt="" />
        </a>
        <div class="product-desc">
          <div class="product-brand">
            <a href="#">` +
      hot_product_list[i].brand +
      `</a>
          </div>
          <h4 class="product-name">
            <a href="#">` +
      hot_product_list[i].name +
      `</a>
          </h4>
          <div class="product-price">
            <span>` +
      hot_product_list[i].price +
      `</span>
          </div>
        </div>
      </div>
    </div>
    `;
  }
};

const createNewBrand = () => {
  let newBrand = document.querySelector(".new_brand");

  newBrand.innerHTML = `
  <h2 class="new-brand-category">thương hiệu mới</h2>
  <div class="swiper mySwiper2">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="images/new-brand-1.jpg" alt="" /></div>
      <div class="swiper-slide"><img src="images/new-brand-2.jpg" alt="" /></div>
      <div class="swiper-slide"><img src="images/new-brand-3.jpg" alt="" /></div>
      <div class="swiper-slide"><img src="images/new-brand-4.jpg" alt="" /></div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <div class="new-product-list"></div>
  `;

  let newProductList = document.querySelector(".new-product-list");
  for (let item of new_product_list) {
    newProductList.innerHTML +=
      `
    <div class="product-item">
      <div class="product-cart">
        <a href="#">
          <img src="` +
      item.imgSrc +
      `" alt="" />
        </a>
        <div class="product-desc">
          <div class="product-brand">
            <a href="#">` +
      item.brand +
      `</a>
          </div>
          <h4 class="product-name">
            <a href="#">` +
      item.name +
      `</a>
          </h4>
          <div class="product-price">
            <span>` +
      item.price +
      `</span>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  let swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
};

const createMagazine = () => {
  let magazine = document.querySelector(".magazine");

  magazine.innerHTML += `
  <h2 class="magazine-category">Magazine</h2>
  <div class="slide">
    <div class="magazine-slide">
      <a href="#" class="img">
        <img src="./images/magazine-1.jpeg" alt="picture-1" />
      </a>
      <div class="magazine-description">
        <p>Hình xăm - "Toxic" và "Fashion"</p>
        <span>
          <span class="news">Tin Tức</span> dosiinmagazine - 1 tháng trước
          <i class="far fa-eye"></i> 1012
        </span>
      </div>
    </div>
    <div class="magazine-slide">
      <a href="#" class="img">
        <img src="./images/magazine-2.jpeg" alt="picture-1" />
      </a>
      <div class="magazine-description">
        <p>Breakdance: diện đồ như bboy, bgirl</p>
        <span>
          <span class="news">Tin Tức</span> Linh - 1 tháng trước
          <i class="far fa-eye"></i> 697
        </span>
      </div>
    </div>
    <div class="magazine-slide">
      <a href="#" class="img">
        <img src="./images/magazine-3.jpeg" alt="picture-1" />
      </a>
      <div class="magazine-description">
        <p>Tarik Zip Boots lấy cảm hứng từ Anime</p>
        <span>
          <span class="news">Tin Tức</span> Linh - 1 tháng trước
          <i class="far fa-eye"></i> 1016
        </span>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="wrapper">
      <a href="#" class="wrapper-title">Tin Tức</a>
    </div>
    <div class="wrapper">
      <a href="#" class="wrapper-title">Bài viết dự thi</a>
    </div>
    <div class="wrapper">
      <a href="#" class="wrapper-title">Local</a>
    </div>
    <div class="wrapper">
      <a href="#" class="wrapper-title">Feature</a>
    </div>
  </div>
  `;

  let wrapper = document.querySelectorAll(".wrapper");
  function createWrapperText(i) {
    return (
      `
    <div class="wrapper-text">
        <a href="#">
          <img src="` +
      wrapper_list[i].imgSrc +
      `" alt="" />
        </a>
        <div class="wrapper-description">
          <a href="#">` +
      wrapper_list[i].title +
      `</a>
          <span>` +
      wrapper_list[i].user +
      ` - ` +
      wrapper_list[i].time +
      `</span>
        </div>
      </div>
    `
    );
  }

  for (let i = 0; i < 4; i++) {
    wrapper[0].innerHTML += createWrapperText(i);
  }
  for (let i = 4; i < 8; i++) {
    wrapper[1].innerHTML += createWrapperText(i);
  }
  for (let i = 8; i < 12; i++) {
    wrapper[2].innerHTML += createWrapperText(i);
  }
  for (let i = 12; i < 16; i++) {
    wrapper[3].innerHTML += createWrapperText(i);
  }
};

function addHeaderAction() {
  let pageElement = document.getElementsByClassName("header-item");

  for (let element of pageElement) {
    if (element.text == "home") {
      element.addEventListener("click", function () {
        document.getElementById("main-content").innerHTML = `
          <div class="slider"></div>
          <section class="product"></section>
          <section class="banner"></section>
          <section class="hot_product"></section>
          <section class="new_brand"></section>
          <section class="magazine"></section>
          `;
        createSlider();
        createCardContainer();
        createBanner();
        createHotProduct();
        createNewBrand();
        createMagazine();
      });
    } else if (element.text == "product") {
      element.addEventListener("click", function () {
        document.getElementById("main-content").innerHTML = `
          <div class="carousel"></div>
          <section class="product-page"></section>
        `;
        createCarousel();
        createProduct();
      });
    }
  }
}

renderHome();
addHeaderAction();
