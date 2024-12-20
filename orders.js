// orders.js

// Function to handle order submission
export function submitOrder(cartItems) {
    // For demonstration, we'll log the order to the console.
    // In a real-world scenario, you'd send this data to a server.

    console.log("Order Submitted:");
    cartItems.forEach(item => {
        console.log(`${item.name} - $${item.price}`);
    });

    // Show a confirmation message to the user
    alert("Your order has been successfully placed!");

    // You can reset the cart or take other actions here
    cartItems.length = 0; // Clear the cart
    updateCartDisplay(); // Update the cart display (hide it)
}

