const slides = [
  {
    image: "wedding_photo.webp",
    tag: "Photo de mariage",
    source: "wedding_photo_mobile.webp",
  },
  {
    image: "audience_in_a_concert.webp",
    tag: "Plublic dans un concert",
    source: "audience_in_a_concert_mobile.webp",
  },
  {
    image: "pedestrian_crossing.webp",
    tag: "Homme sur un passage piéton",
    source: "pedestrian_crossing_mobile.webp",
  },
];
let arrowLeft = document.querySelector(".carousel-control-prev");
let arrowRight = document.querySelector(".carousel-control-next");
let dots = document.querySelector(".carousel-indicators");
let bannerImage = document.querySelector(".banner_img");
let bannerSource = document.querySelector(".source");
let bannerSourceTwo = document.querySelector(".source_two");
let img = 0;
let dotSelected = document.querySelectorAll(".dot");
dotSelected[img].classList.add("dot_selected");
arrowLeft.addEventListener("click", () => {
  console.log("Clic sur la flèche de gauche");
  dotSelected[img].classList.remove("dot_selected");
  img = (img - 1 + slides.length) % slides.length;
  bannerImage.src = "./assets/images/slider/" + slides[img].image;
  bannerImage.alt = slides[img].tag;
  bannerSource.srcset = "./assets/images/slider/" + slides[img].source;
  bannerSourceTwo.srcset = "./assets/images/slider/" + slides[img].image;
  dotSelected[img].classList.add("dot_selected");
});
arrowRight.addEventListener("click", () => {
  console.log("Clic sur la flèche de droite");
  dotSelected[img].classList.remove("dot_selected");
  img = (img + 1) % slides.length;
  bannerImage.src = "./assets/images/slider/" + slides[img].image;
  bannerImage.alt = slides[img].tag;
  bannerSource.srcset = "./assets/images/slider/" + slides[img].source;
  bannerSourceTwo.srcset = "./assets/images/slider/" + slides[img].image;
  dotSelected[img].classList.add("dot_selected");
});
function getCategories() {
  const filters = document.querySelectorAll("#filters div");
  filters.forEach((filter) => {
    filter.addEventListener("click", function () {
      const tag = this.id;
      const picture = document.querySelectorAll(".gallery .gallery_img");
      picture.forEach((image) => {
        image.classList.replace("active", "inactive");
        if (tag in image.dataset || tag === "all") {
          image.classList.replace("inactive", "active");
        }
      });
    });
  });
  filters.forEach((element) => {
    element.addEventListener("click", () => {
      filters.forEach((element) => {
        element.classList.remove("active");
      });
      element.classList.add("active");
    });
  });
}
window.addEventListener("DOMContentLoaded", getCategories);
const modal = document.querySelector(".modal");
const activate = document.querySelectorAll(".activate");
activate.forEach((activate) =>
  activate.addEventListener("click", openAndCloseModal)
);
function openAndCloseModal() {
  modal.classList.toggle("active");
}
const gallery = document.querySelectorAll(".gallery img");
const modalImg = document.querySelector(".modal_img");
window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    let index = i;
    gallery[index].onclick = () => {
      function preview() {
        let selectedImgUrl = gallery[index].src;
        modalImg.src = selectedImgUrl;
      }
      const leftArrow = document.querySelector(".arrow_left");
      const righttArrow = document.querySelector(".arrow_right");
      leftArrow.onclick = () => {
        index = (index - 1 + gallery.length) % gallery.length;
        preview();
      };
      righttArrow.onclick = () => {
        index = (index + 1) % gallery.length;
        preview();
      };
      preview();
    };
  }
};
