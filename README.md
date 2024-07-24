# Predicción de Salario

Este es un proyecto de predicción de salario utilizando Flask. La aplicación permite al usuario ingresar varios parámetros para predecir si el salario de una persona es mayor o menor a $50,000.

## Requisitos

- Python 3.7 o superior
- pip (el gestor de paquetes de Python)

## Instalación

Sigue estos pasos para clonar y ejecutar el proyecto localmente.

1. Clona el repositorio:


   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio
   Crea un entorno virtual:

bash

python -m venv venv

Activa el entorno virtual:

    En Windows:


bash
myenv\Scripts\activate

En macOS/Linux:

bash

    source venv/bin/activate

Instala las dependencias:



pip install -r requirements.txt

Asegúrate de tener el archivo pickle_model.pkl en el directorio del proyecto. Este archivo contiene el modelo previamente entrenado.

Ejecuta la aplicación:



python app.py


Uso

Una vez que la aplicación esté en ejecución, abre tu navegador web y ve a http://127.0.0.1:5000/. Verás un formulario donde puedes ingresar los parámetros para la predicción.
Parámetros del formulario

    Edad: Edad de la persona.
    Peso Final (FNLWGT): El peso final de la persona.
    Educación: Nivel educativo.
    Estado Civil: Estado civil de la persona.
    Relación: Relación con la familia.
    Ocupación: Ocupación de la persona.
    Raza: Raza de la persona.
    Género: Género de la persona.
    Ganancia de Capital: Ganancia de capital.
    Pérdida de Capital: Pérdida de capital.
    Horas por Semana: Horas trabajadas por semana.
    País: País de residencia.
    Tipo de Empleo: Tipo de empleo.

Predicción

Después de ingresar los datos, haz clic en "Predecir". La aplicación te mostrará si el salario de la persona es mayor o menor a $50,000.
