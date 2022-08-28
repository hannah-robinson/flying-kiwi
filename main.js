// const flightPath = {
//   curviness: 1.25,
//   autoRotate: true,
//   values: [{ x: 100, y: -20 }],
// }

const tween = new gsap.timeline()

tween.to('.kiwi', {
  duration: 1,
  x: 100,
  y: -30,
  // ease: Power1.easeInOut,
})

tween.to('.kiwi', {
  duration: 1,
  x: 300,
  y: 20,
})

tween.to('.kiwi', {
  duration: 1,
  x: 500,
  y: 100,
})

tween.to('.kiwi', {
  duration: 1,
  x: 750,
  y: -100,
})

tween.to('.kiwi', {
  duration: 1,
  x: 350,
  y: -50,
})

tween.to('.kiwi', {
  duration: 1,
  x: 600,
  y: 100,
})

tween.to('.kiwi', {
  duration: 1,
  x: 800,
  y: 0,
})

tween.to('.kiwi', {
  duration: 1,
  x: window.innerWidth,
  y: -250,
})

// ScrollMagic

const controller = new ScrollMagic.Controller()

const scene = new ScrollMagic.Scene({
  triggerElement: '.animation',
  duration: 3000,
  triggerHook: 0,
})
  .setTween(tween)
  .addIndicators()
  .setPin('.animation')
  .addTo(controller)
