var productContainer = document.getElementById("products") // Serach bar 
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")
search.addEventListener("keyup", function(){
var enteredValue = event.target.value.toUpperCase()
for(count=0; count<productlist.length;count=count+1)
{
var productname = productlist[count].querySelector("h5").textContent
if(productname.toUpperCase().indexOf(enteredValue) <0)
{
productlist[count].style.display="none"
}
else{
productlist[count].style.display="block"
}
}
})

function sendValues(productNumber) {
    const productName = document.getElementById(`productName${productNumber}`).innerText;
    const productPrice = document.getElementById(`productPrice${productNumber}`).innerText;

    localStorage.setItem('productName', productName);
    localStorage.setItem('productPrice', productPrice);

    window.location.href = 'order.html';
}


// Add to Cart Script
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    function addToCart(productName, price) {
        cart.push({ name: productName, price: price });
        total += price;

        updateCart();
        saveCartToLocalStorage();
    }

    function updateCart() {
        const cartList = document.getElementById('cart');
        const totalElement = document.getElementById('total');

        // Clear previous cart
        cartList.innerHTML = '';

        // Populate the cart
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartList.appendChild(listItem);
        });

        // Update total
        totalElement.textContent = total.toFixed(2);
    }

    function toggleCart() {
        const cartContainer = document.getElementById('cartContainer');
        const container = document.querySelector('.container');

        // Toggle visibility of the cart
        if (cartContainer.style.display === 'none' || cartContainer.style.display === '') {
            cartContainer.style.display = 'block';
            container.style.opacity = '0.7'; // Dim the background
        } else {
            cartContainer.style.display = 'none';
            container.style.opacity = '1'; // Restore background opacity
        }
    }

    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }