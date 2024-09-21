// PAGE 1 CURSOR EFFECT
const page1Content = document.getElementById('Page1-Content');
const Cursor = document.getElementsByClassName('Cursor');

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

let mainHeading = document.querySelector("#mainHeading");
let mainHeadingContent = mainHeading.textContent;
let mainHeadingSplited = mainHeadingContent.split("");

let Heading = ''

mainHeadingSplited.forEach( (e) => {
    Heading += `<span class="Head"> ${e} </span>`
})
mainHeading.innerHTML = Heading;

gsap.from(".Head",{
    y:50,
    opacity:0,
    stagger:0.19,
})

gsap.from("#Page2,#First-Row p,#Page2-Main-Content p",{
    opacity:0,
    duration:0.6,
    y:120,
    scrollTrigger:{
        trigger:"#Page2", 
        scroller:"body",
        marker:true,
        start:"top 90%",
        end:"top -10%",
        scrub:5,
    }
})

gsap.from("#First-Row-Border",{
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#First-Row-Border", 
        scroller:"body",
        marker:true,
        start:"top 90%",
        end:"top -10%",
        scrub:5,
    }
})

gsap.from("#Service-Button",{
    opacity:0,
    duration:0.6,
    y:120,
    scrollTrigger:{
        trigger:"#Service-Button", 
        scroller:"body",
        marker:true,
        start:"top 95%",
        end:"top -5%",
        scrub:5,
    }
})

gsap.from("#Page4,#Page4-Heading p, #Page4-Heading-Border,#Page4-Main-Content",{
    opacity:0,
    duration:0.6,
    y:100,
    scrollTrigger:{
        trigger:"#Page4", 
        scroller:"body",
        marker:true,
        start:"top 110%",
        end:"top -20",
        scrub:5,
    }
})

gsap.from("#Page6-Heading,#Page6-Main-Content",{
    opacity:0,
    duration:0.1,
    y:120,
    scrollTrigger:{
        trigger:"#Page6-Heading", 
        scroller:"body",
        marker:true,
        start:"top 95%",
        end:"top -5%",
        scrub:5,
    }
})

gsap.from("#aboutUsBtn",{
    opacity:0,
    duration:0.1,
    y:120,
    scrollTrigger:{
        trigger:"#aboutUsBtn", 
        scroller:"body",
        marker:true,
        start:"top 97%",
        end:"top -3%",
        scrub:5,
    }
})

gsap.from("#Page9-Part1,#Left-down,#Page9-Heading,#Page9-Heading button,#Left1-Right,.Right-up,.Right-Down",{
    opacity:0,
    duration:0.1,
    y:-120,
    scrollTrigger:{
        trigger:"#Page9-Part1", 
        scroller:"body",
        marker:true,
        start:"top 97%",
        end:"top -3%",
        scrub:5,
}
})
