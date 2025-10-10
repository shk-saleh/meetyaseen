

  const hamburger = document.getElementById("navbarHamburger");
  const mobileNav = document.getElementById("mobileNav");

  hamburger.addEventListener("click", () => {
    if (mobileNav.style.display === "none" || mobileNav.style.display === "") {
      mobileNav.style.display = "block";
      mobileNav.style.animation = "fadeIn 0.3s ease forwards";
    } else {
      mobileNav.style.animation = "fadeOut 0.3s ease forwards";
      setTimeout(() => {
        mobileNav.style.display = "none";
      }, 300);
    }
  });

  const starContainer = document.querySelector(".star-container");
  const numStars = 100; // adjust number of stars here (try 100–200)

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    const size = Math.random() * 2 + 1; // 1–3px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    starContainer.appendChild(star);
  }


// Theme toggle logic
const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function updateThemeIcon() {
  if (document.body.classList.contains('dark-theme')) {
    themeIcon.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    themeIcon.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
}

themeToggleBtn.onclick = function() {
  document.body.classList.toggle('dark-theme');
  console.log('Theme toggled');
  updateThemeIcon();
};

updateThemeIcon(); // Set icon on page load



gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".experince-card");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".experince-section",   // 👈 Pin the whole section instead of only .exp-container
    start: "center center",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".exp-container").offsetWidth
  }
});
