gsap.registerPlugin(ScrollTrigger)
const mOff = gsap.timeline({ paused: true })
const mOn = gsap.timeline({ paused: true })
const nav = gsap.timeline()

nav.to('#navigation', {
  scrollTrigger: {
    trigger: '.treatments',
    end: 'top -90%',
    scrub: 0.1,
  },
  backgroundColor: 'rgb(13,13,13)',
  duration: 0.3,
})

const modalOff = () => {
  mOff
    .to('.modal-parent', 0.2, {
      alpha: 0,
      ease: Power1.easeInOut,
    })
    .to('.modal-parent', 0, {
      display: 'none',
      delay: 0.1,
    })
  mOff.play()
}

const modalOn = () => {
  mOn
    .to('.modal-parent', 0, {
      display: 'initial',
    })
    .to('.modal-parent', 0.5, {
      alpha: 1,
      ease: Power1.easeInOut,
    })
  mOn.play()
}

$('.burger').click(modalOn)
$('.nav-link').click(modalOff)
$('.close').click(modalOff)
