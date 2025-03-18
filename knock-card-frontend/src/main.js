import { gsap } from "gsap";
// import { CustomEase } from "gsap/CustomEase";

const configs = {
  a: {
    startTime: 0,
    top: 280,
    scale: 0.7,
    fadeInTime: 0.35,
  },
  b: {
    startTime: 0.8,
    top: 200,
    scale: 0.85,
    fadeInTime: 0.6,
  },
  c: {
    startTime: 0,
    top: 150,
    scale: 0.9,
    fadeInTime: 0.35,
  },
};

//read hash from url
let hash = window.location.hash.substring(1); // Removes the #
if (hash == "") hash = "a"; //default value

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
  const tlFadein = gsap.timeline({ paused: true });

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

    // Seek and play video from startTime
    video.currentTime = configs[hash].startTime;
    video.play();

    //playing animation timeline!
    tl.seek(configs[hash].startTime);
    tl.play();
    setTimeout(() => {
      console.log("Waited 20ms");
      tlFadein.play();
    }, 50);
  });

  // Card Rotation Animation
  tlFadein.fromTo(
    "#app",
    { opacity: 0 },
    { opacity: 1, duration: configs[hash].fadeInTime }
  );

  // Card Rotation Animation
  tl.fromTo(
    ".overlay-container",
    { rotationY: -100, translateX: "-50%", translateY: "-50%" },
    {
      rotationY: 0,
      translateX: "-50%",
      translateY: "-50%",
      duration: 3,
      ease: "power1.out",
      overwrite: "true",
    },
    "-=0.35" // Overlap with video fade-in
  );

  // Card Vertical Position Animation
  tl.fromTo(
    ".card",
    { y: configs[hash].top, scale: configs[hash].scale },
    // { y: 80, scale: 0.85 },
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

  // Staggered socials reveal
  tl.fromTo(
    ".overlay-socials ul li",
    { opacity: 0 },
    { opacity: 1, duration: 2, stagger: 0.05 },
    "-=2.2" // Sync with overlay fade-in
  );

  // // Button Lighting Effect
  // tl.fromTo(
  //   ".card-btn",
  //   {
  //     boxShadow:
  //       "1px -1px 0px 0px rgba(122, 122, 122, 0), -1px 1px 0px 0px rgb(122, 122, 122)",
  //   },
  //   {
  //     boxShadow:
  //       "1px -1px 0px 0px rgb(122, 122, 122), -1px 1px 0px 0px rgba(122, 122, 122, 0)",
  //     duration: 2.5,
  //   },
  //   "-=2" // Align with button reveal
  // );

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
