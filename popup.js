console.log("Popup script loaded"); // Console log scripts to see if ran.
console.log("Time Machine is now Ready")

const text = "Hello, World";
const el = document.getElementById("typewriter"); // typewriter element fetched from popup
let i = 0;
let speed = 1.35; // speed of typing for Hello, World text

function type() {
    if (i < text.length) {
        el.textContent += text[i];
        i++;
        setTimeout(type, 80/speed); // do not modify 80, instead modify speed variable.
    }
}

type(); // runs function type.

// Get Started Menu:

document.getElementById("get-started").addEventListener("click", () => {
    document.getElementById("step-1").classList.add("hidden");
    document.getElementById("step-2").classList.remove("hidden");
});

document.querySelector(".help-icon").addEventListener("click", () => {
    alert("Navigate to a site, tap the icon, then enjoy!");
}); // Navigate to a site, and enjoy! ? icon click event here.