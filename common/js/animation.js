import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('DOMContentLoaded', () => {
    const heroTimeline = gsap.timeline({
        defaults: {
            duration:1,
            opacity:1
        }
    });
    heroTimeline.to('.hero__bg',{}).to('.hero__image',{}, "<.5").to('.hero__title',{}).to('.header__wrapper',{}, '<0.4');
    
    
    const animationEls = document.querySelectorAll("*[data-animation]");
    animationEls.forEach((el) => {
      if (el.dataset.animation === "left") {
        gsap.from(el, {
          duration: 1,
          autoAlpha: 0,
          x: -100,
          scrollTrigger: {
            trigger: el,
            start: "center bottom",
          },
        });
      } else if (el.dataset.animation === "right") {
        gsap.from(el, {
          duration: 1,
          autoAlpha: 0,
          x: 100,
          scrollTrigger: {
            trigger: el,
            start: "center bottom",
          },
        });
      } else if (el.dataset.animation === "opacity") {
        gsap.from(el, {
          duration: 1,
          autoAlpha: 0,
          scrollTrigger: {
            trigger: el,
            start: "center bottom",
          },
        });
      }
    });
});
