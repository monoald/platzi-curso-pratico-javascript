//--------------------------------SHOW COUPON INPUT---------------

//  Function to validate the coupon 

//  Coupon link variable
const couponText = document.getElementById("coupon__text");
const couponSection = document.getElementById("coupon__section");

//  Event lister
couponText.addEventListener("click", showCouponInput);

//  Event to show the coupon input section
function showCouponInput() {
    couponText.setAttribute("style", "display: none");
    couponSection.setAttribute("style", "display: grid");
}

//------------------------------APPLY DISCOUNT--------------------

//  Coupons on an array
const coupons = [{code: "platzi10", disocunt:10}, {code: "monegro30", discount:30}, {code: "juandc15", discount: 15}, {code: "surprise", discount: 18}];
