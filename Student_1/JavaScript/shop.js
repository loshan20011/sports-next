let cartIcon = document.getElementsByClassName('bag1')[0];
let cart = document.getElementsByClassName('myCart')[0];
let closeCartIcon = document.getElementsByClassName('bag2')[0];
let background = document.getElementsByClassName('bg')[0];  

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
}
else {
    ready();
}

// ready function

function ready(){
    // opens the cart
    cartIcon.onclick = () => {
    cart.classList.add("active");
    background.classList.add('activate');
    }

    // closes the cart
    closeCartIcon.onclick = () => {
    cart.classList.remove("active");
    background.classList.remove("activate");
    }

    if (localStorage.getItem('cart') === 'true') {
        cart.classList.add("active");
        background.classList.add('activate');
        localStorage.setItem('cart', 'false');
    }

    updating_total();

    var removeCartProductBtn = document.getElementsByClassName("remove");
    for (var i = 0; i < removeCartProductBtn.length; i++){
        var btn = removeCartProductBtn[i];
        btn.addEventListener("click", removeCartProduct);
    }

    // changing made in quantity 

    var quantityValue = document.getElementsByClassName("quantity");
    for (var i = 0; i < quantityValue.length; i++) {
        var values = quantityValue[i];
        values.addEventListener("change", quantityUpdate);
    }

    // add items to cart

    var addProduct = document.getElementsByClassName("cart");
    for (var i = 0; i < addProduct.length; i++) {
        var btn = addProduct[i];
        btn.addEventListener("click", addCartProduct);
    }

    // proceed button

    // setting the total amount to local storage to take to another website
    var proceedBtn = document.getElementsByClassName('proceed')[0];
    proceedBtn.addEventListener('click', placeOrder);

    // clear button on cart

    var clearBtn = document.getElementById('clear');
    clearBtn.addEventListener('click', clearCart);

}


// removing product from cart
function removeCartProduct(event){
    var btnClicked = event.target;
    btnClicked.parentElement.remove();
    updating_total();
}

function quantityUpdate(event){
    var values = event.target;
    if (isNaN(values.value) || values.value <= 0){
        values.value = 1;
    }
    updating_total();
}

function placeOrder(event){
    var btnClicked = event.target;
    var cartItem = document.getElementsByClassName('cart-item');
    // if no item added to cart, no div created under cart item element, so it will be undefined.
    if (cartItem[0] === undefined) {
        alert ('No products added to cart');
    } else {
        var total = document.getElementById('total').innerText;
        localStorage.setItem("total", total);
        window.location.assign("checkout.html")
    }
}

// adding product to cart

function addCartProduct(event){
    var btn = event.target;
    var product = btn.parentElement.parentElement;
    var productName = product.getElementsByClassName("title")[0].innerText;
    var productPrice = product.getElementsByClassName("product-price")[0].innerText;
    var productImg = product.getElementsByClassName("img")[0].src;
    productPrice = parseFloat(productPrice.replace("$",""));
    addProductToCart(productName, productPrice, productImg);
    updating_total();

    cart.classList.add("active");
    background.classList.add('activate');
}

function addProductToCart(productName, productPrice, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-item");
    var cartDivision = document.getElementsByClassName("cart-division")[0];
    var cartProductNames = cartDivision.getElementsByClassName("product-name");
    for (var i = 0; i < cartProductNames.length; i++){
        if (cartProductNames[i].innerText == productName){
            alert ('Item is already added to the cart');
            return;
        }
    }

    var cartShopBoxContent = `
    <input type="button" value="REMOVE" class="remove">
    <img src=${productImg}>
    <span class="product-name">${productName}</span>
    <Span class="price">$ ${productPrice}</Span>
    <input type="number" value="1" class="quantity">
    <Span class="sub-total">60$</Span>`

    cartShopBox.innerHTML = cartShopBoxContent;
    cartDivision.append(cartShopBox);

    cartShopBox.getElementsByClassName("remove")[0].addEventListener("click", removeCartProduct);
    cartShopBox.getElementsByClassName("quantity")[0].addEventListener("change", quantityUpdate);
}

function clearCart(event){
    var clearProducts = event.target;
    var cartDivision = document.getElementsByClassName("cart-division")[0];
    var cart = cartDivision.getElementsByClassName('cart-item');
    var cartLength = cart.length;
    // cartLength will take the count of cart products at the moment and loops, even product removed from the cart stil loop run 
    if (cartLength == 0){
        alert('cart already empty');
    } else {
        for (var i = 0; i < cartLength; i++){
            cart[0].remove();
            // if a product removed at 0 index, next product comes to 0th index.
        }
    }
    updating_total();
}

function updating_total(){
    var totalPrice = 0;    
    var cartItems = document.getElementsByClassName("cart-item");

    if (cartItems.length == 0) {
        var total = document.getElementById("total");
        total.innerText = "$ 0";
    } 
    else {
        for (let index = 0; index < cartItems.length; index++) {
            var total = document.getElementById("total"); 
            var quantity = document.getElementsByClassName("quantity")[index].value;
            quantity = parseFloat(quantity);

            var priceElement = document.getElementsByClassName("price")[index];
            var price = parseFloat(priceElement.innerText.replace("$",""));
            var subTotal = (quantity*price); 

            var subTotalElement = document.getElementsByClassName("sub-total")[index];
            subTotalElement.innerText = ("$ "+subTotal);
            totalPrice = totalPrice +subTotal;

            var shippingElement = document.getElementById("shipping").innerText;
            var shipping = parseFloat(shippingElement.replace("$",""));
            var discount = document.getElementById("discount");
            total.innerText = "$ "+(totalPrice + shipping);
        }
    }
}    
