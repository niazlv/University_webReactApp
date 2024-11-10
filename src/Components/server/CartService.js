const CART_KEY = 'cart';

export function addToCart(server) {
  let cart = getCartItems();
  cart.push(server);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function getCartItems() {
  const storedCart = localStorage.getItem(CART_KEY);
  return storedCart ? JSON.parse(storedCart) : [];
}

export function removeFromCart(server) {
  let cart = getCartItems();
  cart = cart.filter(item => item.country !== server.country || item.speed !== server.speed);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function isInCart(server) {
    let cart = getCartItems();
    return cart.some(item => item.country === server.country && item.speed === server.speed);
  }