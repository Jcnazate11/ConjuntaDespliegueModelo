#Predicción de Salario

Este es un proyecto de predicción de salario utilizando Flask. La aplicación permite al usuario ingresar varios parámetros para predecir si el salario de una persona es mayor o menor a $50,000.
Requisitos

    Python 3.7 o superior
    pip (el gestor de paquetes de Python)

#Instalación

Sigue estos pasos para clonar y ejecutar el proyecto localmente.

Clona el repositorio:

  

    git clone [https://github.com/tu_usuario/tu_repositorio.git](https://github.com/Jcnazate11/ConjuntaDespliegueModelo.git)

Abre un cmd  y redirecciona a la carpeta donde se tiene el proyecto descargado  o clonado , colocada :

    cd tu_repositorio


Activa el entorno virtual:

En Windows:

    myenv\Scripts\activate

Instala las dependencias:

    pip install -r requirements.txt

Asegúrate de tener el archivo pickle_model.pkl en el directorio del proyecto. Este archivo contiene el modelo previamente entrenado.

Ejecuta la aplicación:

    python app.py

#Uso

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

Después de ingresar los datos, haz clic en "Predecir". La aplicación te mostrará si el salario de la persona es mayor o menor a $50,000.
Modelos

En la carpeta Modelos se encuentran los códigos en formato .ipynb (Jupyter Notebook) de los algoritmos de Aprendizaje Supervisado utilizados en el proyecto, que incluyen:

    Regresión (seleccionar uno)
    SVM (4 kernels)
    k-NN (identificar el mejor número para k)
    Árboles de decisión
    Bayes
    Redes neuronales

Estos notebooks contienen el código y el proceso de entrenamiento de cada uno de los modelos utilizados para la predicción de salarios.

Para realizar el archivo .csv se debe correr el el codigo Examen_PreparacionData_Nazate_Esparza, el cual realiza el proceso de analisis de la data, limpieza de la data y despues guarda el data nuevo en un archivo .csv.

Con estos pasos y detalles adicionales, deberías poder clonar, instalar, y ejecutar el proyecto de predicción de salarios localmente, así como entender y explorar los distintos modelos de aprendizaje supervisado utilizados.

Proyecto en Ejecución:

![imagen](https://github.com/user-attachments/assets/ca882300-6bf9-4fd8-95a5-80b2e8a4715e)

![imagen](https://github.com/user-attachments/assets/be2c37f0-e11c-47b1-b4b4-36d065963ac5)
