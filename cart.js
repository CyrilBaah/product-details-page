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
    // console.log(productQuantity);
    updatePrice(productQuantity);
}

deleteCart = () => {
    document.getElementById('cart-delete').remove();

}


