// Create a GSAP timeline
let tl = gsap.timeline();

// Animate the top text "Happy"
tl.fromTo("#top-text",
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, y: -40, duration: 1, ease: "power3.out" }
);

// Animate the bottom text "Independence Day"
tl.to("#bottom-text",
    {
        opacity: 1, scale: 1.4,
        duration: 0.5, ease: "power5.out",
        y: 20
    }
);

// Add a glowing effect to the text
gsap.to("#top-text, #bottom-text", {
    textShadow: "0px 0px 20px rgba(255, 255, 255, 0.8)",
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power3.inOut",
    delay: 2.5
});

// Animate the .page container with a fade-in effect
gsap.from(".page", {
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
});

// Animate the .last section with a bounce effect and a rotation
tl.from(".page .last", {
    opacity: 0,
    scale: 0.5,
    duration: 0.5,
    delay: 1.3,
    y: 50,
    stagger: 0.2 // Stagger the animations of child elements
})
.to(".page .last", {
    scale: 1.1, // Bounce effect
    duration: 0.5,
    ease: "power5",
    yoyo: true,
    repeat: 1
});

gsap.to(".container", {
    textShadow: "0px 0px 20px rgba(255, 255, 255, 0.8)",
    duration: 5,
    y:-20,
    x:-30,
    rotate:40,
    repeat: -1,
    yoyo: true,
    ease: "power5",
    delay: 2.5
});
