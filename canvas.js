document.getElementById('loadImageButton').addEventListener('click', loadImage);
document.getElementById('resetButton').addEventListener('click', resetCanvas);
document.getElementById('colorPicker').addEventListener('input', updateBrushColor);
document.getElementById('brushSize').addEventListener('input', updateBrushSize);

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let brushColor = '#ff0000';  // Standardfarbe: Rot
let brushSize = 1;
let img = new Image();

function loadImage() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    
    fileInput.onchange = function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            img.onload = function() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);  // Alte Bilder löschen
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);  // Bild auf Canvas laden
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };
    
    fileInput.click();
}

function updateBrushColor(event) {
    brushColor = event.target.value;
}

function updateBrushSize(event) {
    brushSize = event.target.value;
}

canvas.addEventListener('click', function(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    
    // Zeichne ein Pixel
    ctx.fillStyle = brushColor;
    ctx.fillRect(x - brushSize / 2, y - brushSize / 2, brushSize, brushSize);
});

function resetCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Löscht das gesamte Bild
}
