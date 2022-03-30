//------------------------------FUNCTIONS------------------------------

//  Function to calculate the price with discount
const calculateDiscountedPrice = (price, discount) => {
    return ( price * ( 100 - discount ) ) / 100;
}; 

//---------------------------EVENTS DISCOUNT----------------------------

//  Card variables
const productDiscount = document.getElementById("product__discount");
const priceDiscount = document.getElementById("price__discount");

//  Discount input & button variables
const discountInput = document.getElementById("discount");
const button = document.getElementById("button");
const couponInput = document.getElementById("coupon");


//  Event listener
button.addEventListener("click", applyDiscount);

//  Event to show the discount applied
function applyDiscount(){

    const manualDiscount = parseInt(discountInput.value);

    const price = parseInt(productPrice.textContent);

    const couponDiscount = couponInput.value;

    let finalPrice;

    let discount;

    if ( isNaN(manualDiscount) && couponDiscount == '' ) {
        //  Fill the required gaps

        alert("A value is missing, fill the requiered gaps.");

        return 0;

    } else if ( !isNaN(manualDiscount) && !couponDiscount == '' ) {
        //  Both discounts filled

        alert("You can apply only one discount");

        return 0;
    } else if ( couponDiscount == '' ) {
        //  Manual discount applied

        finalPrice = calculateDiscountedPrice(price, manualDiscount);

        discount = manualDiscount;
        
    } else {
        //  Coupon discount applied
        
        let validCoupon = coupons.find( coupon => coupon.code == couponDiscount );
        
        if (validCoupon == undefined) {
            //  Invalid coupon

            alert("Sorry bro, but your coupon is not valid.");

            return 0;

        } else {
            //  Valid coupon
            
            validCoupon = validCoupon.discount;

            finalPrice = calculateDiscountedPrice(price, validCoupon);

            discount = validCoupon;
        }

    }

    productDiscount.innerHTML = `${discount}% off`;
    productPrice.innerHTML = `<del>${price}</del>`;
    priceDiscount.innerHTML = `$ ${finalPrice}`;
}