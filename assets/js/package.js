gsap.registerPlugin(ScrollTrigger)

const actions = {
  trigger: '.packages',
  start: 'top 90%',
  end: 'top 10%',
}

gsap.from('#packages h5', {
  duration: 1,
  y: 20,
  delay: 0.2,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: actions,
})
gsap.from('.long-text', {
  duration: 1,
  y: 20,
  delay: 0.3,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: actions,
})
gsap.from('.price', {
  duration: 1,
  y: 20,
  delay: 0.4,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: actions,
})
gsap.from('.menu-btn', {
  duration: 1,
  y: 20,
  delay: 0.5,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: actions,
})
