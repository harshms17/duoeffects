function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();
var crsr = document.querySelector(".cursor");
document.addEventListener("mousemove",function(axis){
    crsr.style.left = axis.x+"px";
    crsr.style.top = axis.y+"px";
});
document.querySelector("#page1>video").addEventListener("mouseenter",function(){
    crsr.style.backgroundColor="purple";
    crsr.style.color="#000";
    crsr.style.width="100px";
    crsr.style.borderRadius="50px";
    crsr.style.mixBlendMode="normal";
    crsr.innerHTML = "<h4>Sound ON</h4>";
    
})
document.querySelector("#page1>video").addEventListener("mouseleave",function(){
    crsr.style.mixBlendMode="difference";
    crsr.style.backgroundColor="#fff";
    crsr.style.width="20px";
    crsr.style.borderRadius="50px";
    crsr.innerHTML = "<h4></h4>";
})
crsr.style.pointerEvents = 'none';
gsap.from("#page1 h1",{
    rotate:10,
    delay:0.3,
    duration:.5,
    y:100
})
gsap.to("#head1>h1",{
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        scrub:.5,
        start:"top top",
        end:"bottom 60%",
        // markers:true
    },
    x:"-50%"
})
gsap.to("#head2>h1",{
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        scrub:.5,
        start:"top top",
        end:"bottom 60%",
        // markers:true
    },
    x:"50%"
})
gsap.to("#page1>video,#vu",{
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        scrub:.5,
        start:"top top",
        end:"67% top",
        // markers:true
    },
    width:"100%"
})
// gsap.to("#page3",{
//     scrollTrigger:{
//         scroller:"#main",
//         trigger:"#page3",
//         scrub:.5
//     },
//     onStart:()=>{
//     backgroundColor:"blue"}
// })
gsap.to("#main",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page3",
        start:"top 60%",
        end:"top 50%",
        // markers:true,
        scrub:.5,
        onEnter:function() {
            document.querySelector("#main").style.color = "#000";
        },
        onLeaveBack:()=>{
            document.querySelector("#main").style.color ="#fff";
        }
    },
    backgroundColor:"#fff"
})
gsap.to("#page1>video",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2",
        start:"top top",
        end:"30% top",
        // markers:true,
        scrub:.5
    },
    scale:.95
})
gsap.to("#main",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page5",
        start:"top 60%",
        end:"top 50%",
        // markers:true,
        scrub:.5,
        onEnter:function() {
            document.querySelector("#main").style.color = "#fff";
            document.querySelector("#main").style.backgroundColor = "#000";
        },
        onLeaveBack:()=>{
            document.querySelector("#main").style.color ="#000";
            document.querySelector("#main").style.backgroundColor = "#fff";
        }
    }
})
document.querySelectorAll(".txtbox").forEach(function(box){
    box.addEventListener("mouseenter",function(){
        var att=box.getAttribute("imageid");
        crsr.style.height="30vh"
        crsr.style.width="15vw"
        crsr.style.borderRadius="0"
        crsr.style.backgroundImage=`url(${att})`
        crsr.style.backgroundSize="cover"
        crsr.style.mixBlendMode="normal"
        crsr.style.border="2px solid yellow"
        crsr.style.transition="all ease .5s"
    })
    box.addEventListener("mouseleave",function(){
        // var att=elem.getAttribute("imageid");
        crsr.style.height="20px"
        crsr.style.width="20px"
        crsr.style.borderRadius="50%"
        crsr.style.backgroundImage=`none`
        crsr.style.mixBlendMode="difference"
        crsr.style.border="0"
        crsr.style.transition="all ease .07s"
    })
})
var navi=document.querySelectorAll("#navp2 h4")
var pur=document.querySelector("#purple")
navi.forEach((elem)=>{

    elem.addEventListener("mouseenter",()=>{
        pur.style.display="block"
        pur.style.opacity=1
    })
    document.querySelector("#nav").addEventListener("mouseleave",()=>{
        pur.style.display="none"
        pur.style.opacity=0
    })
})