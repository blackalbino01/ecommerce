// Add items to cart
const addToCart = (btn) => {
    btn.classList.replace('btn-primary', 'btn-secondary');
    btn.textContent = 'REMOVE FROM CART';
}