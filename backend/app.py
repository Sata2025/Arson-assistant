
from flask import Flask, request, send_file
import os
import cv2
import numpy as np

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/analizar-incendio', methods=['POST'])
def analizar_incendio():
    file = request.files['image']
    if not file:
        return "No se envió imagen", 400

    input_path = os.path.join(UPLOAD_FOLDER, 'input.jpg')
    output_path = os.path.join(UPLOAD_FOLDER, 'output.jpg')
    file.save(input_path)

    # Procesamiento simple con OpenCV
    image = cv2.imread(input_path)
    start_point = (300, 200)
    end_point = (380, 280)
    cv2.rectangle(image, start_point, end_point, (0, 0, 255), 2)
    cv2.putText(image, "Inicio", (start_point[0], start_point[1] - 10),
                cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 0, 255), 2)

    avances = [((340, 240), (420, 300)), ((340, 240), (260, 300)), ((340, 240), (340, 360))]
    for a_start, a_end in avances:
        cv2.arrowedLine(image, a_start, a_end, (255, 0, 0), 2, tipLength=0.1)

    cv2.imwrite(output_path, image)
    return send_file(output_path, mimetype='image/jpeg')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
