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
    document.getElementById('checkout-marquee').innerHTML = "";
    document.getElementById('coupon').value = "";

}

discount = () => {
    const codeFiftyPercentValue = 0.5;
    let subTotal = document.getElementById('checkout-subtotal').innerHTML;
    let fiftyTotal = subTotal - (subTotal * codeFiftyPercentValue);

    let discountCode = document.getElementById('coupon').value;
    if (discountCode.length > 5) {
        document.getElementById('checkout-subtotal').innerHTML = subTotal;
        document.getElementById('checkout-discount').innerHTML = "50%";
        document.getElementById('checkout-total').innerHTML = fiftyTotal;
        document.getElementById('checkout-marquee').innerHTML = `<marquee direction="">Amount to be paid is $${fiftyTotal}</marquee>`;
    } else {
        document.getElementById('checkout-marquee').innerHTML = `<marquee direction="">Invalid Code</marquee>`;
    }

}