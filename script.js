// ==========================================
// MISBA BIRTHDAY WEBSITE
// ==========================================


// ==========================================
// START SURPRISE
// ==========================================

window.startSurprise = function () {

    var welcome = document.getElementById("welcome");
    var message = document.getElementById("message");

    if (!welcome || !message) return;

    welcome.classList.add("hidden");
    message.classList.remove("hidden");

    message.scrollIntoView({
        behavior: "smooth"
    });

    createConfetti(30);
};


// ==========================================
// SHOW CAKE
// ==========================================

window.showCake = function () {

    var cakeSection = document.getElementById("cake");

    if (!cakeSection) return;

    cakeSection.classList.remove("hidden");

    cakeSection.scrollIntoView({
        behavior: "smooth"
    });

    createConfetti(35);
};


// ==========================================
// BLOW CANDLES
// ==========================================

window.blowCandles = function () {

    var flames = document.querySelectorAll(".flame");
    var button = document.querySelector(".blow-btn");
    var message = document.getElementById("cake-message");

    if (!button || !message) return;

    button.disabled = true;
    button.innerHTML = "💨 Candles Blowing...";


    flames.forEach(function (flame, index) {

        setTimeout(function () {

            flame.style.transition = "0.5s ease";
            flame.style.transform = "scale(0)";
            flame.style.opacity = "0";

        }, index * 250);

    });


    setTimeout(function () {

        message.innerHTML =
            "✨ Wish Made! ✨<br>" +
            "🎂 Happy Birthday Misba! 🎉";


        // IMPORTANT:
        // Same button becomes Cut The Cake
        button.innerHTML = "🔪 Cut The Cake!";
        button.disabled = false;

        button.onclick = function () {
            cutCake();
        };


        createConfetti(80);

    }, 1500);
};


// ==========================================
// CUT THE CAKE
// ==========================================

function cutCake() {

    var cake = document.querySelector(".cake");
    var button = document.querySelector(".blow-btn");
    var message = document.getElementById("cake-message");

    if (!cake || !button || !message) return;


    if (cake.getAttribute("data-cut") === "true") {
        return;
    }

    cake.setAttribute("data-cut", "true");


    button.disabled = true;
    button.innerHTML = "🔪 Cutting Cake...";

    message.innerHTML =
        "🔪 Knife is cutting the cake... 🎂";


    // ======================================
    // KNIFE
    // ======================================

    var knife = document.createElement("div");

    knife.className = "cake-knife";

    knife.innerHTML = "🔪";

    knife.style.position = "absolute";
    knife.style.left = "50%";
    knife.style.top = "-65px";
    knife.style.transform =
        "translateX(-50%) rotate(-35deg)";
    knife.style.fontSize = "45px";
    knife.style.lineHeight = "1";
    knife.style.zIndex = "1000";
    knife.style.pointerEvents = "none";
    knife.style.transition =
        "top 1.2s ease-in-out";


    cake.appendChild(knife);


    // ======================================
    // CUT LINE
    // ======================================

    var cutLine = document.createElement("div");

    cutLine.className = "cake-cut-line";

    cutLine.style.position = "absolute";
    cutLine.style.left = "50%";
    cutLine.style.top = "8%";
    cutLine.style.width = "3px";
    cutLine.style.height = "84%";
    cutLine.style.background =
        "white";
    cutLine.style.boxShadow =
        "0 0 10px white";
    cutLine.style.transform =
        "translateX(-50%) scaleY(0)";
    cutLine.style.transformOrigin = "top";
    cutLine.style.zIndex = "900";
    cutLine.style.transition =
        "transform 0.8s ease";
    cutLine.style.pointerEvents = "none";


    cake.appendChild(cutLine);


    // ======================================
    // KNIFE CUTS DOWN
    // ======================================

    setTimeout(function () {

        knife.style.top = "35%";

        cutLine.style.transform =
            "translateX(-50%) scaleY(1)";

    }, 100);


    // ======================================
    // CREATE TWO CAKE PIECES
    // ======================================

    setTimeout(function () {

        cake.classList.add("cake-is-cut");


        // LEFT PIECE
        var leftPiece =
            document.createElement("div");

        leftPiece.className =
            "cake-half cake-half-left";

        leftPiece.innerHTML = "🍰";

        leftPiece.style.left = "25%";
        leftPiece.style.top = "50%";
        leftPiece.style.fontSize = "45px";
        leftPiece.style.opacity = "0";
        leftPiece.style.transform =
            "translate(-50%, -50%)";


        // RIGHT PIECE
        var rightPiece =
            document.createElement("div");

        rightPiece.className =
            "cake-half cake-half-right";

        rightPiece.innerHTML = "🍰";

        rightPiece.style.left = "75%";
        rightPiece.style.top = "50%";
        rightPiece.style.fontSize = "45px";
        rightPiece.style.opacity = "0";
        rightPiece.style.transform =
            "translate(-50%, -50%)";


        leftPiece.style.transition =
            "all 0.8s ease";

        rightPiece.style.transition =
            "all 0.8s ease";


        cake.appendChild(leftPiece);
        cake.appendChild(rightPiece);


        setTimeout(function () {

            leftPiece.style.opacity = "1";

            leftPiece.style.transform =
                "translate(-50%, -50%) translateX(-25px) rotate(-5deg)";


            rightPiece.style.opacity = "1";

            rightPiece.style.transform =
                "translate(-50%, -50%) translateX(25px) rotate(5deg)";

        }, 50);


        // Knife finishes cutting
        knife.style.top = "65%";


    }, 1400);


    // ======================================
    // CELEBRATION
    // ======================================

    setTimeout(function () {

        message.innerHTML =
            "🎂✨ Cake Cut Ho Gaya! ✨🎂<br>" +
            "🎉 Celebration Time! 🎉";


        button.innerHTML =
            "🎉 Celebration Time!";

        button.disabled = false;


        createConfetti(150);
        floatingCelebration();


    }, 2800);


    // ======================================
    // SHOW GALLERY
    // ======================================

    setTimeout(function () {

        var gallery =
            document.getElementById("gallery");

        if (!gallery) return;

        gallery.classList.remove("hidden");

        gallery.scrollIntoView({
            behavior: "smooth"
        });

    }, 5000);
}


