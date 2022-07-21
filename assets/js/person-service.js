const service = {
  trigger: '.person-service',
  start: 'top 90%',
  end: 'top 10%',
}

const prevention = {
  trigger: '.person-extension',
  start: 'top 70%',
  end: 'top 10%',
}

const assess = {
  trigger: '.prevention',
  start: 'top 50%',
  end: 'top 10%',
}

gsap.from('.service-container h1', {
  duration: 1,
  y: 20,
  delay: 0.2,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: service,
})

gsap.from('.service-container .p1', {
  duration: 1,
  y: 20,
  delay: 0.3,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: service,
})

gsap.from('.service-container .p2', {
  duration: 1,
  y: 20,
  delay: 0.4,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: service,
})

gsap.from('.service-container .service-btn', {
  duration: 1,
  y: 20,
  delay: 0.5,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: service,
})

gsap.from('.prevention h5', {
  duration: 1,
  y: 20,
  delay: 0.2,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: prevention,
})

gsap.from('.prevention .p1', {
  duration: 1,
  y: 20,
  delay: 0.3,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: prevention,
})

gsap.from('.prevention .p2', {
  duration: 1,
  y: 20,
  delay: 0.4,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: prevention,
})

gsap.from('.prevention .p3', {
  duration: 1,
  y: 20,
  delay: 0.5,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: prevention,
})

gsap.from('.assess-items h5', {
  duration: 1,
  y: 20,
  delay: 0.4,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: assess,
})

gsap.from('.assess-items .items div', {
  duration: 1,
  y: 20,
  delay: 0.5,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: assess,
})
