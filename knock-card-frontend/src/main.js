import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

document.addEventListener("DOMContentLoaded", () => {
  // gsap.fromTo(
  //   ".overlay-container",
  //   { rotationY: -75 },
  //   {
  //     rotationY: 0,
  //     duration: 2.75,
  //     ease: CustomEase.create("custom", "M0,0 C0.238,0.316 0.469,1 1,1 "),
  //   }
  // );
  gsap.fromTo(
    ".overlay-container",
    { rotationY: -100 },
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
    { opacity: 1, duration: 2.5, ease: "power2.inOut", delay: 0.35 }
  );
});
