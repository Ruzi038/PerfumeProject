/*const perfumes = [
    {
        id: 1,
        name: "Dior Sauvage",
        brand: "Dior",
        gender: "Men",
        season: "All Seasons",
        longevity: "Long",
        price: 95,
        rating: 4.4,
        notes: {
            top: ["Bergamot"],
            middle: ["Lavender", "Pepper", "Nutmeg"],
            base: ["Ambroxan", "Vanilla"]
        },
        image: "https://cdn.paris-avenues.com/image/cache/catalog/seo50/3348901486385-550x550.jpg"
    },
    {
        id: 2,
        name: "Bleu de Chanel",
        brand: "Chanel",
        gender: "Men",
        season: "Winter",
        longevity: "Long",
        price: 120,
        rating: 4.6,
        notes: {
            top: ["Lemon", "Grapefruit"],
            middle: ["Ginger", "Nutmeg"],
            base: ["Cedarwood", "Sandalwood"]
        },
        image: "https://orchard.vn/wp-content/uploads/2015/01/chanel-bleu-de-chanel-edp_3.jpg"
    },
    {
       id: 3,
       name: "Tom Ford Oud Wood",
       brand: "Tom Ford",
       gender: "Men",
       season: ["Fall","Winter"],
       longevity: "Long",
       price: 220,
       rating: 4.6,
       notes: {
        top: ["Cardamom"],
        middle: ["Rosewood", "Sandalwood"],
        base: ["Oud", "Amber", "Vanilla"]
    },
    image: "https://www.lookfantastic.ie/images?url=https://static.thcdn.com/productimg/original/12709312-2145154277020969.jpg&format=webp&auto=avif&width=1200&height=1200&fit=cover"
},
{
 id: 4,
  name: "Acqua di Gio Profumo",
  brand: "Giorgio Armani",
  gender: "Men",
  season: "Summer",
  longevity: "Long",
  price: 135,
  rating: 4.5,
  notes: {
    top: ["Marine Notes", "Bergamot"],
    middle: ["Geranium", "Sage"],
    base: ["Incense", "Patchouli"]
  },
  image: "https://tidlon.com/wp-content/uploads/2022/07/1c0edb483eb8f37a19dfd0f004a3e5ca-e1657871077664.png"
},
{
id: 5,
  name: "YSL La Nuit de l’Homme",
  brand: "Yves Saint Laurent",
  gender: "Men",
  season: ["Fall", "Winter"],
  longevity: ["Moderate", "Long"],
  price: 98,
  rating: 4.3,
  notes: {
    top: ["Cardamom"],
    middle: ["Bergamot", "Cedar"],
    base: ["Vetiver", "Coumarin"]
  },
  image: "https://www.yslbeauty.com/dw/image/v2/BDCR_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dw91b2cfe8/images/PACKSHOTS/FRAGRANCE/FOR_HIM/WW-50356YSL_la-nuit-de-l-homme-edp/WW-50356YSL_la-nut-de-lhomme-edp_2023_alt-view-2.jpg?sw=320&sh=320&sm=cut&sfrm=jpg&q=85"
},
{
  id: 6,
  name: "Chanel Coco Mademoiselle",
  brand: "Chanel",
  gender: "Women",
  season: "All Seasons",
  longevity: "Long",
  price: 130,
  rating: 4.6,
  notes: {
    top: ["Orange", "Bergamot"],
    middle: ["Rose", "Jasmine"],
    base: ["Patchouli", "Vetiver"]
  },
  image: "https://dynamic.zacdn.com/S8YtQvdDcm-3fOEH_Y4c0mxoNtM=/filters:quality(70):format(webp)/https://static-hk.zacdn.com/p/chanel-3296-8819317-2.jpg"
},
{
  id: 7,
  name: "YSL Black Opium",
  brand: "Yves Saint Laurent",
  gender: "Women",
  season: ["Fall", "Winter"],
  longevity: "Long",
  price: 115,
  rating: 4.4,
  notes: {
    top: ["Pink Pepper", "Orange Blossom", "Pear"],
    middle: ["Coffee", "Jasmine"],
    base: ["Vanilla", "Patchouli", "Cedarwood"]
  },
  image: "https://www.yslbeautyus.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-ysl-us-Library/default/dw22c2ed6a/pdp/images/WW-51116YSL/BO%20Over%20Red%20About%20Image.jpg?sw=327&sh=327&sm=cut&q=85"
},
{
  id: 8,
  name: "Dior J’adore",
  brand: "Dior",
  gender: "Women",
  season: ["Spring", "Summer"],
  longevity: ["Moderate", "Long"],
  price: 130,
  rating: 4.5,
  notes: {
    top: ["Ylang-Ylang", "Pear"],
    middle: ["Rose", "Jasmine"],
    base: ["Musk", "Vanilla"]
  },
  image: "https://www.fnp.sa/cdn/shop/files/PFHR2.jpg?format=webp&v=1753611861&width=627"
},
{
  id: 9,
  name: "Marc Jacobs Daisy",
  brand: "Marc Jacobs",
  gender: "Women",
  season: ["Spring", "Summer"],
  longevity: "Moderate",
  price: 95,
  rating: 4.2,
  notes: {
    top: ["Strawberry", "Violet Leaf"],
    middle: ["Gardenia"],
    base: ["White Woods", "Musk"]
  },
  image: "https://i.makeup.uk/l/ln/lnsz54mhokze.jpg"
},
{
  id: 10,
  name: "Viktor & Rolf Flowerbomb",
  brand: "Viktor & Rolf",
  gender: "Women",
  season: ["Fall", "Winter"],
  longevity: "Long",
  price: 150,
  rating: 4.6,
  notes: {
    top: ["Bergamot"],
    middle: ["Jasmine", "Orange Blossom"],
    base: ["Patchouli", "Vanilla"]
  },
  image: "https://www.myperfumeshop.qa/cdn/shop/products/viktor-rolf-flowerbomb-edp-perfume-for-her-263403.jpg?v=1626584493&width=800"
},
{
  id: 11,
  name: "Creed Aventus",
  brand: "Creed",
  gender: "Unisex",
  season: "All Seasons",
  longevity: "Long",
  price: 330,
  rating: 4.7,
  notes: {
    top: ["Pineapple", "Bergamot"],
    middle: ["Rose", "Jasmine"],
    base: ["Musk", "Oakmoss", "Ambergris"]
  },
  image: "https://labelleperfumes.com/cdn/shop/files/creed-aventus-labelleperfumes-alt_800x.webp?v=1689798047"
},
{
  id: 12,
  name: "Le Labo Santal 33",
  brand: "Le Labo",
  gender: "Unisex",
  season: ["Fall", "Winter"],
  longevity: "Long",
  price: 192,
  rating: 4.5,
  notes: {
    top: ["Cardamom"],
    middle: ["Sandalwood", "Iris"],
    base: ["Cedarwood", "Amber"]
  },
  image: "https://orchard.vn/wp-content/uploads/2024/07/le-labo-santal-33_3.jpg"
},
{
  id: 13,
  name: "CK One",
  brand: "Calvin Klein",
  gender: "Unisex",
  season: ["Spring" ,"Summer"],
  longevity: "Moderate",
  price: 65,
  rating: 4.0,
  notes: {
    top: ["Pineapple", "Bergamot", "Mandarin"],
    middle: ["Nutmeg", "Jasmine"],
    base: ["Sandalwood", "Musk"]
  },
  image: "https://imagescdn.simons.ca/images/21694-24301-11-A1_3/ck-one-eau-de-toilette-unisex.jpg?__=1"
},
{
  id: 14,
  name: "Tom Ford Black Orchid",
  brand: "Tom Ford",
  gender: "Unisex",
  season: ["Fall", "Winter"],
  longevity: "Long",
  price: 180,
  rating: 4.6,
  notes: {
    top: ["Black Truffle", "Bergamot"],
    middle: ["Black Orchid"],
    base: ["Patchouli", "Vanilla"]
  },
  image: "https://www.beautyglobe.co.uk/cdn/shop/files/IMG-0193_421e3a77-aa26-48f6-8f99-0fe66d30636e.webp?v=1731799445"
},
{
  id: 15,
  name: "Diptyque Philosykos",
  brand: "Diptyque",
  gender: "Unisex",
  season: ["Spring", "Summer"],
  longevity: ["Moderate", "Long"],
  price: 130,
  rating: 4.3,
  notes: {
    top: ["Fig Leaf", "Coconut"],
    middle: ["Fig Tree"],
    base: ["Cedarwood", "Sweet Woody Notes"]
  },
  image: "https://www.diptyqueparis.com/media/catalog/product/o/r/original_jpg-_74a4600-modifier_9x16_2025_x_3600px_vue-alt-pdp.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=&width=&format=webp&width=576&quality=90"
}
];*/


/*const API_BASE = "http://localhost:5243";

let perfumes = [];

function renderPerfumes(perfumes) {
  const grid = document.getElementById("perfumeGrid");
  if (!grid) return;

  grid.innerHTML = "";

  perfumes.forEach(p => {
    grid.innerHTML += `
      <div class="perfume-card">
        <img src="${p.imageUrl}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.brand}</p>
        <p>$${p.price}</p>
      </div>
    `;
  });
}


*/
let perfumes = [];

fetch("http://localhost:5243/api/Perfumes")
  .then(res => res.json())
  .then(data => {
      perfumes = data.map(p => ({
          ...p,
          gender: p.gender.toLowerCase().trim(),
          season: Array.isArray(p.season) ? p.season.map(s => s.toLowerCase()) : [p.season.toLowerCase()],
          longevity: Array.isArray(p.longevity) ? p.longevity.map(l => l.toLowerCase()) : [p.longevity.toLowerCase()]
      }));

      renderPerfumes(perfumes);
  })
  .catch(err => console.error(err));
