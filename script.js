// Attach Locomotive Scroll CSS and JS
// Attach GSAP and ScrollTrigger

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnime(){
    var tl = gsap.timeline();

    tl.from('#nav', {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to('.boundingelem', {
        y: 0,
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut,
        stagger: .2
    })
    .from('#herofooter', {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -.1,
        ease: Expo.easeInOut
    });
}

function circleChaptaKaroc(){
    let xscale = 1;
    let yscale = 1;
    
    let xprev = 0;
    let yprev = 0;
    let timeout;

    window.addEventListener("mousemove", function(details){
        clearTimeout(timeout);
        
        xscale = gsap.utils.clamp(.8, 1.2, details.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, details.clientY - yprev);
        
        xprev = details.clientX;
        yprev = details.clientY;

        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(function (){
            document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1, 1)`;
        }, 100);
    });
}
circleChaptaKaroc();

function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove", function(details){
        document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale}, ${yscale})`;
    });
}

firstPageAnime();



document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });