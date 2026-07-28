document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".nav-links");


    if(menuBtn){

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

        });

    }





    /* =========================
       SMOOTH SCROLL
    ========================= */


    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", e => {

            const target = document.querySelector(
                link.getAttribute("href")
            );


            if(target){

                e.preventDefault();


                target.scrollIntoView({

                    behavior:"smooth"

                });


                nav?.classList.remove("active");

            }


        });


    });






    /* =========================
       HEADER EFFECT
    ========================= */


    const header = document.querySelector("header");


    window.addEventListener("scroll", () => {


        if(window.scrollY > 50){

            header.style.background =
            "rgba(7,7,7,.95)";


        }else{


            header.style.background =
            "rgba(7,7,7,.75)";


        }


    });







    /* =========================
       SCROLL TOP BUTTON
    ========================= */


    const scrollBtn =
    document.getElementById("scrollTop");



    if(scrollBtn){


        window.addEventListener("scroll",()=>{


            if(window.scrollY > 500){

                scrollBtn.style.display="block";


            }else{

                scrollBtn.style.display="none";

            }


        });




        scrollBtn.addEventListener("click",()=>{


            window.scrollTo({

                top:0,

                behavior:"smooth"

            });


        });


    }







    /* =========================
       HIGHLIGHT VIDEOS
    ========================= */


    const videos =
    document.querySelectorAll(".highlight-video");



    const playButtons =
    document.querySelectorAll(".play-btn");



    playButtons.forEach((button,index)=>{


        button.addEventListener("click",()=>{


            const video = videos[index];


            if(video){


                if(video.paused){


                    video.play();

                    button.textContent="⏸ Pause";


                }else{


                    video.pause();

                    button.textContent="▶ Play";


                }


            }


        });


    });






    /* =========================
       VIDEO MODAL
    ========================= */


    const modal =
    document.getElementById("videoModal");


    const closeModal =
    document.querySelector(".close-modal");


    const modalVideo =
    modal?.querySelector("video");



    document.querySelectorAll(".play-btn")
    .forEach(button=>{


        button.addEventListener("dblclick",()=>{


            if(modal){


                modal.classList.add("active");


                modalVideo.play();


            }


        });


    });





    closeModal?.addEventListener("click",()=>{


        modal.classList.remove("active");


        modalVideo.pause();


        modalVideo.currentTime=0;


    });





    modal?.addEventListener("click",(e)=>{


        if(e.target === modal){


            modal.classList.remove("active");


            modalVideo.pause();


            modalVideo.currentTime=0;


        }


    });







    /* =========================
       FAQ
    ========================= */


    const faqButtons =
    document.querySelectorAll(".faq-question");



    faqButtons.forEach(button=>{


        button.addEventListener("click",()=>{


            const answer =
            button.nextElementSibling;



            if(answer.style.display==="block"){


                answer.style.display="none";


            }else{


                answer.style.display="block";


            }


        });


    });






    /* =========================
       SCROLL ANIMATION
    ========================= */


    const observer =
    new IntersectionObserver(entries=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){


                entry.target.classList.add("show");


            }


        });


    },{
        threshold:.15
    });



    document.querySelectorAll(
        ".about-card, .weapon-card, .map-card, .team-card, .highlight-card, .stat-card, .skin-card"
    )
    .forEach(card=>{


        observer.observe(card);


    });






    /* =========================
       CURSOR GLOW
    ========================= */


    const glow =
    document.createElement("div");


    glow.className="cursor-glow";


    document.body.appendChild(glow);




    document.addEventListener("mousemove",(e)=>{


        glow.style.left =
        e.clientX+"px";


        glow.style.top =
        e.clientY+"px";


    });



});