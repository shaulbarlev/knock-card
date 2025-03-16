import { gsap } from "gsap";
// import { CustomEase } from "gsap/CustomEase";

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

  const tl = gsap.timeline({ paused: true });

  const video = document.getElementById("card-video");
  const timeoutDuration = 3000; //wait time for video load
  let videoLoaded = false;

  // Video loading timeout
  const handleTimeout = () => {
    if (!videoLoaded) {
      console.log("Video failed to load in time. Showing fallback image.");
      video.style.display = "none";
      document.getElementById("fallback-image").style.display = "block";
      tl.seek(5);
    }
  };

  // set a timeout
  const timeout = setTimeout(handleTimeout, timeoutDuration);

  // Event listener for video starting to play
  video.addEventListener("play", () => {
    videoLoaded = true;
    clearTimeout(timeout);
    console.log("card-video started playing");

    //playing animation timeline!
    tl.play();
  });

  // Card Rotation Animation
  tl.fromTo("#card-video", { opacity: 0 }, { opacity: 1, duration: 0.35 });

  // Card Rotation Animation
  tl.fromTo(
    ".overlay-container",
    { rotationY: -100 },
    { rotationY: 0, duration: 3, ease: "power1.out" },
    "-=0.35" // Overlap with video fade-in
  );

  // Card Vertical Position Animation
  tl.fromTo(
    ".card",
    { y: 260, scale: 0.7 },
    { y: 0, scale: 1, duration: 2.5, ease: "power2.out" },
    "-=3" // Overlap with rotation animation
  );

  // Entire overlay fade in
  tl.fromTo(
    ".overlay-container",
    { opacity: 0 },
    { opacity: 1, duration: 2.5, ease: "power2.inOut" },
    "-=2.5" // Adjust delay to match previous animations
  );

  // Staggered Buttons Reveal
  tl.fromTo(
    ".card-btn",
    { opacity: 0 },
    { opacity: 1, duration: 2.5, stagger: 0.35 },
    "-=2.5" // Sync with overlay fade-in
  );

  // Button Lighting Effect
  tl.fromTo(
    ".card-btn",
    {
      boxShadow:
        "1px -1px 0px 0px rgba(122, 122, 122, 0), -1px 1px 0px 0px rgb(122, 122, 122)",
    },
    {
      boxShadow:
        "1px -1px 0px 0px rgb(122, 122, 122), -1px 1px 0px 0px rgba(122, 122, 122, 0)",
      duration: 2.5,
    },
    "-=1.2" // Align with button reveal
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
