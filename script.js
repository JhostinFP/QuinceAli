// =========================
// MUSICA
// =========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

// Botón de música
musicBtn.addEventListener("click", () => {

```
if (playing) {
    music.pause();
    musicBtn.innerHTML = "♪";
    playing = false;
} else {
    music.play()
        .then(() => {
            musicBtn.innerHTML = "❚❚";
            playing = true;
        })
        .catch(error => {
            console.log("La reproducción fue bloqueada:", error);
        });
}
```

});

// =========================
// PRIMER TOQUE EN MOVIL
// =========================

document.addEventListener(
"click",
() => {


    if (!playing) {

        music.play()
            .then(() => {
                playing = true;
                musicBtn.innerHTML = "❚❚";
            })
            .catch(() => {});

    }

},
{ once: true }


);

// =========================
// CONTADOR REGRESIVO
// =========================

const eventDate = new Date("2026-06-27T20:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {


const now = new Date().getTime();

const distance = eventDate - now;

if (distance <= 0) {

    document.getElementById("countdown").innerHTML = `
        <div style="
            background:white;
            padding:30px;
            border-radius:20px;
            font-size:1.2rem;
            font-weight:bold;
            color:#8f6a6a;
        ">
            ✨ ¡El gran día ha llegado! ✨
        </div>
    `;

    return;
}

const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
);

const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
);

const minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
);

const seconds = Math.floor(
    (distance % (1000 * 60))
    / 1000
);

daysEl.textContent = days;
hoursEl.textContent = hours;
minutesEl.textContent = minutes;
secondsEl.textContent = seconds;


}

updateCountdown();

setInterval(updateCountdown, 1000);

// =========================
// ANIMACIONES AL SCROLL
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {


reveals.forEach(element => {

    const windowHeight = window.innerHeight;

    const elementTop =
        element.getBoundingClientRect().top;

    const visiblePoint = 120;

    if (elementTop < windowHeight - visiblePoint) {
        element.classList.add("active");
    }

});


}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =========================
// EFECTO SUAVE EN BOTONES
// =========================

const buttons = document.querySelectorAll(
".btn, .whatsapp-btn, .music-btn"
);

buttons.forEach(button => {


button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-3px)";
});

button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
});


});
