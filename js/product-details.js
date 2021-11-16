let page = document.getElementById("product-details")
let img = document.getElementById("product-img")
function render_bigImg() {
   img.innerHTML += `<div class="big-img1">
   <img id="big-img3" src="images/product-details1.jpg">
</div>
<div class="big-img1">
   <img id="big-img4" src="images/product-details2.jpg">
</div>`
}
render_bigImg()
let vaLue = document.getElementById("value")
function renderValue(){
    vaLue.innerHTML += ` <div id="name-product">
    <h3 id="name1">PEACE101</h3>
    <img id="icon1" src="https://static.dosi-in.com/images/assets/icons/verified.svg">
    <h3 id="name2">PEACE UNITED TEE</h3>
    <h3 id="price1">320,000₫</h3>
</div>
<div id="color">
    <h3 id="name1">
        Chọn màu:
    </h3>
    <h3 id="name3">
        Orange
    </h3>
    <h3 id="name4">
        White
    </h3>
</div>
<div id="size">
    <h3 id="size1">
        Chọn Size:
    </h3>
    <h3 id="size2">
        FREESIZE
    </h3>
</div>
<div id="number">
    <h3 id="number1">
        Số lượng:
    </h3>
    <input id="number2" type="text">
</div>`
}
renderValue()
let paint = document.getElementById("painted")
function renderPainted(){
    paint.innerHTML += `
<h3 id="painted1">
    Mô tả :
</h3>
<h3 id="painted1">
    - Unisex, Free size, Cotton 100%, Loose Fit, Made in Vietnam
</h3>`

}
renderPainted()
let aDD = document.getElementById("add")
function renderAdd(){
    aDD.innerHTML += `<h3 id="add1">THÊM VÀO GIỎ HÀNG</h3>`
}
renderAdd()
let painted_4 = document.getElementById("painted4")
function renderPainted_4(){
    painted_4.innerHTML += `PEACE101 SIZE CHART`
}
renderPainted_4()
let table_1 = document.getElementById("table1")
let arrayTable1 = [
    {
        classes : "table2",
        content : "Size"
    },
    {
        classes : "table2",
        content : "Vòng ngực"
    },
    {
        classes : "table2",
        content : "Chiều cao"
    },
    {
        classes : "table2",
        content : "Cân nặng"
    }
]
function renderTable_1(){
    for(let items of arrayTable1){
    table_1.innerHTML +=
    `<th class="`+ items.classes +`">`+ items.content +`</th>`
    }
}
renderTable_1()
let table_3 = document.getElementById("table3")
let arrayTable3 = [
    {
        classes : "table2",
        content : "Free Size"
    },
    {
        classes : "table2",
        content : "120cm"
    },
    {
        classes : "table2",
        content : "155cm - 180cm"
    },
    {
        classes : "table2",
        content : "45kg - 80kg"
    }
]
function renderTable_3(){
    for(let items of arrayTable3){
    table_3.innerHTML +=
    `<th class="`+ items.classes +`">`+ items.content +`</th>`
    }
}
renderTable_3()
let painted5 = document.getElementById("painted5")
function renderPainted_5(){
    painted5.innerHTML += 
    `Áo thun Unisex | Freesize
    <br>
    <br>
    Chất lượng vải thun dày dặn, thoáng mát. Thành phần 100% cotton không pha tạp.
    <br>
    <br>
    Loose fit. Phù hợp khoảng chiều cao 155cm - 180cm, cân nặng 45kg - 80kg.
    <br>
    <br>
    Made in Vietnam`
}
renderPainted_5()
let sameBrand = document.getElementById("same-brand")
function renderSameBrand() {
    sameBrand.innerHTML += `<div>
    <h2 class="tiltle-product">CÙNG THƯƠNG HIỆU</h2>
</div>
<div class="product-list">
    <div class="product">
        <img class="img-product" src="images/cungthuonghieu1.jpg" />
        <h4 class="brand-product">Peace101</h4>
        <h3 class="name-product">BALLOON PEACE UNIT</h3>
        <div class="product-price">
            <span class="price">424,150 ₫</span>
        </div>
    </div>
    <div class="product">
        <img class="img-product" src="images/cungthuonghieu2.jpg" />
        <h4 class="brand-product">Peace101</h4>
        <h3 class="name-product">GIMME YOUR HAND TEE</h3>
        <div class="product-price">
            <span class="price">424,150 ₫</span>
        </div>
    </div>
    <div class="product">
        <img class="img-product" src="images/cungthuonghieu3.jpg" />
        <h4 class="brand-product">Peace101</h4>
        <h3 class="name-product">PEACE UNITED TEE</h3>
        <div class="product-price">
            <span class="price">499,000 ₫</span>
        </div>
    </div>
    <div class="product">
        <img class="img-product" src="images/cungthuonghieu4.jpg" />
        <h4 class="brand-product">Peace101</h4>
        <h3 class="name-product">MINI UNITED TEE</h3>
        <div class="product-price">
            <span class="price">359,100 ₫</span>
        </div>
    </div>
    <div class="product">
        <img class="img-product" src="images/cungthuonghieu5.jpg" />
        <h4 class="brand-product">Peace101</h4>
        <h3 class="name-product">Tee PEACE 102</h3>
        <div class="product-price">
            <span class="price">499,000 ₫</span>
        </div>
    </div>
</div>
<br>
<br>
<div id="same-category">
    <div>
        <h2 class="tiltle-product">CÙNG DANH MỤC</h2>
    </div>
    <div class="product-list">
        <div class="product">
            <img class="img-product" src="images/cungdanhmuc1.jpg" />
            <h4 class="brand-product">BITTER PILLS</h4>
            <h3 class="name-product">ÁO THUN SMOKE trắng</h3>
            <div class="product-price">
                <span class="price">424,150 ₫</span>
            </div>
        </div>
        <div class="product">
            <img class="img-product" src="images/cungdanhmuc2.jpg" />
            <h4 class="brand-product">CLOWNZ</h4>
            <h3 class="name-product">GIMME YOUR HAND TEE</h3>
            <div class="product-price">
                <span class="price">424,150 ₫</span>
            </div>
        </div>
        <div class="product">
            <img class="img-product" src="images/cungdanhmuc3.jpg" />
            <h4 class="brand-product">CLOWNZ</h4>
            <h3 class="name-product">PEACE UNITED TEE</h3>
            <div class="product-price">
                <span class="price">499,000 ₫</span>
            </div>
        </div>
        <div class="product">
            <img class="img-product" src="images/cungdanhmuc4.jpg" />
            <h4 class="brand-product">Hanoi-Riot</h4>
            <h3 class="name-product">MINI UNITED TEE</h3>
            <div class="product-price">
                <span class="price">359,100 ₫</span>
            </div>
        </div>
        <div class="product">
            <img class="img-product" src="images/cungdanhmuc5.jpg" />
            <h4 class="brand-product">MissOut</h4>
            <h3 class="name-product">BONE TEE</h3>
            <div class="product-price">
                <span class="price">499,000 ₫</span>
            </div>
        </div>
        <div class="product">
            <img class="img-product" src="images/cungdanhmuc6.jpg" />
            <h4 class="brand-product">Hades</h4>
            <h3 class="name-product">HADES VINTAGE SNAK</h3>
            <div class="product-price">
                <span class="price">424,150 ₫</span>
            </div>
        </div>
        <div class="product">
            <img class="img-product" src="images/cungdanhmuc7.jpg" />
            <h4 class="brand-product">CLOWNZ</h4>
            <h3 class="name-product">GIMME YOUR HAND TEE</h3>
            <div class="product-price">
                <span class="price">424,150 ₫</span>
            </div>
        </div>
        <div class="product">
            <img class="img-product" src="images/cungdanhmuc8.jpg" />
            <h4 class="brand-product">Nike</h4>
            <h3 class="name-product">PEACE UNITED TEE</h3>
            <div class="product-price">
                <span class="price">499,000 ₫</span>
            </div>
        </div>
        <div class="product">
            <img class="img-product" src="images/cungdanhmuc9.jpg" />
            <h4 class="brand-product">The BEUTER</h4>
            <h3 class="name-product">BEUTER BLANK BLACK</h3>
            <div class="product-price">
                <span class="price">359,100 ₫</span>
            </div>
        </div>
        <div class="product">
            <img class="img-product" src="images/cungdanhmuc10.jpg" />
            <h4 class="brand-product">MADEC</h4>
            <h3 class="name-product">Tee PEACE 102</h3>
            <div class="product-price">
                <span class="price">499,000 ₫</span>
            </div>
        </div>
    </div>
</div>`
}
renderSameBrand()

