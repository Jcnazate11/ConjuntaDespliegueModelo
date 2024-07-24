# app.py
from flask import Flask, request, jsonify, send_from_directory
import joblib
import numpy as np

app = Flask(__name__)

# Cargar el modelo previamente entrenado
model = joblib.load('pickle_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json(force=True)
        
        # Asegurarse de que todas las claves necesarias están presentes
        expected_keys = ["edad", "fnlwgt", "educacion", "educacion_num", "estado_civil", "relacion", "ocupacion", 
                         "raza", "genero", "ganancia-capital", "perdida-capital", "horas_semana", "pais", "tipo_empleo"]
        for key in expected_keys:
            if key not in data:
                return jsonify({'error': f'Missing key: {key} in JSON request'}), 400

        # Crear un array con los valores en el orden esperado por el modelo
        input_data = np.array([float(data[key]) for key in expected_keys]).reshape(1, -1)
        
        # Hacer una predicción
        prediction = model.predict(input_data)
        
        return jsonify({'prediction': prediction.tolist()})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/')
def serve_index():
    return send_from_directory('web', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('web', path)

if __name__ == '__main__':
    app.run(debug=True)
