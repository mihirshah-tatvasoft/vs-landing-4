//GSAP ScrollTrigger Initialization
gsap.registerPlugin(ScrollTrigger);

//GSAP ScrollSmoother Initialization
gsap.registerPlugin(ScrollSmoother);
gsap.config({ trialWarn: false });
let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    smoothTouch: 0.1,
    effects: true,
});


new Typewriter(".hero-content h2 span", {
    strings: ["Organization", "Company"],
    autoStart: true,
    loop: true,
});

// Hero Animations
const heroAnimation = gsap.timeline();
heroAnimation
    .fromTo(".hero .hero-bg", {
        opacity: 0,
        width: 0,
        height: 0,
    }, {
        opacity: 1,
        width: "100%",
        height: "100%",
        duration: 1,
        ease: "power1.out",
    })
    .to(".hero .video-wrapper", {
        opacity: 1,
        duration: 0.5,
    })
    .from(".hero .hero-content h2", {
        opacity: 0,
        y: -50,
        duration: 0.5,
    })
    .from(".hero .hero-content h5", {
        opacity: 0,
        y: -50,
        duration: 0.5,
    })
    .from(".hero .btn-groups > *", {
        opacity: 0,
        stagger: { each: 0.1 },
        y: -50,
        duration: 0.5,
    });

// Cards Animations
const cardsAnim = gsap.timeline({
    scrollTrigger: {
        trigger: ".cards-section",
        start: "top center",
        end: "+=600",
    },
});
cardsAnim
    .from(".cards-section .bgshape.d-right .light", {
        opacity: 0,
        x: "100%",
        duration: 0.5,
        ease: "power1.out",
    })
    .from(".cards-section .bgshape.d-right .dark", {
        opacity: 0,
        x: "100%",
        duration: 0.5,
        ease: "power1.out",
    }, "-=0.3")
    .from(".cards-section .row >*", {
        opacity: 0,
        y: 50,
        stagger: {
            amount: 0.4,
        },
        ease: "power1.out",
    })
    .from(".cards-section  .bgshape.d-left  .light", {
        opacity: 0,
        x: "-100%",
        duration: 0.5,
        ease: "power1.out",
    })
    .from(".cards-section  .bgshape.d-left .dark", {
        opacity: 0,
        x: "-100%",
        duration: 0.5,
        ease: "power1.out",
    }, "-=0.3");

// showcase Animations

// first row
mySplitText = new SplitType(".showcase .first-row .title", { type: "lines" });
var lines1 = mySplitText.lines;
gsap.set(".showcase .title", { perspective: 400, textAlign: "left" });

const showcase1Anim = gsap.timeline({
    scrollTrigger: {
        trigger: ".showcase .first-row",
        start: "top 60%",
        end: "bottom bottom",
    },
});
showcase1Anim
    .from(".showcase .first-row .count-wrap p", {
        opacity: 0,
        x: "-100%",
        ease: "power1.out",
    })
    .from(".showcase .first-row .count-wrap span", {
        opacity: 0,
        width: 0,
        ease: "power1.out",
    })
    .from(lines1, {
        duration: 1.4,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.1,
    }, "-=0.2").from(".showcase .first-row .title-info", {
        opacity: 0,
        y: -80,
        ease: "power1.out",
    }, "-=0.5").from(".showcase .first-row .mockup-block", {
        opacity: 0,
        x: 80,
        ease: "power1.out",
    }, "<-=0.5");

// second row
mySplitText = new SplitType(".showcase .second-row .title", { type: "lines" });
var lines2 = mySplitText.lines;

