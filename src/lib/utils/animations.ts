import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}


export const animateHero = (title: HTMLElement, tagline: HTMLElement, button: HTMLElement) => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(title, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo(tagline, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 1 }, '-=0.7')
        .fromTo(button, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1 }, '-=0.4');

    return tl;
};

export const animateFadeIn = (element: HTMLElement, delay: number = 0, x: number = 0, y: number = 20) => {
    return gsap.fromTo(
        element,
        { opacity: 0, x, y },
        {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%'
            }
        }
    );
};

export const animateStaggerFadeIn = (elements: HTMLElement[], delay: number = 0, y: number = 30) => {
    return gsap.fromTo(
        elements,
        { opacity: 0, y },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: elements[0],
                start: 'top 85%'
            }
        }
    );
};

export const animateScaleIn = (element: HTMLElement, delay: number = 0) => {
    return gsap.fromTo(
        element,
        { opacity: 0, scale: 0.95 },
        {
            opacity: 1,
            scale: 1,
            duration: 1,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%'
            }
        }
    );
};
