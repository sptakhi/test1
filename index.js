/* ==========================================
            LOADING SCREEN
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
        loader.style.transition = "0.8s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 1800);

});

/* ==========================================
            TYPING EFFECT
========================================== */

const typingText =
"Happy Birthday Uppu ❤️";

const typingElement = document.getElementById("typing");

let charIndex = 0;

function typeWriter() {

    if (charIndex < typingText.length) {

        typingElement.innerHTML += typingText.charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter, 500);

    }

}

typeWriter();

/* ==========================================
            FLOATING HEARTS
========================================== */

const heartsContainer = document.getElementById("hearts-container");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize =
        (15 + Math.random() * 35) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    heart.style.opacity =
        Math.random();

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 11000);

}

setInterval(createHeart, 350);

/* ==========================================
            FLOATING STARS
========================================== */

const starsContainer = document.getElementById("stars-container");

function createStar() {

    const star = document.createElement("div");

    star.classList.add("star");

    star.innerHTML = "✦";

    star.style.left =
        Math.random() * window.innerWidth + "px";

    star.style.top =
        Math.random() * window.innerHeight + "px";

    star.style.fontSize =
        (8 + Math.random() * 18) + "px";

    star.style.animationDuration =
        (2 + Math.random() * 4) + "s";

    starsContainer.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 7000);

}

setInterval(createStar, 500);

/* ==========================================
        HERO IMAGE PARALLAX EFFECT
========================================== */

const heroCircle = document.querySelector(".circle");

document.addEventListener("mousemove", (e) => {

    if (!heroCircle) return;

    const x =
        (window.innerWidth / 2 - e.pageX) / 40;

    const y =
        (window.innerHeight / 2 - e.pageY) / 40;

    heroCircle.style.transform =
        `translate(${x}px, ${y}px)`;

});

/* ==========================================
            BUTTON RIPPLE EFFECT
========================================== */

const buttons = document.querySelectorAll(".btn, button");

buttons.forEach((button) => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        const radius = diameter / 2;

        circle.style.width =
            circle.style.height =
            `${diameter}px`;

        circle.style.left =
            `${e.clientX - this.offsetLeft - radius}px`;

        circle.style.top =
            `${e.clientY - this.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple =
            this.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

/* ==========================================
        RANDOM SPARKLES
========================================== */

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left =
        Math.random() * window.innerWidth + "px";

    sparkle.style.top =
        Math.random() * window.innerHeight + "px";

    sparkle.style.fontSize =
        (10 + Math.random() * 15) + "px";

    sparkle.style.pointerEvents = "none";

    sparkle.style.animation =
        "twinkle 2s linear";

    sparkle.style.zIndex = "-1";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 2000);

}

setInterval(createSparkle, 800);

/* ==========================================
            BACKGROUND MUSIC
========================================== */

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        music.play();

        playing=true;

        musicBtn.innerHTML="⏸️";

    }

    else{

        music.pause();

        playing=false;

        musicBtn.innerHTML="🎵";

    }

});

/* ==========================================
        SCROLL TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================================
        SMOOTH NAVIGATION LINKS
========================================== */

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",function(e){

        const href=this.getAttribute("href");

        if(href.startsWith("#")){

            e.preventDefault();

            const target=document.querySelector(href);

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        }

    });

});

/* ==========================================
        ACTIVE NAVBAR LINK
========================================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

/* ==========================================
        SCROLL REVEAL ANIMATION
========================================== */

const revealElements=document.querySelectorAll(

".card,.page-card,.letter,.counter div,.quote,.cake-section"

);

function revealOnScroll(){

    revealElements.forEach(el=>{

        const position=el.getBoundingClientRect().top;

        const windowHeight=window.innerHeight;

        if(position<windowHeight-100){

            el.style.opacity="1";

            el.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(60px)";

    el.style.transition="1s";

});

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();
/* ==========================================
        BLOW CANDLE BUTTON
========================================== */

const wishButton = document.getElementById("wishButton");
const wishMessage = document.getElementById("wishMessage");

const wishes = [
    "🎉 Happy Birthday My Love ❤️",
    "💕 May every dream of yours come true!",
    "🌸 Stay happy, beautiful and healthy always!",
    "🎂 You're the best thing that ever happened to me!",
    "💖 I love you more every single day!",
    "✨ May your smile shine forever!",
    "🎁 You deserve all the happiness in the world!"
];

wishButton.addEventListener("click", () => {

    const randomWish =
        wishes[Math.floor(Math.random() * wishes.length)];

    wishMessage.innerHTML = randomWish;

    createConfetti(180);

});


/* ==========================================
            CONFETTI EFFECT
========================================== */

function createConfetti(number) {

    for (let i = 0; i < number; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * window.innerWidth + "px";

        confetti.style.top = "-20px";

        confetti.style.width =
            Math.random() * 10 + 6 + "px";

        confetti.style.height =
            Math.random() * 18 + 8 + "px";

        confetti.style.borderRadius = "4px";

        const colors = [
            "#ff2d7a",
            "#ff6fa7",
            "#ffd166",
            "#7bdff2",
            "#c77dff",
            "#95f9c3"
        ];

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.pointerEvents = "none";

        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        const duration = 3000 + Math.random() * 2000;

        confetti.animate(
            [
                {
                    transform: "translateY(0px) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: `translateY(${window.innerHeight + 50}px)
                    translateX(${Math.random() * 300 - 150}px)
                    rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );

        setTimeout(() => {

            confetti.remove();

        }, duration);

    }

}


