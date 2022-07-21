const assessment = {
  trigger: '.assessment',
  start: 'top 90%',
  end: 'top 10%',
}

gsap.from('.assessment h3', {
  duration: 1,
  y: 20,
  delay: 0.3,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: assessment,
})
gsap.from('.assessment p', {
  duration: 1,
  y: 20,
  delay: 0.4,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: assessment,
})
gsap.from('.assessment .assessment-btn', {
  duration: 1,
  y: 20,
  delay: 0.6,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: assessment,
})
