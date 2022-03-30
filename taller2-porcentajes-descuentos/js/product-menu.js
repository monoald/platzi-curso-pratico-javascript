
//---------------------------PRODUCTS VAARIABLES----------------------

//  Products object format
const macBookPro = {
    name: "MacBook Pro 16\"",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-16-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1633726244000",
    price: 1999
};

const macBookAir = {
    name: "MacBook Air",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1633726242000",
    price: 999
};

const iPhonePro = {
    name: "iPhone 13 Pro",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13pro-202203?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1644989935267",
    price: 999
};

const iPhone = {
    name: "iPhone 12",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone12purple-202109?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1646335268265",
    price: 599
};

const iPadPro = {
    name: "iPad Pro",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-pro-202108?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1627413382000",
    price: 799
};

const iPadMini = {
    name: "iPad mini",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-ipad-mini-202109?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1630457637000",
    price: 499
};

//  Products grouped in an array
const products = [macBookPro, macBookAir, iPhonePro, iPhone, iPadPro, iPadMini];

//----------------------------EVENTS PRODUCT---------------------------

//  Card variables
const productName = document.getElementById("product__name");
const productImage = document.getElementById("product__image");
const productPrice = document.getElementById("product__price");

//  Menu input product selected
const productSelection = document.getElementById("product-menu");

//  Event listener
productSelection.addEventListener("input", changeProduct);

//  Event to change the card for the actual product specefications
function changeProduct(){

    let selectedProduct = products.find( product => product.name == productSelection.value);

    productName.innerHTML = selectedProduct.name;
    productImage.setAttribute("src", selectedProduct.image);
    productPrice.innerHTML = selectedProduct.price;

    productDiscount.innerHTML = "";
    priceDiscount.innerHTML = "";
}