/* ==========================================
        HEART ON MOUSE CLICK
========================================== */

document.addEventListener("click", function (e) {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left = e.clientX + "px";

    heart.style.top = e.clientY + "px";

    heart.style.fontSize = "25px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translateY(0) scale(1)",
                opacity: 1
            },
            {
                transform: "translateY(-120px) scale(2)",
                opacity: 0
            }
        ],
        {
            duration: 1800,
            easing: "ease-out"
        }
    );

    setTimeout(() => {

        heart.remove();

    }, 1800);

});


/* ==========================================
        RANDOM LOVE QUOTES
========================================== */

const loveQuotes = [

    "❤️ You are my favorite notification.",

    "🌸 Every love story is beautiful, but ours is my favorite.",

    "💕 You make my world brighter.",

    "💖 My heart belongs to you.",

    "✨ I choose you every single day.",

    "🥰 You're my home.",

    "🌹 Forever isn't enough with you."

];

function showRandomQuote() {

    const quote = document.querySelector(".quote h2");

    if (!quote) return;

    const random =
        loveQuotes[Math.floor(Math.random() * loveQuotes.length)];

    quote.style.opacity = "0";

    setTimeout(() => {

        quote.innerHTML = random;

        quote.style.opacity = "1";

    }, 500);

}

setInterval(showRandomQuote, 7000);


/* ==========================================
        CURSOR SPARKLE
========================================== */

document.addEventListener("mousemove", function (e) {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left = e.clientX + "px";

    sparkle.style.top = e.clientY + "px";

    sparkle.style.pointerEvents = "none";

    sparkle.style.fontSize = "12px";

    sparkle.style.opacity = "0.8";

    document.body.appendChild(sparkle);

    sparkle.animate(
        [
            {
                transform: "translateY(0)",
                opacity: 1
            },
            {
                transform: "translateY(-20px)",
                opacity: 0
            }
        ],
        {
            duration: 700
        }
    );

    setTimeout(() => {

        sparkle.remove();

    }, 700);

});


/* ==========================================
        AUTO CONFETTI ON PAGE LOAD
========================================== */

setTimeout(() => {

    createConfetti(120);

}, 2500);


/* ==========================================
        CONSOLE MESSAGE ❤️
========================================== */

console.log(
"%cHappy Birthday ❤️",
"color:#ff2d7a;font-size:28px;font-weight:bold;"
);

console.log(
"%cMade with love by your boyfriend 💕",
"color:#ff6fa7;font-size:18px;"
);