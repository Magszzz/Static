const guarantee = {
  trigger: '.guarantee',
  start: 'top 90%',
  end: 'top 10%',
}

gsap.from('.guarantee h5', {
  duration: 1,
  y: 20,
  delay: 0.3,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: guarantee,
})

gsap.from('.guarantee p', {
  duration: 1,
  y: 20,
  delay: 0.4,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: guarantee,
})
