/*==================================================
            GALLERY.JS - PART 1
            Upload + Lightbox System
==================================================*/

/*=========================
        CREATE PHOTO CARD
=========================*/


function createGalleryCard(imageURL){


    const card =
    document.createElement("div");


    card.className =
    "photo-card";



    card.innerHTML = `

        <img src="${imageURL}"
        alt="Our Memory">


        <div class="overlay">


            <h3>
            Beautiful Memory ❤️
            </h3>


            <p>
            A moment worth remembering forever.
            </p>


        </div>

    `;



    galleryContainer.prepend(card);



    addLightboxEvent(card);


}



/*=========================
        LIGHTBOX
=========================*/


const lightbox =
document.getElementById("lightbox");


const lightboxImage =
document.getElementById("lightboxImage");


const lightboxCaption =
document.getElementById("lightboxCaption");



function addLightboxEvent(card){


    const image =
    card.querySelector("img");



    image.addEventListener(
        "click",
        ()=>{


            lightbox.style.display =
            "flex";


            lightboxImage.src =
            image.src;



            const title =
            card.querySelector("h3");


            if(title){

                lightboxCaption.innerHTML =
                title.innerHTML;

            }



            document.body.classList.add(
                "lightbox-active"
            );


        }
    );


}



/* Add Lightbox to existing images */


document
.querySelectorAll(".photo-card")
.forEach(card=>{


    addLightboxEvent(card);


});



/*=========================
        CLOSE LIGHTBOX
=========================*/


const closeLightbox =
document.getElementById("closeLightbox");



if(closeLightbox){


    closeLightbox.onclick=function(){


        closeImageViewer();


    };


}



function closeImageViewer(){


    lightbox.style.display =
    "none";


    lightboxImage.src="";


    document.body.classList.remove(
        "lightbox-active"
    );


}



/* Close when clicking outside image */


if(lightbox){


    lightbox.addEventListener(
        "click",
        function(e){


            if(e.target===lightbox){


                closeImageViewer();


            }


        }
    );


}
/*==================================================
            GALLERY.JS - PART 2
            Music + Hearts + Animations
==================================================*/


/*=========================
        MUSIC CONTROL
=========================*/


window.addEventListener("load", () => {

    const music = document.getElementById("bgMusic");

    music.volume = 0.5;
    music.loop = true;

    music.play().catch(() => {

        function startMusic() {
            music.play();

            document.removeEventListener("click", startMusic);
            document.removeEventListener("touchstart", startMusic);
            document.removeEventListener("keydown", startMusic);
        }

        document.addEventListener("click", startMusic);
        document.addEventListener("touchstart", startMusic);
        document.addEventListener("keydown", startMusic);
    });

});



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



    const hearts=[

        "❤️",
        "💖",
        "💕",
        "💗",
        "💞"

    ];



    heart.innerHTML =
    hearts[
        Math.floor(
        Math.random()*hearts.length
        )
    ];



    heart.style.left =
    Math.random()*100+"vw";



    heart.style.fontSize =
    (20+
    Math.random()*35)
    +"px";



    heart.style.animationDuration =
    (10+
    Math.random()*10)
    +"s";



    heartContainer.appendChild(
    heart
    );



    setTimeout(()=>{


        heart.remove();


    },20000);



}



setInterval(
createHeart,
800
);



/*=========================
        EXTRA STARS
=========================*/


const background =
document.querySelector(
".stars"
);



function createStar(){


    if(!background)
    return;



    const star =
    document.createElement("div");



    star.className=
    "generated-star";



    star.style.left =
    Math.random()*100+"%";



    star.style.top =
    Math.random()*100+"%";



    star.style.animationDuration =
    (2+
    Math.random()*5)
    +"s";



    background.appendChild(
    star
    );



    setTimeout(()=>{


        star.remove();


    },7000);


}



setInterval(
createStar,
500
);



/*=========================
        SCROLL REVEAL
=========================*/


const revealElements =
document.querySelectorAll(
".photo-card, .timeline-item, .love-card"
);



function revealOnScroll(){


    revealElements.forEach(element=>{


        const position =
        element.getBoundingClientRect()
        .top;



        const screenHeight =
        window.innerHeight;



        if(position <
        screenHeight-100){


            element.style.opacity="1";


            element.style.transform=
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
        MOUSE GLOW EFFECT
=========================*/


const glow =
document.createElement("div");


glow.className=
"cursor-glow";


document.body.appendChild(
glow
);



document.addEventListener(
"mousemove",
(e)=>{


    glow.style.left =
    e.clientX+"px";


    glow.style.top =
    e.clientY+"px";


});



/*=========================
        IMAGE HOVER SOUND
=========================*/


document
.querySelectorAll(".photo-card")
.forEach(card=>{


    card.addEventListener(
    "mouseenter",
    ()=>{


        card.style.transition=
        ".4s";


    });


});
/*==================================================
            GALLERY.JS - PART 3
            Final Effects & Polish
==================================================*/


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
    "-50px";


    petal.style.left =
    Math.random()*100+"vw";


    petal.style.fontSize =
    (20+
    Math.random()*25)
    +"px";


    petal.style.zIndex =
    "10";


    petal.style.pointerEvents =
    "none";


    petal.style.animation =
    `petalFall ${8+
    Math.random()*6}s linear`;



    document.body.appendChild(
    petal
    );



    setTimeout(()=>{


        petal.remove();


    },14000);


}



setInterval(
createPetal,
1000
);



/*=========================
        TYPING MESSAGE
=========================*/


const typingText =
document.querySelector(
".ending-content p"
);



if(typingText){


    const message =
    typingText.innerHTML;


    typingText.innerHTML="";


    let index=0;



    function typeWriter(){


        if(index <
        message.length){


            typingText.innerHTML +=
            message.charAt(index);



            index++;


            setTimeout(
            typeWriter,
            35
            );


        }


    }



    setTimeout(
    typeWriter,
    1500
    );


}






/*=========================
        FAVORITE PHOTO EFFECT
=========================*/


document
.querySelectorAll(".photo-card")
.forEach(card=>{


    card.addEventListener(
    "dblclick",
    ()=>{


        card.classList.toggle(
        "favorite"
        );


        if(
        card.classList.contains(
        "favorite"
        )
        ){


            createHeartExplosion(
            card
            );


        }


    });


});



function createHeartExplosion(card){


    const rect =
    card.getBoundingClientRect();



    for(let i=0;i<20;i++){


        const heart =
        document.createElement("span");



        heart.innerHTML="❤️";



        heart.style.position=
        "fixed";


        heart.style.left =
        rect.left+
        rect.width/2+
        "px";


        heart.style.top =
        rect.top+
        rect.height/2+
        "px";



        heart.style.fontSize =
        "20px";


        heart.style.zIndex=
        "9999";



        document.body.appendChild(
        heart
        );



        const x =
        (Math.random()-0.5)
        *200;


        const y =
        (Math.random()-0.5)
        *200;



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
        PERFORMANCE CLEANUP
=========================*/


window.addEventListener(
"load",
()=>{


    document
    .querySelectorAll(
    ".photo-card"
    )
    .forEach(card=>{


        card.style.opacity="0";

        card.style.transform=
        "translateY(40px)";


        card.style.transition=
        "1s ease";


    });


});



/*=========================
        FINAL MESSAGE
=========================*/


console.log(

"%c❤️ Gallery Loaded Successfully ❤️",

"font-size:22px;color:#ff5ea7;font-weight:bold"

);


console.log(

"%cMade with love for your special person 💕",

"font-size:16px;color:#ff8dc5"

);