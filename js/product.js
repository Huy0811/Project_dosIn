let male_option_list = [
  {
    type: "ÁO KHOÁC",
  },
  {
    type: "ÁO THUN",
  },
  {
    type: "QUẦN",
  },
  {
    type: "GIÀY / DÉP",
  },
  {
    type: "ÁO SWEATER",
  },
  {
    type: "ÁO HOODIE",
  },
  {
    type: "ÁO SƠ MI",
  },
  {
    type: "ÁO CỔ TRỤ",
  },
  {
    type: "ĐỒ BƠI",
  },
];

let female_option_list = [
  {
    type: "VÁY",
  },
  {
    type: "JUMPSUIT",
  },
  {
    type: "ÁO KHOÁC",
  },
  {
    type: "ÁO THUN",
  },
  {
    type: "ĐẦM",
  },
  {
    type: "Áo DÂY",
  },
  {
    type: "QUẦN",
  },
  {
    type: "ÁO SWEATER",
  },
  {
    type: "ÁO HOODIE",
  },
];

let product_list = [
  {
    imgSrc: "./images/product-1.jpg",
    brand: "CHODOLE",
    name: "Áo thun unisex cotton 100%  in chữ Get Shit Done (xanh dương)",
    price: "215,000₫",
  },
  {
    imgSrc: "./images/product-2.jpg",
    brand: "LUNACY",
    name: "Áo thun tay lỡ D.REW FACE phông Unisex nam nữ Cotton oversize form rộng LUNACY TB06",
    price: "169,000₫",
  },
  {
    imgSrc: "./images/product-3.jpg",
    brand: "PREMIER",
    name: "[FT0028] Áo thun FLIPPER OVSZ ILLU Wide Logo (Đen)",
    price: "199,000₫",
  },
  {
    imgSrc: "./images/product-4.jpg",
    brand: "KAK",
    name: "Áo amazing đơn giản phản quang 7 màu 2020 - LITH23112001",
    price: "179,000₫",
  },
  {
    imgSrc: "./images/product-5.jpg",
    brand: "CHODOLE",
    name: "ÁO THUN UNISEX COTTON 100% IN HÌNH DEATH IS NOT THE END, NEVER GIVE UP  ( navy)",
    price: "189,000₫",
  },
  {
    imgSrc: "./images/product-6.jpg",
    brand: "TRENDIVISION",
    name: "Hand of Vision T-shirt trắng",
    price: "350,000₫",
  },
  {
    imgSrc: "./images/product-7.jpg",
    brand: "KAK",
    name: "Áo thun big city girl lào cai -LIKA08092008  - trắng",
    price: "149,000₫",
  },
  {
    imgSrc: "./images/product-8.jpg",
    brand: "CLOWNZ",
    name: "[FULLTAG CHÍNH HÃNG] Áo thun tay lỡ unisex họa tiết xe đua ClownZ Racing T-shirt form rộng, chất cotton",
    price: "379,050",
  },
  {
    imgSrc: "./images/product-9.jpg",
    brand: "KENSTYLE",
    name: "LOGO CUTE-TEE KENSTYLE",
    price: "175,000₫",
  },
  {
    imgSrc: "./images/product-10.jpg",
    brand: "KAK",
    name: "Áo halloween phát sáng bộ xương mèo - LIKA08102009- đen",
    price: "199,000₫",
  },
  {
    imgSrc: "./images/product-11.jpg",
    brand: "GRIMM DC",
    name: "Áo Grimm DC Essential // Xanh",
    price: "199,000₫",
  },
  {
    imgSrc: "./images/product-12.jpg",
    brand: "KAK",
    name: "Áo thun hình vương miệng queen - KATHCP002 - Trắng",
    price: "190,000₫",
  },
  {
    imgSrc: "./images/product-13.jpg",
    brand: "The Brazy",
    name: "Brazy dream",
    price: "295,000₫",
  },
  {
    imgSrc: "./images/product-14.jpg",
    brand: "SUN",
    name: "Áo Thun Gấu",
    price: "199,000₫",
  },
  {
    imgSrc: "./images/product-15.jpg",
    brand: "MYO",
    name: "Áo Thun Thêu Chuột Hamster Trắng",
    price: "270,000₫",
  },
  {
    imgSrc: "./images/product-16.jpg",
    brand: "LEVENTS",
    name: "LEVENTS® RAGLAN SPACE TEE / PINK",
    price: "245,000₫",
  },
  {
    imgSrc: "./images/product-17.jpg",
    brand: "Icon Denim",
    name: "Áo Thun Salamnca",
    price: "300,000₫",
  },
  {
    imgSrc: "./images/product-18.jpg",
    brand: "MVR Marverick",
    name: "Áo noel tuần lộc dễ thương - LITH25092029",
    price: "221,000₫",
  },
  {
    imgSrc: "./images/product-19.jpg",
    brand: "CLOWNZ",
    name: "[FULLTAG CHÍNH HÃNG] Áo ClownZ pop art",
    price: "331,550₫",
  },
  {
    imgSrc: "./images/product-20.jpg",
    brand: "TINDERELLA",
    name: "TDRL BASIC TEE (Yellow)",
    price: "196,000₫",
  },
];

