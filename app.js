let quantityValue = parseInt(document.getElementById("quantity").value);


closeSlider = () => {
    document.getElementById('slider').style.width = 0;
}

openSlider = () => {
    document.getElementById('slider').style.width = "20em";
}

decreaseQuantity = () => {
    if (quantityValue > 1) {
        quantityValue -= 1;
        document.getElementById("quantity").value = quantityValue;
    }
}

increaseQuantity = () => {
    if (quantityValue < 100) {
        quantityValue += 1;
        document.getElementById("quantity").value = quantityValue;
    }
}