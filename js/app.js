const wrapperImg = document.getElementById("lightSlider");
const imgs = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
  "./images/6.jpg",
  "./images/7.jpg",
  "./images/8.jpg",
  "./images/9.jpg",
];

imgs.forEach((img, i) => {
  let tagLi = document.createElement("li");
  let tagImg = document.createElement("img");
  tagImg.setAttribute("alt", "slide " + i + 1);
  tagImg.setAttribute("src", img);

  tagLi.appendChild(tagImg);
  wrapperImg.appendChild(tagLi);
});

$(document).ready(function () {
  $("#lightSlider").lightSlider({
    speed: 400,
    auto: true,
    loop: false,
    slideEndAnimation: true,
    pause: 5000,
  });
});
