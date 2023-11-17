$(document).ready(function () {
  $(".gallery").mauGallery({
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
    },
    lightBox: true,
    lightboxId: "myAwesomeLightbox",
    showTags: true,
    tagsPosition: "top",
  });
});

const slides = [
  {
    image: "wedding_photo.webp",
  },
  {
    image: "audience_in_a_concert.webp",
  },
  {
    image: "pedestrian_crossing.webp",
  },
];

let arrowLeft = document.querySelector(".carousel-control-prev");
let arrowRight = document.querySelector(".carousel-control-next");
let dots = document.querySelector(".carousel-indicators");
let bannerImage = document.querySelector(".banner_img");
let img = 0;
let dotSelected = document.querySelectorAll(".dot");
dotSelected[img].classList.add("dot_selected");

arrowLeft.addEventListener("click", () => {
  console.log("Clic sur la flèche de gauche");
  dotSelected[img].classList.remove("dot_selected");
  img = (img - 1 + slides.length) % slides.length;

  bannerImage.src = "./assets/images/slider/" + slides[img].image;
  dotSelected[img].classList.add("dot_selected");
});

arrowRight.addEventListener("click", () => {
  console.log("Clic sur la flèche de droite");
  dotSelected[img].classList.remove("dot_selected");
  img = (img + 1) % slides.length;

  bannerImage.src = "./assets/images/slider/" + slides[img].image;
  dotSelected[img].classList.add("dot_selected");
});
