// $(document).ready(function () {
//   $(this).scrollTop(0)
// })

gsap.registerPlugin(ScrollTrigger)

const tl = new TimelineMax()
const tl2 = new TimelineMax()

tl.staggerFrom(
  [
    '.burger',
    '.logo',
    '.book-btn',
    '.hero-img',
    '.text-container h3',
    '.text-container p',
    '.text-container a',
    '.book-now',
  ],
  1,
  {
    stagger: 0.1,
    y: 20,
    alpha: 0,
    ease: 'power2.inOut',
    delay: 0.3,
  },
)

tl2.staggerFrom(['.home-extension p', '.home-extension button'], 1.5, {
  scrollTrigger: {
    trigger: '.home-extension',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  stagger: 0.5,
  y: 50,
  alpha: 0,
  ease: 'power2.inOut',
  delay: 0.1,
})