// ==========================================
// CONFETTI
// ==========================================

/**
 * @param {number} amount
 */

function createConfetti(amount) {

    var container =
        document.getElementById(
            "confetti-container"
        );

    if (!container) return;


    var emojis = [
        "🎉",
        "🎊",
        "✨",
        "💗",
        "💖",
        "💕",
        "🎈",
        "🌸",
        "⭐"
    ];


    for (var i = 0; i < amount; i++) {

        var confetti =
            document.createElement("div");


        confetti.className =
            "confetti";


        confetti.innerHTML =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.fontSize =
            15 + Math.random() * 20 + "px";


        confetti.style.animationDuration =
            2 + Math.random() * 3 + "s";


        confetti.style.animationDelay =
            Math.random() * 0.5 + "s";


        container.appendChild(confetti);


        setTimeout(function () {

            if (confetti) {
                confetti.remove();
            }

        }, 5500);
    }
}


// ==========================================
// FLOATING CELEBRATION
// ==========================================

function floatingCelebration() {

    var emojis = [
        "🎈",
        "💗",
        "💕",
        "✨",
        "🎉",
        "🌸",
        "🎂"
    ];


    for (var i = 0; i < 20; i++) {

        var item =
            document.createElement("div");


        item.innerHTML =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        item.style.position =
            "fixed";


        item.style.left =
            Math.random() * 100 + "vw";


        item.style.bottom =
            "-50px";


        item.style.fontSize =
            20 + Math.random() * 20 + "px";


        item.style.zIndex =
            "9998";


        item.style.pointerEvents =
            "none";


        document.body.appendChild(item);


        var animation =
            item.animate(
                [
                    {
                        transform:
                            "translateY(0) rotate(0deg)",
                        opacity: 1
                    },

                    {
                        transform:
                            "translateY(-110vh) rotate(360deg)",
                        opacity: 0
                    }
                ],

                {
                    duration:
                        3000 +
                        Math.random() * 2000,

                    easing:
                        "ease-out"
                }
            );


        animation.onfinish =
            function () {

                item.remove();

            };
    }
}


// ==========================================
// FINAL SURPRISE
// ==========================================

window.showFinalMessage = function () {

    createConfetti(100);


    var finalSection =
        document.getElementById("final");


    if (!finalSection) return;


    setTimeout(function () {

        finalSection.classList.remove(
            "hidden"
        );


        finalSection.scrollIntoView({
            behavior: "smooth"
        });


    }, 700);
};


// ==========================================
// PAGE LOADED
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Misba Birthday Website Loaded Successfully"
        );

    }
);
