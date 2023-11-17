"use strict";


// FUNCTIONS

function nextPhoto() {
    if (currentImage < itemsNode.length) {
        itemsNode[currentImage].classList.remove("active");
        thumbnailsNode[currentImage].classList.remove("thumb-active");
        thumbnailsNode[currentImage].classList.add("blacked");
        currentImage++;
        // Funzione loop
        if (currentImage === itemsNode.length) {
            currentImage = 0;
        }
        itemsNode[currentImage].classList.add("active");
        thumbnailsNode[currentImage].classList.add("thumb-active");
        thumbnailsNode[currentImage].classList.remove("blacked");
    }
}

function prevPhoto() {
    if (currentImage >= 0) {
        itemsNode[currentImage].classList.remove("active");
        thumbnailsNode[currentImage].classList.remove("thumb-active");
        thumbnailsNode[currentImage].classList.add("blacked");
        currentImage--;
        // Funzione loop
        if (currentImage === -1) {
            currentImage = itemsNode.length - 1;
        }
        itemsNode[currentImage].classList.add("active");
        thumbnailsNode[currentImage].classList.add("thumb-active");
        thumbnailsNode[currentImage].classList.remove("blacked");
    }
}

// OPERATIONS

// Definizione variabili globali
const imageList = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const itemsElement = document.querySelector(".items");
const itemsThumbnails = document.querySelector(".thumbnails");
const prevChevron = document.querySelector(".prev");
const nextChevron = document.querySelector(".next");
let itemImageContainer = null;
let imageElement = null;
let thumbnailImageContainer = null;
let thumbnailElement = null;
let currentImage = 0;

// Ciclo per inserimento dinamico immagini
for (let i = 0; i < imageList.length; i++) {
    itemImageContainer = document.createElement("div");
    thumbnailImageContainer = document.createElement("div");
    itemImageContainer.classList.add("item");
    thumbnailImageContainer.classList.add("thumbnail");
    thumbnailImageContainer.classList.add("blacked");
    imageElement = document.createElement("img");
    thumbnailElement = document.createElement("img");
    imageElement.src = `./img/${imageList[i]}`;
    thumbnailElement.src = `./img/${imageList[i]}`;
    imageElement.alt = `Immagine${i + 1}`;
    thumbnailElement.alt = `Immagine${i + 1}`;
    itemImageContainer.append(imageElement);
    thumbnailImageContainer.append(thumbnailElement);
    itemsElement.append(itemImageContainer);
    itemsThumbnails.append(thumbnailImageContainer);
};

// Dichiarazione NodeList items
const itemsNode = document.querySelectorAll(".item");
const thumbnailsNode = document.querySelectorAll(".thumbnail");
const playButton = document.getElementById("play-btn");
const stopButton = document.getElementById("stop-btn");
let autoPlayFn = setInterval(nextPhoto, 3000);

itemsNode[0].classList.add("active");
thumbnailsNode[0].classList.add("thumb-active");
thumbnailsNode[0].classList.remove("blacked");


// Creazione shadow layer
const shadowLayer = document.createElement("div");
shadowLayer.classList.add("shadow-layer");
itemsElement.append(shadowLayer);

// Autoplay


// Aggiunta event listener per scorrimento immagini
nextChevron.addEventListener("click", nextPhoto);

prevChevron.addEventListener("click", prevPhoto);

//Aggiunta event listener bottoni
playButton.addEventListener("click", function () {
    autoPlayFn = setInterval(nextPhoto, 3000);
})
stopButton.addEventListener("click", function () {
    clearInterval(autoPlayFn);
})

// Selezione immagine da thumb
let thumbSelectorNode = document.querySelectorAll(".thumbnail");

for (let i = 0; i < thumbSelectorNode.length; i++) {
    thumbSelectorNode[i].addEventListener("click", function () {
        thumbSelectorNode[i].classList.add("thumb-active");
        thumbSelectorNode[i].classList.remove("blacked");
        itemsNode[i].classList.add("active");
        currentImage = i;
        for (let counter = 0; counter < thumbSelectorNode.length; counter++) {
            if (counter != i) {
                thumbSelectorNode[counter].classList.add("blacked");
                thumbSelectorNode[counter].classList.remove("thumb-active");
                itemsNode[counter].classList.remove("active");
            }
        }
    })
}
