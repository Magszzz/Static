$(document).ready(() => {
  $('.desktop').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
    ],
  })

  $('.mobile').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  })
})

const treatments = {
  trigger: '.treatments',
  start: 'top 90%',
  end: 'top 10%',
}

gsap.from('.heading h3', {
  duration: 1,
  y: 20,
  delay: 0.2,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: treatments,
})

gsap.from('.heading p', {
  duration: 1,
  y: 20,
  delay: 0.3,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: treatments,
})

gsap.from('.desktop-item-1', {
  duration: 1,
  y: 20,
  delay: 0.4,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: treatments,
})

gsap.from('.mobile-item', {
  duration: 1,
  y: 20,
  delay: 0.4,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: treatments,
})

gsap.from('.desktop-item-2', {
  duration: 1,
  y: 20,
  delay: 0.5,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: treatments,
})

gsap.from('.desktop-item-3', {
  duration: 1,
  y: 20,
  delay: 0.5,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: treatments,
})
gsap.from('.desktop-item-4', {
  duration: 1,
  y: 20,
  delay: 0.6,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: treatments,
})
gsap.from('.desktop-item-5', {
  duration: 1,
  y: 20,
  delay: 0.7,
  alpha: 0,
  ease: Power1.easeOut,
  scrollTrigger: treatments,
})
