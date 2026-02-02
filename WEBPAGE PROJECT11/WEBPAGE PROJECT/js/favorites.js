

function addToFavorites(id) {
    let favs = JSON.parse(localStorage.getItem("favorites")) || [];
    id = String(id); 
    if (!favs.includes(id)) {
        favs.push(id);
        localStorage.setItem("favorites", JSON.stringify(favs));
        alert("Added to favorites");
    } else {
        alert("Already in favorites");
    }
}
