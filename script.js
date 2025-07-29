let images = [
    `img1.jpeg`, `img2.jpeg`, `img3.jpeg`, `img4.jpeg`, `img5.jpeg`, `img6.jpeg`, `img7.jpeg`, `img8.jpeg`, `img9.jpeg`, `img10.jpeg`,
    `img11.jpeg`, `img12.jpeg`, `img13.jpeg`, `img14.jpeg`, `img15.jpeg`, `img16.jpeg`, `img17.jpeg`, `img18.jpeg`, `img19.jpeg`, `img20.jpeg`,
];

/**
 * Rendert die Galerie, indem alle Bilder aus dem Array `images` als Thumbnails im Element mit der ID 'gallery' angezeigt werden.
 * Jedes Bild ist klickbar und öffnet das Bild im Dialog.
 */
function render() {
    let gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        gallery.innerHTML += `
            <div class="imgcontainer">
                <img class="imgcontainer" onclick="openImage(${i})" src="./img/${images[i]}"> 
            </div>
        `;
    }
}

/**
 * Öffnet das Bild im Dialog, indem das entsprechende HTML-Template in das Element mit der ID 'dialog' eingefügt wird.
 * @param {number} i - Index des angeklickten Bildes im Array `images`.
 */
function openImage(i) {
    document.getElementById('dialog').innerHTML = imageTemplate(i);
}

/**
 * Gibt das HTML-Template für den Bild-Dialog zurück, inklusive Navigation (vorheriges/nächstes Bild) und Schließen-Button.
 * @param {number} i - Index des aktuell angezeigten Bildes.
 * @returns {string} HTML-String für den Dialog.
 */
function imageTemplate(i) {
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

/**
 * Schließt den Bild-Dialog, indem der Inhalt des Elements mit der ID 'dialog' geleert wird.
 */
function closeImage() {
    document.getElementById('dialog').innerHTML = '';
}

/**
 * Zeigt das vorherige Bild im Dialog an. Bei Erreichen des ersten Bildes wird zum letzten Bild gesprungen.
 * @param {number} i - Index des aktuell angezeigten Bildes.
 */
function previousImage(i) {
    if (i == 0) {
        openImage(i + 19);
    } else {
        openImage(i - 1);
    }
}

/**
 * Zeigt das nächste Bild im Dialog an. Bei Erreichen des letzten Bildes wird zum ersten Bild gesprungen.
 * @param {number} i - Index des aktuell angezeigten Bildes.
 */
function nextImage(i) {
    if (i == 19) {
        openImage(i - 19);
    } else {
        openImage(i + 1);
    }
}