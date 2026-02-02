const track = document.querySelector(".carousel-track");
track.innerHTML = ""; 


const bigImage = document.createElement("img");
bigImage.src = "https://www.lizzieinlace.com/wp-content/uploads/2022/05/2-best-feminine-fragrances-1440x1068.jpg"; 
bigImage.style.width = "100%"; 
bigImage.style.height = "auto"; 
track.appendChild(bigImage);


document.querySelector(".next").style.display = "none";
document.querySelector(".prev").style.display = "none";