// TweenMax.to(['.box01'], 1, {
//     x: 400,
//     y:400,
//    ease: Back.easeOut
var controller = new ScrollMagic.Controller();




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
    repeat: 1,
    ease: Power0.easeNone,
    transformOrigin: 'left top' //定位點
})

TweenMax.fromTo('.box01', 10, {
    x: 200,

}, {
    x: 600
});


TweenMax.to('.box04', 4, {
    bezier: {
        curviness: 1.25,
        values: [{
                x: 100,
                y: 300
            },
            {
                x: 400,
                y: 300
            },
            {
                x: 600,
                y: 100
            },
            {
                x: 1000,
                y: 300
            }
        ]
    }
})




const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const reverseBtn = document.getElementById('reverseBtn');
const tween = TweenMax.to('.box05', 10, {
    bezier: {
        curviness: 1.25,
        values: [{
                x: 100,
                y: 300
            },
            {
                x: 400,
                y: 300
            },
            {
                x: 600,
                y: 100
            },
            {
                x: 1000,
                y: 300
            }
        ]
    }
});




playBtn.onclick = function () {
    tween.play();
}

pauseBtn.onclick = function () {
    tween.pause();
}
reverseBtn.onclick = function () {
    tween.reverse();
}

// TweenMax.staggerFromTo('.boxall', 1, {
//     x: -100,
// }, {
//     x: 200,
//     ease: Back.easeOut
// }, .5)


var tl = new TimelineMax({
    repeat: -1
});


tl.to('.boxall', 1, {
    x: 400
}).fromTo('.boxother', 1, {
    y: 100
}, {
    y: 400
}).to('.boxall3', 1, {
    x: 100,
    y: 300
});

// scrollmagic


let scroll =  TweenMax.to('.box_scoll' , 1,{
    x: 400
});




new ScrollMagic.Scene({
     triggerElement : '#keypoint01',
     triggerHook : 0.5,
     offset: 0,
     reverse: true,
     duration :  300
   }).setTween(scroll).addIndicators().addTo(controller)




