import { gsap } from "gsap";

window.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('#hamburger-menu');
    hamburgerMenu.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.classList.toggle('open');
        if(e.target.classList.contains('open')){
            const timeline = gsap.timeline();
            timeline.to('.header__bg', {
                duration:1,
                autoAlpha:1,
            }).to('.header__nav__list__item', {
                duration:1,
                opacity:1,
                stagger: {
                    amount:1,
                }
            })
        }else{
            const timeline = gsap.timeline();
            timeline.to('.header__nav__list__item', {
                duration:1,
                opacity:0,
                stagger: {
                    amount:1,
                    from:"end"
                }
            }).to('.header__bg', {
                duration:1,
                autoAlpha:0,
            })
        }
    });
})