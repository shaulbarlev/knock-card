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

  // Card Rotation Animation
  gsap.fromTo(
    ".overlay-container",
    { rotationY: -100 },
    { rotationY: 0, duration: 3, ease: "power1.out" }
  );

  // Card Vertical Position Animation
  gsap.fromTo(
    ".card",
    { y: 260, scale: 0.7 },
    { y: 0, scale: 1, duration: 2.5, ease: "power2.out" }
  );

  //Entire overlay fade in
  gsap.fromTo(
    ".overlay-container",
    { opacity: 0 },
    { opacity: 1, duration: 2.5, ease: "power2.inOut", delay: 0.35 }
  );

  // Staggered Buttons reveal
  gsap.fromTo(
    ".card-btn",
    { opacity: 0 },
    { opacity: 1, duration: 2.5, delay: 0.5, stagger: 0.35 }
  );

  //Button lighting effect
  gsap.fromTo(
    ".card-btn",
    {
      boxShadow:
        "1px -1px 0px 0px rgba(122, 122, 122, 0), -1px 1px 0px 0px rgb(122, 122, 122)",
    },
    {
      boxShadow:
        "1px -1px 0px 0px rgb(122, 122, 122), -1px 1px 0px 0px rgba(122, 122, 122, 0)",
      duration: 2.5,
      delay: 1.2,
    }
  );

  // //Video only scale up
  // gsap.fromTo(
  //   "#card-video",
  //   { scale: 1, translate: 0 },
  //   { scale: 1.25, duration: 2.5, ease: "power2.out" }
  // );

  document.getElementById("card-video").addEventListener("ended", function () {
    this.pause();
    this.currentTime = this.duration;
  });
});