const showcase2Anim = gsap.timeline({
    scrollTrigger: {
        trigger: ".showcase .second-row",
        start: "top 60%",
        end: "bottom bottom",
    },
});
showcase2Anim
    .from(".showcase .second-shape-wrap .bgshape.d-right > *", {
        opacity: 0,
        x: "100%",
        stagger: {
            each: 0.3,
        },
        ease: "power1.out",
    })
    .from(".showcase .second-row .count-wrap p", {
        opacity: 0,
        x: "-100%",
        ease: "power1.out",
    }, '-=0.2')
    .from(".showcase .second-row .count-wrap span", {
        opacity: 0,
        width: 0,
        ease: "power1.out",
    })
    .from(lines2, {
        duration: 1.4,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.1,
    }, "-=0.2").from(".showcase .second-row .title-info", {
        opacity: 0,
        y: -80,
        ease: "power1.out",
    }, "-=0.5").from(".showcase .second-row .mockup-block", {
        opacity: 0,
        x: -80,
        ease: "power1.out",
    }, "<-=0.5")
    .from(".showcase .second-shape-wrap .bgshape.d-left > *", {
        opacity: 0,
        x: "-100%",
        stagger: {
            each: 0.3,
        },
        ease: "power1.out",
    }, "<")

// third row
mySplitText = new SplitType(".showcase .third-row .title", { type: "lines" });
var lines3 = mySplitText.lines;

const showcase3Anim = gsap.timeline({
    scrollTrigger: {
        trigger: ".showcase .third-row",
        start: "top 60%",
        end: "bottom bottom",
    },
});
showcase3Anim
    .from(".showcase .third-row .count-wrap p", {
        opacity: 0,
        x: "-100%",
        ease: "power1.out",
    })
    .from(".showcase .third-row .count-wrap span", {
        opacity: 0,
        width: 0,
        ease: "power1.out",
    })
    .from(lines3, {
        duration: 1.4,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.1,
    }, "-=0.2").from(".showcase .third-row .title-info", {
        opacity: 0,
        y: -80,
        ease: "power1.out",
    }, "-=0.5").from(".showcase .third-row .accordion-wrap", {
        opacity: 0,
        x: 80,
        ease: "power1.out",
    }, "<-=0.5");


// statistics animation
const statisticsAnim = gsap.timeline({
    scrollTrigger: {
        trigger: ".statistics",
        start: "top 60%",
        end: "bottom bottom",
    },
});
statisticsAnim
    .from(".statistics .bgshape.d-right > *", {
        opacity: 0,
        x: "100%",
        stagger: {
            each: 0.3,
        },
        ease: "power1.out",
    })
    .fromTo(".statistics .color-layer",
        {
            opacity: 0,
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        },
        {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 0.8,
        },
        "-=0.4"
    );


// subscribe-us animation
const subscribeUsAnim = gsap.timeline({
    scrollTrigger: {
        trigger: ".subscribe-us",
        start: "top 60%",
        end: "bottom bottom",
    },
});
subscribeUsAnim
    .from(".subscribe-us .bgshape.d-left .light", {
        opacity: 0,
        x: "-100%",
        duration: 0.5,
        ease: "power1.out",
    })
    .from(".subscribe-us .bgshape.d-left .dark", {
        opacity: 0,
        x: "-100%",
        duration: 0.5,
        ease: "power1.out",
    }, "-=0.3")
    .from(".subscribe-us .img-block .bg-img", {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        ease: "power1.out",
    },
    )
    .from(".subscribe-us .img-block > .main-img", {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        ease: "power1.out",
    }, "-=0.5"
    )
    .from(".subscribe-us .content-block > *", {
        opacity: 0,
        y: -50,
        stagger: {
            each: 0.2,
        },
        duration: 0.8,
        ease: "power1.out",
    }, "-=1");


// footer animation
const footerAnim = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer",
        start: "top 80%",
        end: "bottom bottom",
    },
});
footerAnim
    .from(".footer .row > *", {
        opacity: 0,
        y: "100%",
        stagger: {
            each: 0.2,
        },
        duration: 1,
        ease: "power1.out",
    });


// navlink animation for mobile
const headerAnimation = gsap.timeline();
headerAnimation.staggerFrom(
    ".header .navbar-nav .nav-link",
    0.5,
    {
        opacity: 0,
        x: "-100%",
        ease: "back"
    },
    0.08,
);
