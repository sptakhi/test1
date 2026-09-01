/*==================================================
            VIDEOS.JS - PART 1
            Upload + Video Popup System
==================================================*/

/*=========================
        CREATE VIDEO CARD
=========================*/


function createVideoCard(videoURL){


    const card =
    document.createElement("div");



    card.className =
    "video-card";



    card.innerHTML = `


        <video

        src="${videoURL}"

        controls>

        </video>



        <div class="video-info">


            <h3>

            Beautiful Memory ❤️

            </h3>



            <p>

            A moment that deserves
            to be remembered forever.

            </p>


        </div>


    `;



    uploadedVideoContainer
    .prepend(card);



    addVideoPopup(card);


}



/*=========================
        VIDEO POPUP
=========================*/


const videoLightbox =
document.getElementById(
"videoLightbox"
);



const popupVideo =
document.getElementById(
"popupVideo"
);



const closeVideo =
document.getElementById(
"closeVideo"
);




function addVideoPopup(card){


    const video =
    card.querySelector("video");



    video.addEventListener(
        "click",
        ()=>{


            videoLightbox.style.display =
            "flex";



            popupVideo.src =
            video.src;



            popupVideo.play();



        }
    );


}





/* Existing videos */


document
.querySelectorAll(".video-card")
.forEach(card=>{


    addVideoPopup(card);


});





/*=========================
        CLOSE VIDEO
=========================*/


if(closeVideo){


    closeVideo.onclick=function(){


        closeVideoPlayer();


    };


}



function closeVideoPlayer(){


    videoLightbox.style.display =
    "none";



    popupVideo.pause();



    popupVideo.src="";


}




/* Click outside video closes */


if(videoLightbox){


    videoLightbox.addEventListener(
        "click",
        function(e){


            if(e.target===videoLightbox){


                closeVideoPlayer();


            }


        }
    );


}
/*==================================================
            VIDEOS.JS - PART 2
            Music + Hearts + Animations
==================================================*/


/*=========================
        MUSIC CONTROL
=========================*/


const videoMusic =
document.getElementById(
"videoMusic"
);



const musicButton =
document.getElementById(
"musicButton"
);



let isPlaying=false;



if(videoMusic && musicButton){


    musicButton.addEventListener(
        "click",
        ()=>{


            if(!isPlaying){


                videoMusic.play()
                .then(()=>{


                    isPlaying=true;


                    musicButton.innerHTML=
                    "🔊";


                })

                .catch(()=>{


                    console.log(
                    "User interaction required"
                    );


                });


            }

            else{


                videoMusic.pause();


                isPlaying=false;


                musicButton.innerHTML=
                "🎵";


            }


        }
    );


}



/*=========================
        FLOATING HEARTS
=========================*/


const heartContainer =
document.querySelector(
".floating-heart-container"
);



function createHeart(){


    if(!heartContainer)
    return;



    const heart =
    document.createElement("span");



    const symbols=[

        "❤️",
        "💖",
        "💕",
        "💗",
        "💞"

    ];



    heart.innerHTML =
    symbols[
        Math.floor(
        Math.random()*symbols.length
        )
    ];



    heart.style.left =
    Math.random()*100+"vw";



    heart.style.fontSize =
    (20+
    Math.random()*30)
    +"px";



    heart.style.animationDuration =
    (8+
    Math.random()*10)
    +"s";



    heartContainer.appendChild(
    heart
    );



    setTimeout(()=>{


        heart.remove();


    },18000);


}



setInterval(
createHeart,
700
);





/*=========================
        FALLING PETALS
=========================*/


function createPetal(){


    const petal =
    document.createElement("div");



    const flowers=[

        "🌸",
        "🌺",
        "🌷",
        "🌼"

    ];



    petal.innerHTML =
    flowers[
        Math.floor(
        Math.random()*flowers.length
        )
    ];



    petal.style.position =
    "fixed";



    petal.style.top =
    "-40px";



    petal.style.left =
    Math.random()*100+"vw";



    petal.style.fontSize =
    (18+
    Math.random()*25)
    +"px";



    petal.style.zIndex =
    "50";



    petal.style.pointerEvents =
    "none";



    petal.style.animation =
    `petalFall ${
    7+
    Math.random()*6
    }s linear`;



    document.body.appendChild(
    petal
    );



    setTimeout(()=>{


        petal.remove();


    },14000);



}



setInterval(
createPetal,
1200
);





/*=========================
        SCROLL REVEAL
=========================*/


const revealItems =
document.querySelectorAll(
".video-card, .timeline-card"
);



