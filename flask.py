from flask import Flask, request
from PIL import Image
import io

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return "Kein Bild gefunden", 400
    file = request.files['file']
    if file and file.filename.endswith('.png'):
        img = Image.open(file)
        img.save(f"uploads/{file.filename}")
        return f"Bild {file.filename} gespeichert!", 200
    return "Ungültiges Bildformat", 400

if __name__ == '__main__':
    app.run(debug=True)
