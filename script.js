

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

}



const elements = document.querySelectorAll(".fade");


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


},{
    threshold:0.2
});



elements.forEach(el=>{

    observer.observe(el);

});


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.style.background =
        "rgba(10,10,10,.9)";

    } else {


        header.style.background =
        "rgba(10,10,10,.72)";


    }


});



const videos =
document.querySelectorAll(".my-card video");


videos.forEach(video=>{


    video.addEventListener("mouseenter",()=>{


        video.play();


    });



    video.addEventListener("mouseleave",()=>{


        video.pause();


        video.currentTime = 0;


    });


});


document.querySelectorAll('a[href^="#"]')
.forEach(link=>{


    link.addEventListener("click",(e)=>{


        e.preventDefault();


        document.querySelector(
            link.getAttribute("href")
        ).scrollIntoView({

            behavior:"smooth"

        });


    });


});


const glow = document.createElement("div");


glow.classList.add("cursor-glow");


document.body.appendChild(glow);



document.addEventListener("mousemove",(e)=>{


    glow.style.left =
    e.clientX + "px";


    glow.style.top =
    e.clientY + "px";


});
const videos = document.querySelectorAll(".highlight-video");
const buttons = document.querySelectorAll(".play-btn");

buttons.forEach((btn, index)=>{

    btn.addEventListener("click", ()=>{

        if(videos[index].paused){

            videos[index].play();
            btn.textContent="⏸ Pause";

        }else{

            videos[index].pause();
            btn.textContent="▶ Play";

        }

    });

});