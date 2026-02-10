// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

// noBtn.addEventListener("mouseover", () => {
//     const min = 200;
//     const max = 200;

//     const distance = Math.random() * (max - min) + min;
//     const angle = Math.random() * Math.PI * 2;

//     const moveX = Math.cos(angle) * distance;
//     const moveY = Math.sin(angle) * distance;

//     noBtn.style.transition = "transform 0.3s ease";
//     noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
// });

// Logic to make YES btn to grow

let yesScale = 1;

yesBtn.style.position = "relative"
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
    yesScale += 2;

    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }else{
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});

// 2. Photo Gallery Logic
const galleryContainer = document.getElementById("gallery-container");
const galleryImg = document.getElementById("gallery-img");
const letterWindow = document.querySelector(".letter-window");

// REPLACE THESE with your actual file names!
const photos = [
    "20250612_112654.jpg", 
    "20250903_112746.jpg", 
    "20250903_143846.jpg",
    "20250908_115244.jpg",
    "20251008_155413.jpg",
    "IMG_20250826_151648_450.jpg",
    "Snapchat-586143590.jpg"
];

let photoIndex = 0;
let isGalleryOpen = false;

letterWindow.addEventListener("click", () => {
    // Only run if the "Yes" button has been clicked already
    if (!letterWindow.classList.contains("final")) return;

    if (!isGalleryOpen) {
        // First click: Open the gallery
        isGalleryOpen = true;
        
        // Hide the text/cat elements
        title.style.display = "none";
        catImg.style.display = "none";
        finalText.style.display = "none";
        
        // Adjust window layout
        letterWindow.classList.add("gallery-mode");
        
        // Show gallery
        galleryContainer.style.display = "flex";
        galleryImg.src = photos[photoIndex];
    } else {
        // Subsequent clicks: Cycle through photos
        photoIndex = (photoIndex + 1) % photos.length;
        galleryImg.src = photos[photoIndex];
    }
});
