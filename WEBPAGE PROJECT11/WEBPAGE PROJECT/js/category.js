
const grid = document.getElementById("perfumeGrid");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const favoritesGrid = document.getElementById("favoritesGrid");


let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function renderPerfumes(list) {
    
    grid.innerHTML = "";

    list.forEach(p => {
p.season = Array.isArray(p.season) ? p.season : [p.season];
p.longevity = Array.isArray(p.longevity) ? p.longevity : [p.longevity];

        const card = document.createElement("div");
        card.className = "perfume-card";

        const favText = favorites.includes(String(p.id)) ? "❤️ Favorited" : "🤍 Add to Favorites";

       card.innerHTML = `
    <img src="${p.imageUrl}">
    <h4>${p.name}</h4>
    <p>$${p.price}</p>
    <button onclick="openModal(${p.id})">View</button>
    <button onclick="addToCart(${p.id})">Buy</button>
    <button class="fav-btn" data-id="${p.id}">${favText}</button>
`;

        grid.appendChild(card);
    });

    document.querySelectorAll(".fav-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = String(btn.getAttribute("data-id"));
            if (!favorites.includes(id)) {
                favorites.push(id);
                btn.textContent = "❤️ Favorited";
            } else {
                favorites = favorites.filter(f => f !== id);
                btn.textContent = "🤍 Add to Favorites";
            }

            localStorage.setItem("favorites", JSON.stringify(favorites));
            renderFavorites(); 
        });
    });
}


function renderFavorites() {
    favoritesGrid.innerHTML = "";

    if (favorites.length === 0) {
        favoritesGrid.innerHTML = "<p>No favorites yet.</p>";
        return;
    }

    favorites.forEach(id => {
        const p = perfumes.find(x => x.id === Number(id));
        if (!p) return;

        const card = document.createElement("div");
        card.className = "perfume-card";

        card.innerHTML = `
            <img src="${p.imageUrl}">
            <h4>${p.name}</h4>
            <p>$${p.price}</p>
            <button onclick="openModal(${p.id})">View</button>
            <button onclick="addToCart(${p.id})">Buy</button>
            <button class="remove-fav-btn" data-id="${p.id}">❌ Remove</button>
        `;

        favoritesGrid.appendChild(card);
    });

    document.querySelectorAll(".remove-fav-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = String(btn.getAttribute("data-id"));
            favorites = favorites.filter(f => f !== id);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            renderFavorites();
            renderPerfumes(perfumes); 
        });
    });
}


function openModal(id) {
    const p = perfumes.find(x => x.id === id);
    if (!p) return;

    modalContent.innerHTML = `
        <h2>${p.name}</h2>
        <img src="${p.imageUrl}" style="max-width:200px">
        <p><strong>Brand:</strong> ${p.brand}</p>
        <p><strong>Gender:</strong> ${p.gender}</p>
        <p><strong>Season:</strong> ${p.season}</p>
        <p><strong>Longevity:</strong> ${p.longevity}</p>
        <p><strong>Price:</strong> $${p.price}</p>

        <button onclick="addToCart(${p.id})">Buy</button>
        <button onclick="closeModal()">Close</button>
    `;

    modal.style.display = "flex";
}


function closeModal() {
    modal.style.display = "none";
}

        function applySidebarFilters() {
    const brand = document.getElementById("brandFilter").value;
    const maxPrice = Number(document.getElementById("priceFilter").value);

    const searchInput = document.getElementById("searchInput");
    const searchText = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    const genderFilters = Array.from(
        document.querySelectorAll("input.gender:checked")
    ).map(c => c.value);

    const seasonFilters = Array.from(
        document.querySelectorAll("input.season:checked")
    ).map(c => c.value.toLowerCase());

    const longevityFilters = Array.from(
        document.querySelectorAll("input.longevity:checked")
    ).map(c => c.value.toLowerCase());

    const filtered = perfumes.filter(p => {

        if (brand !== "all" && p.brand !== brand) return false;

        if (p.price > maxPrice) return false;

        if (genderFilters.length > 0 && !genderFilters.includes(p.gender)) {
            return false;
        }

        if (seasonFilters.length > 0) {
            const perfumeSeason = Array.isArray(p.season)
                ? p.season.join(" ").toLowerCase()
                : String(p.season).toLowerCase();

            if (
                seasonFilters.length === 1 &&
                seasonFilters[0] === "all seasons"
            ) {
                if (!perfumeSeason.includes("all")) return false;
            } else {
                const seasonMatch =
                    perfumeSeason.includes("all") ||
                    seasonFilters.some(s => perfumeSeason.includes(s));

                if (!seasonMatch) return false;
            }
        }

        if (longevityFilters.length > 0) {
            const perfumeLongevity = String(p.longevity).toLowerCase();
            if (!longevityFilters.some(l => perfumeLongevity.includes(l))) {
                return false;
            }
        }

        if (searchText !== "") {
            const searchableText =
                `${p.name} ${p.brand}`.toLowerCase();

            if (!searchableText.includes(searchText)) {
                return false;
            }
        }

        return true;
    });

    renderPerfumes(filtered);
}

document
  .getElementById("brandFilter")
  .addEventListener("change", applySidebarFilters);

document
  .getElementById("priceFilter")
  .addEventListener("input", applySidebarFilters);

document
  .querySelectorAll("input.gender")
  .forEach(cb => cb.addEventListener("change", applySidebarFilters));

document
  .querySelectorAll("input.season")
  .forEach(cb => cb.addEventListener("change", applySidebarFilters));

document
  .querySelectorAll("input.longevity")
  .forEach(cb => cb.addEventListener("change", applySidebarFilters));

  document
  .getElementById("searchInput")
  .addEventListener("input", applySidebarFilters);

 
 