function revealOnScroll(){


    revealItems.forEach(item=>{


        const position =
        item.getBoundingClientRect()
        .top;



        if(
        position <
        window.innerHeight-100
        ){


            item.style.opacity="1";


            item.style.transform=
            "translateY(0)";


        }



    });


}



window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();





/*=========================
        CURSOR GLOW
=========================*/


const cursorGlow =
document.createElement(
"div"
);



cursorGlow.className =
"cursor-glow";



document.body.appendChild(
cursorGlow
);



document.addEventListener(
"mousemove",
(e)=>{


    cursorGlow.style.left =
    e.clientX+"px";


    cursorGlow.style.top =
    e.clientY+"px";


});
/*==================================================
            VIDEOS.JS - PART 3
            Final Effects & Optimization
==================================================*/


/*=========================
        VIDEO HOVER EFFECT
=========================*/


document
.querySelectorAll(".video-card")
.forEach(card=>{


    card.addEventListener(
        "mouseenter",
        ()=>{


            card.style.transform =
            "translateY(-10px) scale(1.02)";


        }
    );



    card.addEventListener(
        "mouseleave",
        ()=>{


            card.style.transform =
            "translateY(0) scale(1)";


        }
    );


});





/*=========================
        FAVORITE VIDEO
=========================*/


document
.querySelectorAll(".video-card")
.forEach(card=>{


    card.addEventListener(
        "dblclick",
        ()=>{


            card.classList.toggle(
            "favorite-video"
            );



            if(
            card.classList.contains(
            "favorite-video"
            )
            ){


                heartExplosion(card);


            }


        }
    );


});





/*=========================
        HEART EXPLOSION
=========================*/


function heartExplosion(card){


    const position =
    card.getBoundingClientRect();



    for(
    let i=0;
    i<20;
    i++
    ){


        const heart =
        document.createElement(
        "span"
        );



        heart.innerHTML =
        "❤️";



        heart.style.position =
        "fixed";



        heart.style.left =
        position.left+
        position.width/2+
        "px";



        heart.style.top =
        position.top+
        position.height/2+
        "px";



        heart.style.fontSize =
        "22px";



        heart.style.zIndex =
        "9999";



        document.body.appendChild(
        heart
        );



        const x =
        (Math.random()-0.5)
        *250;



        const y =
        (Math.random()-0.5)
        *250;



        heart.animate(

        [

            {

                transform:
                "translate(0,0)",

                opacity:1

            },


            {

                transform:
                `translate(${x}px,${y}px)`,

                opacity:0

            }


        ],


        {

            duration:1500,

            easing:"ease-out"

        }


        );



        setTimeout(()=>{


            heart.remove();


        },1500);



    }


}





/*=========================
        PAUSE OTHER VIDEOS
=========================*/


const allVideos =
document.querySelectorAll(
"video"
);



allVideos.forEach(video=>{


    video.addEventListener(
    "play",
    ()=>{


        allVideos.forEach(other=>{


            if(other!==video){


                other.pause();


            }


        });


    });


});





/*=========================
        VIDEO LOAD OPTIMIZATION
=========================*/


window.addEventListener(
"load",
()=>{


    document
    .querySelectorAll(
    ".video-card"
    )
    .forEach(card=>{


        card.style.opacity="0";


        card.style.transform =
        "translateY(40px)";


        card.style.transition =
        "1s ease";


        setTimeout(()=>{


            card.style.opacity="1";


            card.style.transform =
            "translateY(0)";


        },300);



    });


});





/*=========================
        FAVORITE STYLE
=========================*/


const favoriteStyle =
document.createElement(
"style"
);



favoriteStyle.innerHTML = `


.favorite-video{


    box-shadow:

    0 0 50px rgba(255,94,167,.8)!important;


    transform:

    scale(1.05)!important;


}



.cursor-glow{


    position:fixed;


    width:35px;


    height:35px;


    border-radius:50%;


    background:

    rgba(255,94,167,.25);


    filter:blur(10px);


    pointer-events:none;


    z-index:9999;


}


@keyframes petalFall{


    from{


        transform:

        translateY(0)

        rotate(0deg);


        opacity:1;


    }


    to{


        transform:

        translateY(110vh)

        rotate(360deg);


        opacity:0;


    }


}


`;



document.head.appendChild(
favoriteStyle
);





/*=========================
        FINAL MESSAGE
=========================*/


console.log(

"%c🎥 Video Memories Loaded ❤️",

"color:#ff5ea7;font-size:22px;font-weight:bold"

);


console.log(

"%cMade with love for your special day 💕",

"color:#ff8dc5;font-size:16px"

);