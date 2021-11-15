export function createFooter() {
  let footer = document.querySelector(".footer");

  footer.innerHTML = `
    <div class="service">
      <div class="service-item">
        <p>100% HÀNG CHÍNH HÃNG</p>
        <span>CAM KÊT CHÍNH HIỆU</span>
      </div>
      <div class="service-item">
        <p>300+ LOCAL BRAND</p>
        <span>QUY TỤ TẠI DOSI-IN.COM</span>
      </div>
      <div class="service-item">
        <p>TIN TỨC THỜI TRANG</p>
        <span>CẬP NHẬT MỖI NGÀY</span>
      </div>
    </div>
    <div class="content">
      <div class="content-item">
        <img
          src="./images/dosiin-logo.png"
          alt="logo"
          width="90px"
          height="33px"
        />
        <p>Hotline: 1900.636.602</p>
        <span class="time">(8h-20h từ thứ 2 đến Chủ nhật)</span>
        <p>Email: customer@dosiinvn.com</p>
        <div class="icon">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-instagram-square"></i>
          <i class="fab fa-youtube"></i>
        </div>
        <a href="#"
          ><img
            src="./images/bo-cong-thuong.png"
            alt=""
            width="150px"
            height="57px"
        /></a>
      </div>
      <div class="content-item">
        <h2>VỀ DOSIIN</h2>
        <a href="#">Các điều khoản khác</a>
        <a href="#">Hợp tác</a>
        <a href="#">Hỏi và Đáp</a>
        <a href="#">Hạn chế về thời gian và quản lý</a>
        <a href="#">Nghĩa vụ của người bán</a>
        <a href="#">Nghĩa vụ của khách hàng</a>
        <a href="#">Chính sách vận chuyển</a>
        <a href="#">Mua hàng trong thời gian giãn cách</a>
      </div>
      <div class="content-item">
        <h2>NỘI DUNG CHÍNH SÁCH</h2>
        <a href="#">Chính sách bảo mật</a>
        <a href="#">Điều khoản dịch vụ</a>
        <a href="#">Chính sách thành viên</a>
        <a href="#">Chính sách đổi trả hàng</a>
        <a href="#">Chính sách thanh toán</a>
        <a href="#">Chính sách bảo mật thanh toán</a>
        <a href="#">Chính sách dành cho khách hàng</a>
        <a href="#">Chính sách bảo hành sản phẩm</a>
        <a href="#">Mua Trước Trả Sau</a>
      </div>
      <div class="content-item">
        <h2>CÁCH THỨC THANH TOÁN</h2>
        <div class="payment">
          <div class="payment-item">
            <span class="cash">MOMO PAYMENT</span>
            <span class="cash">CASH ON DELIVERY</span>
          </div>
          <div class="payment-item">
            <span class="cash">VISA, MASTER, JCB PAYMENT</span>
          </div>
          <div class="payment-item">
            <span class="cash">ATM PAYMENT</span>
            <span class="cash">REE-PAY</span>
          </div>
        </div>
        <h2 class="partner">ĐỐI TÁC VẬN CHUYỂN</h2>
        <img
          class="company"
          src="./images/giaohangtietkiem.jpg"
          alt=""
          width="140px"
          height="25px"
        />
        <img
          class="company"
          src="./images/DHL_eCommerce_200px.png"
          alt=""
          width="140px"
          height="25px"
        />
        <img
          class="company"
          src="./images/jnt.jpg"
          alt=""
          width="140px"
          height="25px"
        />
      </div>
      <div class="content-item">
        <h2>ĐĂNG KÝ NHẬN KHUYẾN MÃI</h2>
        <div class="email">
          <input type="text" value="Nhập địa chỉ email" />
          <button type="submit">ĐĂNG KÝ</button>
        </div>
        <span class="time"
          >Đăng ký để nhận được tin khuyến mãi trong thời gian sớm nhất</span
        >
        <h2 class="download">TẢI NGAY APP DOSIIN</h2>
        <div class="app">
          <a href="#"
            ><img
              src="./images/app-ios.png"
              alt=""
              width="126px"
              height="42px"
          /></a>
          <a href="#"
            ><img
              src="./images/app-android.png"
              alt=""
              width="141px"
              height="42px"
          /></a>
        </div>
      </div>
    </div>
    <div class="license">
    <div class="license-item">
      <p>CÔNG TY TNHH DOSIIN</p>
      <p>
        GPĐKKD: 0314119937 do Sở KH và ĐT TPHCM cấp ngày 18 tháng 11 năm 2016
      </p>
      <p>Đăng ký thay đổi lần thứ 3, ngày 24 tháng 06 năm 2021</p>
      <p>68/21 Hoàng Diệu, Phường 12, Quận 4, Thành phố Hồ Chí Minh</p>
    </div>
    <div class="license-item">
      <p>
        Copyright 2015-2020 ©<b
          ><a href="#" title="dosi-in.com"> CÔNG TY TNHH DOSIIN</a></b
        >
      </p>
    </div>
  </div>
  `;
}
