// this technique call the de-duplicating the data or normalizing the data

export let cart = JSON.parse(localStorage.getItem('cart')) || [];


function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;

const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

console.log(quantitySelector);

const quantity = Number(quantitySelector.value);

console.log(quantity);


cart.forEach( (cartItem) =>{
  if (productId === cartItem.productId) {
    matchingItem = cartItem;
  }
})

if (matchingItem) {
  matchingItem.quantity += quantity; 
}
else{
  cart.push({
    productId,
    quantity
  })
}

saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

console.log(cart);