
// Slideshow
let slideIndex = 0;
function showSlides() {
  const slides = document.getElementsByClassName("slides");
  for (let slide of slides) slide.style.display = "none";
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
showSlides();

// Add Deal
const form = document.getElementById('dealForm');
const grid = document.getElementById('productGrid');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const price = document.getElementById('price').value;
  const image = document.getElementById('image').value;
  const link = document.getElementById('link').value;

  const card = document.createElement('div');
  card.classList.add('product-card');
  card.innerHTML = `
    <img src="${image}" alt="Product Image">
    <h3>${title}</h3>
    <p class="price">${price}</p>
    <a href="${link}" class="btn-primary" target="_blank">Buy Now</a>
  `;
  grid.appendChild(card);
  form.reset();
});
