gsap.registerPlugin(ScrollTrigger)

const texts = {
  trigger: '.home-extension',
  start: 'top 90%',
  end: 'top 10%',
}

gsap.to('.hero-img-1', {
  duration: 1,
  y: 65,
  ease: Power1.easeOut,
  scrollTrigger: {
    trigger: '.treatments',
    start: 'top 90%',
    end: 'top 10%',
    scrub: 1,
  },
})

gsap.from('.home-extension p', {
  duration: 1,
  y: 20,
  delay: 0.2,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: texts,
})

gsap.from('.book-now-2', {
  duration: 1,
  y: 20,
  delay: 0.3,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: texts,
})
