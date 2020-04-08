// TweenMax.to(['.box01'], 1, {
//     x: 400,
//     y:400,
//    ease: Back.easeOut



// });
TweenMax.to('.box03', 1, {
    y: 300,
    opacity: .7,
    rotation: 300,
    ease: Bounce.easeOut
})

TweenMax.to('.box02', .1, {
    opacity: .7,
    rotation: 360,
    repeat : -1,
    ease: Power0.easeNone,
    transformOrigin : 'left top' //定位點
})

TweenMax.fromTo('.box01', 10, {
    x: 200,
   
}, {
    x: 600
});