document.getElementById('prediction-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    let data = Object.fromEntries(formData);

    // Convertir todos los valores a números
    for (let key in data) {
        data[key] = isNaN(data[key]) ? data[key] : parseFloat(data[key]);
    }

    // Duplicar el valor de educación en educación_num
    data['educacion_num'] = data['educacion'];

    // Convertir pais a 0 si no es United-States, y 1 si es United-States
    if (data['pais'] === 38) {
        data['pais'] = 1;
    } else {
        data['pais'] = 0;
    }

    // Convertir ganancia-capital y perdida-capital según las reglas dadas
    data['ganancia-capital'] = data['ganancia-capital'] > 0 ? 1 : 0;
    data['perdida-capital'] = data['perdida-capital'] > 0 ? 1 : 0;

    // Clasificar estado civil
    const estadoCivilMapping = {
        "Divorced": 1,
        "Married-spouse-absent": 1,
        "Never-married": 1,
        "Separated": 1,
        "Widowed": 1,
        "Married-AF-spouse": 0,
        "Married-civ-spouse": 0
    };

    data['estado_civil'] = estadoCivilMapping[data['estado_civil']];

    try {
        const response = await fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            const prediction = result.prediction[0]; // Asumiendo que la predicción es una lista con un solo valor
            let message;
            if (prediction === 1) {
                message = "El ciudadano tiene un salario mayor a $50,000.";
            } else {
                message = "El ciudadano tiene un salario menor o igual a $50,000.";
            }
            document.getElementById('result').textContent = 'Predicción: ' + message;
        } else {
            const error = await response.json();
            document.getElementById('result').textContent = 'Error: ' + error.error;
        }
    } catch (error) {
        document.getElementById('result').textContent = 'Error: ' + error.message;
    }
});
