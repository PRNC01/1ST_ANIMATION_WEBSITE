// PAGE 1 CURSOR EFFECT
const page1Content = document.getElementById('Page1-Content');
const Cursor = document.getElementById('Cursor');

page1Content.addEventListener('mousemove', (e) => {
    gsap.to(Cursor,{
        x:e.x,
        y:e.y
    })
});

page1Content.addEventListener('mouseenter', () => {
    gsap.to(Cursor, {
        scale:1,
        opacity:1
    })
});

page1Content.addEventListener('mouseleave', () => {
    gsap.to(Cursor, {
        scale:0,
        opasity:0
    })
});

