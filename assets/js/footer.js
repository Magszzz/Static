const footer = {
  trigger: '.footer',
  start: 'top 90%',
  end: 'top 10%',
}

gsap.from('.form .p1', {
  duration: 1,
  y: 20,
  delay: 0.3,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: footer,
})

gsap.from('.form .p2', {
  duration: 1,
  y: 20,
  delay: 0.4,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: footer,
})

gsap.from('.form div', {
  duration: 1,
  y: 20,
  delay: 0.5,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: footer,
})

gsap.from('.links ul', {
  duration: 1,
  y: 20,
  delay: 0.5,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: footer,
})
