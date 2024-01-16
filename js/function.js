function myFunction() {
    let element = document.querySelector("nav");
    element.classList.toggle("nav-show");

    let element2 = document.querySelector(".toggle-btn");
    element2.classList.toggle("toggle-open");
}

document.querySelector(".toggle-btn").addEventListener("click", myFunction)

//Slider

// $('.slider').slick({
//   dots: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 2,
//   prevArrow: `<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>`,
//   nextArrow: `<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>`,
//   responsive: [
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });
// 



$('.testimonial-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>`,
    nextArrow: `<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>`,
});

//
$('.banner-content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button type="button" class="previous-slick"><i class="fa-solid fa-chevron-left"></i></button>`,
    nextArrow: `<button type="button" class="next-slick"><i class="fa-solid fa-chevron-right"></i></button>`,
});

// document.addEventListener("DOMContentLoaded", function () {
//     window.addEventListener("scroll", function () {
//         if (window.pageYOffset > 50) {
//             document.querySelector("header").classList.add("active");
//         } else {
//             document.querySelector("header").classList.remove("active");
//         }
//     });
// });
//
// JavaScript

