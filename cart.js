// cart.js
let cartItems = [];

export function addToCart(item) {
  cartItems.push(item);
  updateCartCount();
}

export function getCartItems() {
  return cartItems;
}

function updateCartCount() {
  const cartCountElement = document.querySelector('.cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = cartItems.length;
  }
}