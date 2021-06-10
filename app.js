let quantityValue = parseInt(document.getElementById('quantity').value);


closeSlider = () => {
    document.getElementById('slider').style.width = 0;
}

selectedItems = () => {
    let selectedQuantity = parseInt(document.getElementById('quantity').value);
    let cartTotal = document.getElementById('slider-price').innerHTML = selectedQuantity * 70;
    document.getElementById('slider-quantity').innerHTML = selectedQuantity;
    document.getElementById('cart-total').innerHTML = `$ ${cartTotal}`;
}

openSlider = () => {
    document.getElementById('slider').style.width = '20em';
    selectedItems();
}

decreaseQuantity = () => {
    if (quantityValue > 1) {
        quantityValue -= 1;
        document.getElementById('quantity').value = quantityValue;
        document.getElementById('selectedQuantity').innerHTML = quantityValue;
    }
}

increaseQuantity = () => {
    if (quantityValue < 100) {
        quantityValue += 1;
        document.getElementById('quantity').value = quantityValue;
        document.getElementById('selectedQuantity').innerHTML = quantityValue;
    }
}