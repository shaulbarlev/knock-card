import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(
    ".overlay-container",
    { rotationY: -70 },
    { rotationY: 0, duration: 3, ease: "power1.out" }
  );

  gsap.fromTo(
    ".card",
    { y: 260, scale: 0.7 },
    { y: 0, scale: 1, duration: 2.5, ease: "power2.out" }
  );

  gsap.fromTo(
    ".overlay-container",
    { opacity: 0 },
    { opacity: 1, duration: 2.5, ease: "power2.inOut" }
  );
});