export function createCarousel() {
  let carousel = document.querySelector(".carousel");

  carousel.innerHTML = `
  <div class="swiper mySwiper3">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="images/slider-4.jpg" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="images/slider-5.jpg" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="images/slider-6.jpg" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="images/slider-7.jpg" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="images/slider-8.jpg" alt="" />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
  `;

  let swiper = new Swiper(".mySwiper3", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

export function createProduct() {
  let product = document.querySelector(".product-page");

  product.innerHTML = `
    <p>Sản phẩm</p>
    <div class="product-wrapper">
      <div class="product-selection">
        <div class="product-sidebar">
          <div class="category-group">
            <div class="category-header">
              <h4>
                <a href="#">NAM</a>
              </h4>
            </div>
            <ul class="category-option male-option" id="option"></ul>
          </div>
          <div class="category-group">
            <div class="category-header">
               <h4>
                <a href="#">NỮ</a>
              </h4>
            </div>
            <ul class="category-option female-option" id="option"></ul>
          </div>
        </div>
      </div>
      <div class="product-content">
        <div class="product-filter">
          <div class="part">
            <h4>Thương hiệu:</h4>
            <div class="brand-list">
              <a href="#">1-OAK</a>
              <a href="#">AOKAIE</a>
              <a href="#">BADHABITS</a>
              <a href="#">BIRDYBAG</a>
              <a href="#">BILLION DREAMERS</a>
              <a href="#">CLOWNZ</a>
              <a href="#">DEERANDI</a>
              <a href="#">DON GIAN BRAND</a>
              <a href="#">DRIFTOUT</a>
            </div>
          </div>
          <div class="part">
            <h4>Mức giá:</h4>
            <div class="price-list">
              <a href="#">Dưới - 200,000₫</a>
              <a href="#">200,000₫ - 500,000₫</a>
              <a href="#">500,000₫ - 700,000₫</a>
              <a href="#">700,000₫ - 1,000,000₫</a>
              <a href="#">Trên 1,000,000₫</a>
              <a href="#">99,000₫ - 149,000₫</a>
              <a href="#">Dưới - 300,000₫</a>
              <a href="#">Dưới - 250,000₫</a>
            </div>
          </div>
          <div class="part sort_by">
            <h4>Sắp xếp:</h4>
            <div class="trending-list">
              <a href="#">Thấp đến cao</a>
              <a href="#">Cao đến thấp</a>
              <a href="#">Mới nhất</a>
              <a href="#">Phổ biến nhất</a>
              <a href="#">Giảm giá nhiều nhất</a>
            </div>
          </div>
        </div>
        <div class="product-list">
          <div class="product-row"></div>
          <div class="product-row"></div>
          <div class="product-row"></div>
          <div class="product-row"></div>
          <div class="product-row"></div>
        </div>
      </div>
    </div>
  `;

  let maleOptionList = document.querySelector(".male-option");
  let femaleOptionList = document.querySelector(".female-option");

  for (let item of male_option_list) {
    maleOptionList.innerHTML +=
      `
    <li class="item">
      <h4>
        <a href="#">` +
      item.type +
      `</a>
      </h4>
    </li>
    `;
  }

  for (let item of female_option_list) {
    femaleOptionList.innerHTML +=
      `
    <li class="item">
      <h4>
        <a href="#">` +
      item.type +
      `</a>
      </h4>
    </li>
    `;
  }

  let productRow = document.querySelectorAll(".product-row");
  function createProductItem(i) {
    return (
      `
    <div class="product-item">
      <a href="#" class="image">
        <img src="` +
      product_list[i].imgSrc +
      `" alt="" />
      </a>
      <div class="product-desc">
        <div class="product-brand">
          <a href="#">` +
      product_list[i].brand +
      `</a>
        </div>
        <h4 class="product-name">
          <a href="#">` +
      product_list[i].name +
      `</a>
        </h4>
        <div class="product-price">
          <p>` +
      product_list[i].price +
      `</p>
        </div>
      </div>
    </div>
    `
    );
  }

  for (let i = 0; i < 4; i++) {
    productRow[0].innerHTML += createProductItem(i);
  }
  for (let i = 4; i < 8; i++) {
    productRow[1].innerHTML += createProductItem(i);
  }
  for (let i = 8; i < 12; i++) {
    productRow[2].innerHTML += createProductItem(i);
  }
  for (let i = 12; i < 16; i++) {
    productRow[3].innerHTML += createProductItem(i);
  }
  for (let i = 16; i < 20; i++) {
    productRow[4].innerHTML += createProductItem(i);
  }
}
