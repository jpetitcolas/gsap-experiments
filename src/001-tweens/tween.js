const gsap = require('gsap');

gsap.TweenLite.to('#square', {
    duration: 3,
    x: 300,
    y: 200,
    width: 200,
    height: 200,
    borderRadius: '50%'
});
