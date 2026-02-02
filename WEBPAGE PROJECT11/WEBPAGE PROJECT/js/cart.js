const cartModal = document.getElementById("cartModal");
const container = document.getElementById("cartItems");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");

function showToast(message, duration = 2000, color = "#4caf50") {
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.style.position = "fixed";
        toast.style.bottom = "20px";
        toast.style.right = "20px";
        toast.style.padding = "10px 15px";
        toast.style.borderRadius = "5px";
        toast.style.color = "white";
        toast.style.opacity = 0;
        toast.style.pointerEvents = "none";
        toast.style.transition = "opacity 0.5s";
        toast.style.zIndex = 1002;
        document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.style.background = color;
    toast.style.opacity = 1;

    setTimeout(() => {
        toast.style.opacity = 0;
    }, duration);
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];


function addToCart(id) {
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
    showToast("✅ Added to cart", 2000, "#4caf50");
    renderCart();
}

function removeFromCart(id) {
    const index = cart.indexOf(Number(id));
    if (index !== -1) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
        showToast("🗑️ Removed from cart", 2000, "#f44336");
    }
}


function renderCart() {
    const totalDiv = document.getElementById("cartTotal");
    container.innerHTML = "";
    totalDiv.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

  
    const counts = {};
    cart.forEach(id => counts[id] = (counts[id] || 0) + 1);

    let total = 0;

    Object.keys(counts).forEach(id => {
        const quantity = counts[id];
        const p = perfumes.find(item => item.id == id);
        if (!p) return;

        const itemTotal = p.price * quantity;
        total += itemTotal;

        const div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
   <img src="${p.imageUrl}" alt="${p.name}">
   <span>${p.name} ${quantity > 1 ? `(${quantity})` : ""} - $${itemTotal}</span>
   <button>Remove</button>
`;


        div.querySelector("button").addEventListener("click", () => removeFromCart(id));

        container.appendChild(div);
    });

    totalDiv.innerText = `Total: $${total}`;
}


openCartBtn.addEventListener("click", () => {
    renderCart();
    cartModal.style.display = "flex";
});

closeCartBtn.addEventListener("click", () => {
    cartModal.style.display = "none";
});


cartModal.addEventListener("click", e => {
    if (e.target === cartModal) cartModal.style.display = "none";
});


renderCart();