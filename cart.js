let db = JSON.parse(localStorage.getItem('selectedProductDetails'));

let productName = db.name;
let productQuantity = db.quantity;
let productImage = db.image;
let productSize = db.size;
let productColor = db.color;
const productPrice = 70;

// Cart Details
document.getElementById('cart-productname').innerHTML = productName;
document.getElementById('cart-productquantity').value = productQuantity;
document.getElementById('cart-productcolor').innerHTML = productColor;
document.getElementById('cart-productimage').src = productImage;
document.getElementById('cart-productsize').innerHTML = productSize;
document.getElementById('cart-unitprice').innerHTML = productQuantity * productPrice;
document.getElementById('cart-totalprice').innerHTML = productQuantity * productPrice;
document.getElementById('checkout-subtotal').innerHTML = productQuantity * productPrice;
document.getElementById('checkout-total').innerHTML = productQuantity * productPrice;

updatePrice = (value) => {
    const productPrice = 70;
    document.getElementById('cart-unitprice').innerHTML = value * productPrice;
    document.getElementById('cart-totalprice').innerHTML = value * productPrice;
    document.getElementById('checkout-total').innerHTML = value * productPrice;
    document.getElementById('checkout-subtotal').innerHTML = value * productPrice;
}

updateQuantity = () => {
    let productQuantity = document.getElementById('cart-productquantity').value;
    document.getElementById('checkout-discount').innerHTML = 0;
    document.getElementById('checkout-marquee').innerHTML = "";
    document.getElementById('coupon').value = "";

    updatePrice(productQuantity);
}

deleteCart = () => {
    document.getElementById('cart-delete').remove();
    document.getElementById('checkout-discount').innerHTML = "";
    document.getElementById('checkout-subtotal').innerHTML = "";
    document.getElementById('checkout-total').innerHTML = "";

}

discountCoupon = (code) => {
    const codeTwentyPercent = "20Percent%";
    const codeThirtyPercent = "30Percent%";
    const codeFortyPercent = "40Percent%";
    const codeFiftyPercent = "50Percent%";

    const codeTwentyPercentValue = 0.2;
    const codeThirtyPercentValue = 0.3;
    const codeFortyPercentValue = 0.4;
    const codeFiftyPercentValue = 0.5;

    let subTotal = document.getElementById('checkout-subtotal').innerHTML;
    let twentyTotal = subTotal - (subTotal * codeTwentyPercentValue);
    let thirtyTotal = subTotal - (subTotal * codeThirtyPercentValue);
    let fortyTotal = subTotal - (subTotal * codeFortyPercentValue);
    let fiftyTotal = subTotal - (subTotal * codeFiftyPercentValue);

    switch (code) {
        case codeTwentyPercent:
            document.getElementById('checkout-subtotal').innerHTML = subTotal;
            document.getElementById('checkout-discount').innerHTML = "20%";
            document.getElementById('checkout-total').innerHTML = twentyTotal;
            document.getElementById('checkout-marquee').innerHTML = `<marquee direction="">Amount to be paid is $${twentyTotal}</marquee>`;
            break;

        case codeThirtyPercent:
            document.getElementById('checkout-subtotal').innerHTML = subTotal;
            document.getElementById('checkout-discount').innerHTML = "30%";
            document.getElementById('checkout-total').innerHTML = thirtyTotal;
            document.getElementById('checkout-marquee').innerHTML = `<marquee direction="">Amount to be paid is $${thirtyTotal}</marquee>`;
            break;

        case codeFortyPercent:
            document.getElementById('checkout-subtotal').innerHTML = subTotal;
            document.getElementById('checkout-discount').innerHTML = "40%";
            document.getElementById('checkout-total').innerHTML = fortyTotal;
            document.getElementById('checkout-marquee').innerHTML = `<marquee direction="">Amount to be paid is $${fortyTotal}</marquee>`;
            break;

        case codeFiftyPercent:
            document.getElementById('checkout-subtotal').innerHTML = subTotal;
            document.getElementById('checkout-discount').innerHTML = "50%";
            document.getElementById('checkout-total').innerHTML = fiftyTotal;
            document.getElementById('checkout-marquee').innerHTML = `<marquee direction="">Amount to be paid is $${fiftyTotal}</marquee>`;
            break;

        default:
            document.getElementById('checkout-marquee').innerHTML = `<marquee direction="">Invalid Code</marquee>`;
            break;
    }
}

discount = () => {
    let discountCode = document.getElementById('coupon').value;
    discountCoupon(discountCode);
}