
let crsr = document.querySelector('.crsr')
let main = document.querySelector('main')

 
document.addEventListener("mousemove",(e)=>{
    gsap.to(crsr,{
     left:e.x,
        top:e.y,
        opacity:1,
        scale:1
        
    })
    

 })


var tl = gsap.timeline();

tl.from("nav",{
    y:100,
    opacitya:0,
    scale:0,
    duration:.5,
    delay:1
})
tl.from(".logo h1, .menu",{

    y:-100,
    duration:.5,
    delay:0.4,
    stagger:0.3,
    opacity:0

})

tl.from(".left h1 ",{
    x:-90,
    opacity:0,
    stagger:0.3
})
tl.from(".left a ",{
    x:-90,
    opacity:0,
    stagger:0.3
})
tl.from(".right img",{
    scale:0.7,
    opacity:0,
    
})

gsap.from(".page2 .info h1,.info p",{

    x:-100,
    opacity:0,
    delay:7,
    duration:2,
    stagger:0.4,
  
})

 

