
const encouragements = [
    "من کنارت هستم، نترس از امتحان!",
    "هر اشتباهی یعنی داری یاد می‌گیری.",
    "نفس عمیق بکش، تو قوی‌ای!",
    "اگه خسته‌ای، یه استراحت کوتاه بکن بعد با قدرت برگرد."
];

const listenerImages = {
    jenabkhan: "img/jenabkhan.png",
    kolahghermezi: "img/kolahghermezi.png",
    elsa: "img/elsa.png",
    ladybug: "img/ladybug.png"
};

document.getElementById("listener").addEventListener("change", (e) => {
    document.getElementById("listener-img").src = listenerImages[e.target.value];
});

document.getElementById("encouragement").textContent =
    encouragements[Math.floor(Math.random() * encouragements.length)];
