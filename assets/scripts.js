const slides=[{image:"wedding_photo.webp"},{image:"audience_in_a_concert.webp"},{image:"pedestrian_crossing.webp"}];let arrowLeft=document.querySelector(".carousel-control-prev"),arrowRight=document.querySelector(".carousel-control-next"),dots=document.querySelector(".carousel-indicators"),bannerImage=document.querySelector(".banner_img"),img=0,dotSelected=document.querySelectorAll(".dot");function getCategories(){const e=document.querySelectorAll("#filters div");e.forEach((e=>{e.addEventListener("click",(function(){const e=this.id;document.querySelectorAll(".gallery img").forEach((t=>{t.classList.replace("active","inactive"),(e in t.dataset||"all"===e)&&t.classList.replace("inactive","active")}))}))})),e.forEach((t=>{t.addEventListener("click",(()=>{e.forEach((e=>{e.classList.remove("active")})),t.classList.add("active")}))}))}dotSelected[img].classList.add("dot_selected"),arrowLeft.addEventListener("click",(()=>{dotSelected[img].classList.remove("dot_selected"),img=(img-1+slides.length)%slides.length,bannerImage.src="./assets/images/slider/"+slides[img].image,dotSelected[img].classList.add("dot_selected")})),arrowRight.addEventListener("click",(()=>{dotSelected[img].classList.remove("dot_selected"),img=(img+1)%slides.length,bannerImage.src="./assets/images/slider/"+slides[img].image,dotSelected[img].classList.add("dot_selected")})),window.addEventListener("DOMContentLoaded",getCategories);const modal=document.querySelector(".modal"),activate=document.querySelectorAll(".activate");function openAndCloseModal(){modal.classList.toggle("active")}activate.forEach((e=>e.addEventListener("click",openAndCloseModal)));const gallery=document.querySelectorAll(".gallery .gallery_img "),modalImg=document.querySelector(".modal_img");window.onload=()=>{for(let e=0;e<gallery.length;e++){let t=e;gallery[e].onclick=()=>{function e(){let e=gallery[t].src;modalImg.src=e}const l=document.querySelector(".arrow_left"),c=document.querySelector(".arrow_right");l.onclick=()=>{t=(t-1+gallery.length)%gallery.length,e()},c.onclick=()=>{t=(t+1)%gallery.length,e()},e()}}};