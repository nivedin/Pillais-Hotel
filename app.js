const slider = document.querySelector('.wrapper');
const content = document.querySelector('.content');
const nav = document.querySelector('nav');

var tl = new TimelineMax();

tl.fromTo(slider,.5,{opacity:0,x:30},{opacity:1,x:0})
.fromTo(content,.5,{opacity:0,x:30},{opacity:1,x:0})
.fromTo(nav,.8,{opacity:0,y:-30},{opacity:1,y:0})

tl.to('path#start', .8, {
    x: '-10%',
    ease: Expo.easeInOut
})

tl.to("path#start", .8, {
    attr: {
        d: "M24-48H391.837C193.4,367.237,565.913,513.078,391.473,1032.037c0,.053-367.473,0-367.473,0Z",
        d: "M24-48H391.837C193.4,367.237,565.913,513.078,391.473,1032.037c0,.053-367.473,0-367.473,0Z",
    },
    ease:Elastic.easeOut
})

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click',() => {
   navLinks.classList.toggle('open');
   links.forEach(link => {
       link.classList.toggle('fade');
   });
});

