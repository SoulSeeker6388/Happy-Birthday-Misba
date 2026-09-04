// ==========================================
// MISBA BIRTHDAY WEBSITE
// Acode Friendly JavaScript
// ==========================================


// ==========================================
// START SURPRISE
// ==========================================

window.startSurprise = function () {

    const welcome =
        document.getElementById("welcome");

    const message =
        document.getElementById("message");


    if (!welcome || !message) {
        return;
    }


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

    const cake =
        document.getElementById("cake");


    if (!cake) {
        return;
    }


    cake.classList.remove("hidden");


    cake.scrollIntoView({
        behavior: "smooth"
    });


    createConfetti(35);

};


// ==========================================
// BLOW CANDLES
// ==========================================

window.blowCandles = function () {

    const flames =
        document.querySelectorAll(".flame");


    const button =
        document.querySelector(".blow-btn");


    const message =
        document.getElementById("cake-message");


    if (!button || !message) {
        return;
    }


    button.disabled = true;


    button.innerHTML =
        "💨 Candles Blowing...";


    flames.forEach(
        function (flame, index) {

            setTimeout(
                function () {

                    flame.style.transition =
                        "0.5s";

                    flame.style.transform =
                        "scale(0)";

                    flame.style.opacity =
                        "0";

                },
                index * 250
            );

        }
    );


    setTimeout(
        function () {

            message.innerHTML =
                "✨ Wish Made! ✨<br>" +
                "🎂 Happy Birthday Misba! 🎉";


            button.innerHTML =
                "🎉 Celebration Time!";


            createConfetti(120);


            floatingCelebration();

        },
        1200
    );


    setTimeout(
        function () {

            const gallery =
                document.getElementById("gallery");


            if (!gallery) {
                return;
            }


            gallery.classList.remove("hidden");


            gallery.scrollIntoView({
                behavior: "smooth"
            });


        },
        4000
    );

};


// ==========================================
// CONFETTI
// ==========================================

function createConfetti(amount = 30) {

    const container =
        document.getElementById(
            "confetti-container"
        );


    if (!container) {
        return;
    }


    const emojis = [

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


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const confetti =
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
            (
                15 +
                Math.random() * 20
            ) + "px";


        confetti.style.animationDuration =
            (
                2 +
                Math.random() * 3
            ) + "s";


        confetti.style.animationDelay =
            (
                Math.random() * 0.5
            ) + "s";


        container.appendChild(confetti);


        setTimeout(
            function () {

                confetti.remove();

            },
            5500
        );

    }

}


// ==========================================
// FLOATING CELEBRATION
// ==========================================

function floatingCelebration() {

    const emojis = [

        "🎈",
        "💗",
        "💕",
        "✨",
        "🎉"

    ];


    for (
        let i = 0;
        i < 20;
        i++
    ) {

        const item =
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
            (
                20 +
                Math.random() * 20
            ) + "px";


        item.style.zIndex =
            "9998";


        item.style.pointerEvents =
            "none";


        document.body.appendChild(item);


        const animation =
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


    const finalSection =
        document.getElementById("final");


    if (!finalSection) {
        return;
    }


    setTimeout(
        function () {

            finalSection.classList.remove(
                "hidden"
            );


            finalSection.scrollIntoView({
                behavior: "smooth"
            });


        },
        700
    );

};


// ==========================================
// PAGE LOADED
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "🎀 Misba Birthday Website Loaded Successfully 🎂"
        );

    }
);
