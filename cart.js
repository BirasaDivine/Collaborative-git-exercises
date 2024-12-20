// cart.js

// Array to store cart items
let cartItems = [];

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear current items

    // Add cart items to the cart container
    cartItems.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(itemElement);
    });

    // Show cart if there are items
    const cart = document.getElementById('cart');
    if (cartItems.length > 0) {
        cart.style.display = 'block';
    } else {
        cart.style.display = 'none';
    }
}

// Add event listener to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productItem = event.target.closest('.product-item'); // Find the closest product item
        const productName = productItem.getAttribute('data-name');
        const productPrice = productItem.getAttribute('data-price');

        // Add the item to the cart array
        cartItems.push({ name: productName, price: productPrice });

        // Update the cart display
        updateCartDisplay();
    });
});

// Checkout functionality (for demonstration purposes)
document.getElementById('checkout-button').addEventListener('click', () => {
    // Here, we send cart items to orders.js for processing the order
    if (cartItems.length > 0) {
        processOrder(cartItems);
    } else {
        alert("Your cart is empty!");
    }
});

// Function to process the order (calls orders.js logic)
function processOrder(cartItems) {
    // Call the function in orders.js to handle the order submission
    import('./orders.js').then(orders => {
        orders.submitOrder(cartItems);
    });
}

