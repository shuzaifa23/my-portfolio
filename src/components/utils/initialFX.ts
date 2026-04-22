import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";

  document.querySelector("main")?.classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  gsap.fromTo(
    ".landing-info h1, .landing-info h2, .landing-info h3",
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      delay: 0.5,
    }
  );
}gsap.timeline({ repeat: -1 })
  .to(".role1", {
    y: -80,
    opacity: 0,
    duration: 1,
    delay: 2
  })
  .fromTo(".role2",
    { y: 80, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    "<"
  )
  .to(".role2", {
    y: -80,
    opacity: 0,
    duration: 1,
    delay: 2
  })
  .fromTo(".role1",
    { y: 80, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    "<"
  );