
// // TESTMONIAL JS
        

// document.addEventListener("DOMContentLoaded", () => {
//   const sliderTrack = document.getElementById("sliderTrack");
//   const testimonialCards = document.querySelectorAll(".testimonial-card");

//   const cardWidth = testimonialCards[0].offsetWidth + 13; // 13 = margin or gap
//   const isMobile = window.innerWidth <= 768;
//   const visibleCards = isMobile ? 1 : 2;

//   let index = 0;
//   let totalCards = testimonialCards.length;

//   // Clone all cards to make the loop seamless
//   testimonialCards.forEach(card => {
//     const clone = card.cloneNode(true);
//     sliderTrack.appendChild(clone);
//   });

//   function moveSlider() {
//     index++;
//     sliderTrack.style.transition = "transform 0.6s ease-in-out";
//     sliderTrack.style.transform = `translateX(-${index * cardWidth}px)`;

//     // Reset back to the start seamlessly
//     if (index >= totalCards) {
//       setTimeout(() => {
//         sliderTrack.style.transition = "none";
//         sliderTrack.style.transform = `translateX(0px)`;
//         index = 0;
//       }, 600); // wait until the transition is over
//     }
//   }

//   setInterval(moveSlider, 3000);
// });



  gsap.registerPlugin(ScrollTrigger);

  let sections = gsap.utils.toArray(".experince-card");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1), // total shift
    ease: "none",
    scrollTrigger: {
      trigger: ".exp-container",
      start: "center center",   // 👈 jaise hi container top se milega, scroll trigger start ho jayega
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 90),
      end: () =>  + document.querySelector(".exp-container").offsetWidth
    }
  });