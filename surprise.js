/*==================================================
            SURPRISE.JS - PART 1
            Gift Reveal System
==================================================*/


/*=========================
        ELEMENTS
=========================*/


const giftBox =
document.querySelector(".gift-box");


const openGift =
document.getElementById(
"openGift"
);



const birthdayMessage =
document.getElementById(
"birthdayMessage"
);





/*=========================
        OPEN GIFT
=========================*/


if(openGift){


    openGift.addEventListener(
        "click",
        ()=>{


            if(giftBox){


                giftBox.classList.add(
                "gift-open"
                );


            }



            setTimeout(()=>{


                if(birthdayMessage){


                    birthdayMessage.classList.add(
                    "show"
                    );


                }


                launchConfetti();



            },800);



            openGift.innerHTML =
            "❤️ Surprise Opened ❤️";



            openGift.disabled=true;



        }
    );


}







/*=========================
        CONFETTI SYSTEM
=========================*/


const confettiContainer =
document.getElementById(
"confetti-container"
);





function launchConfetti(){


    if(!confettiContainer)
    return;



    for(
    let i=0;
    i<120;
    i++
    ){


        createConfetti();


    }


}






function createConfetti(){


    const confetti =
    document.createElement(
    "div"
    );



    confetti.className =
    "confetti";



    const shapes=[

        "❤️",
        "✨",
        "🎉",
        "💖",
        "🌸"

    ];



    confetti.innerHTML =
    shapes[
        Math.floor(
        Math.random()*shapes.length
        )
    ];



    confetti.style.left =
    Math.random()*100+"vw";



    confetti.style.fontSize =
    (15+
    Math.random()*25)
    +"px";



    confetti.style.animationDuration =
    (3+
    Math.random()*3)
    +"s";



    confettiContainer.appendChild(
    confetti
    );



    setTimeout(()=>{


        confetti.remove();


    },6000);


}
/*==================================================
            SURPRISE.JS - PART 2
            Music + Romantic Effects
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
    document.createElement(
    "span"
    );



    const hearts=[


        "❤️",

        "💖",

        "💕",

        "💞",

        "💗"


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
800
);







/*=========================
        FALLING PETALS
=========================*/


function createPetal(){


    const petal =
    document.createElement(
    "div"
    );



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
    (20+
    Math.random()*20)
    +"px";



    petal.style.zIndex =
    "100";



    petal.style.pointerEvents =
    "none";



    petal.style.animation =
    `petalFall ${
    7+
    Math.random()*5
    }s linear`;



    document.body.appendChild(
    petal
    );



    setTimeout(()=>{


        petal.remove();


    },12000);


}



setInterval(
createPetal,
1200
);







/*=========================
        SCROLL REVEAL
=========================*/


const revealElements =
document.querySelectorAll(
".highlight-card, .special-box, .final-box"
);





function revealOnScroll(){


    revealElements.forEach(element=>{


        const position =
        element
        .getBoundingClientRect()
        .top;



        if(
        position <
        window.innerHeight-100
        ){


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
        CURSOR GLOW
=========================*/


const glow =
document.createElement(
"div"
);



glow.className =
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
/*==================================================
            SURPRISE.JS - PART 3
            Final Magic Effects
==================================================*/



/*=========================
        HEART EXPLOSION
=========================*/


function heartExplosion(){


    const hearts=[

        "❤️",
        "💖",
        "💕",
        "💗"

    ];



    for(
    let i=0;
    i<40;
    i++
    ){


        const heart =
        document.createElement(
        "span"
        );



        heart.innerHTML =
        hearts[
            Math.floor(
            Math.random()*hearts.length
            )
        ];



        heart.style.position =
        "fixed";



        heart.style.left =
        "50%";



        heart.style.top =
        "45%";



        heart.style.fontSize =
        (20+
        Math.random()*30)
        +"px";



        heart.style.zIndex =
        "9999";



        document.body.appendChild(
        heart
        );



        const x =
        (Math.random()-0.5)
        *500;



        const y =
        (Math.random()-0.5)
        *500;



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


            duration:2000,


            easing:"ease-out"


        }



        );



        setTimeout(()=>{


            heart.remove();


        },2000);



    }


}







/*=========================
        CONNECT HEART EFFECT
=========================*/


if(openGift){


    openGift.addEventListener(
        "click",
        ()=>{


            setTimeout(()=>{


                heartExplosion();


            },900);



        }
    );


}







/*=========================
        SPARKLE EFFECT
=========================*/


function createSparkle(){


    const sparkle =
    document.createElement(
    "div"
    );



    sparkle.innerHTML =
    "✨";



    sparkle.style.position =
    "fixed";



    sparkle.style.left =
    Math.random()*100+"vw";



    sparkle.style.top =
    Math.random()*100+"vh";



    sparkle.style.fontSize =
    (15+
    Math.random()*25)
    +"px";



    sparkle.style.zIndex =
    "30";



    sparkle.style.pointerEvents =
    "none";



    sparkle.animate(

    [

        {

            opacity:0,

            transform:
            "scale(.5)"

        },


        {

            opacity:1,

            transform:
            "scale(1.5)"

        },


        {

            opacity:0,

            transform:
            "scale(.5)"

        }


    ],


    {


        duration:1500


    }



    );



    document.body.appendChild(
    sparkle
    );



    setTimeout(()=>{


        sparkle.remove();


    },1500);


}



setInterval(
createSparkle,
700
);







/*=========================
        GIFT SHAKE EFFECT
=========================*/


if(giftBox){


    giftBox.addEventListener(
        "mouseenter",
        ()=>{


            if(
            !giftBox.classList.contains(
            "gift-open"
            )
            ){


                giftBox.animate(

                [

                    {
                        transform:
                        "rotate(0)"

                    },


                    {

                        transform:
                        "rotate(8deg)"

                    },


                    {

                        transform:
                        "rotate(-8deg)"

                    },


                    {

                        transform:
                        "rotate(0)"

                    }


                ],


                {

                    duration:500

                }


                );


            }


        }
    );


}







/*=========================
        INITIAL SETTINGS
=========================*/


window.addEventListener(
"load",
()=>{


    document
    .querySelectorAll(
    ".highlight-card, .special-box, .final-box"
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

"%c🎁 Surprise Page Loaded ❤️",

"font-size:25px;color:#ff5ea7;font-weight:bold"

);



console.log(

"%cMade with love for your special person 💕",

"font-size:16px;color:#ff8dc5"

);