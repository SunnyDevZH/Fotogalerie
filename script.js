let images = [`img1.jpeg`, `img2.jpeg`, `img3.jpeg`, `img4.jpeg`, `img5.jpeg`, `img6.jpeg`, `img7.jpeg`, `img8.jpeg`, `img9.jpeg`, `img10.jpeg`, `img11.jpeg`, `img12.jpeg`, `img13.jpeg`, `img14.jpeg`, `img15.jpeg`, `img16.jpeg`, `img17.jpeg`, `img18.jpeg`, `img19.jpeg`, `img20.jpeg`,];

function render() {
    let gallery =  document.getElementById('gallery'); // Zugriff auf Div Gallerie

    gallery.innerHTML = ' '; // Div leeren
    for(let i = 0; i < 20; i++) { // rendern von Gallerie
    gallery.innerHTML += `
        <div class="imgcontainer">
            <img class="imgcontainer" onclick="openImage(${i})"src="./img/${images[i]}"> 
        </div>
        `;
    }
}

function openImage(i) { // Funktion 1 aufgerufen durch onclick
    document.getElementById('dialog').innerHTML = imageTemplate(i); // Zugriff auf Div Dialog
}

function imageTemplate(i) { // Funktion 2 aufgerufen durch Funktion 1
    return `
    <div class="dialog-bg">
        <div>
            <button onclick="closeImage()" class="close">X</button>
            <button onclick="previousImage(${i})" class="previous">Vorheriges Bild</button> 
            <img class="imgcontainerDialog" src="./img/${images[i]}">
            <button onclick="nextImage(${i})" class="next">Nächstes Bild</button>
        </div>
    </div>`;
}

function closeImage() { // Schliesen Funktion durch onclick 
    document.getElementById('dialog').innerHTML = ''; // Div leer
}

function previousImage(i) { // vorheriges bild anzegen durch 
    if (i == 0) {
            openImage(i+19); // beim letzten bild starten
    }   else {
            openImage(i-1); // ein bild zurück springen
    }
}

function nextImage(i) { // nächstes bild
    if (i == 19) {
            openImage(i-19); // beim ersten bild starten
    }   else {
            openImage(i+1); // ein bild weiter
    }
}