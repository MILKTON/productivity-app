# productivity-app
 Productivity application in which users can record the time it takes them to execute tasks, manage them and filter them.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Requerimientos del Usuario 

El usuario puede realizar las siguientes acciones:
- [x] Crear una tarea
- [ ] Modificar duración de la tarea
- [x] Modificar descripción de la tarea
- [x] Eliminar una tarea
- [ ] Reordenar la lista de tareas
- [x] Comenzar con la tarea en curso
- [x] Pausar, detener o reiniciar el temporizador
- [x] Marcar la tarea en curso como finalizada
- [x] Ver el historial de tareas completadas
- [ ] Ver una gráfica de su historial de tareas en la última semana
- [x] Filtrar la lista de tareas pendientes según su duración:
  - corto 30 min o menos
  - medio: de 30 min a 1h
  - largo: más de 1h

# Reglas de negocio
- [ ] La tarea en curso es la tarea que está al inicio de la lista.
- [ ] Al marcar la tarea en curso como completada, debe registrarse el tiempo que tomó al usuario completar dicha tarea.
- [ ] Al cerrar la aplicación, el temporizador siempre se pausa.
- [x] Se manejan tres duraciones predeterminadas para una tarea ( corta: 30 min, media: 45 min, larga: 1h )
- [x] El usuario también puede definir su propia duración en minutos y segundos para una tarea, la cual no puede superar las dos horas.
- [ ] Al expirar el tiempo de la tarea en curso, ésta se marca como completada

# Interfaz de usuario
- [x] Los componentes de la interfaz deben ser desarrollados en React.
- [x] framework de UI: react-bootstrap 
- [ ] framework de gráfica: react-d3
- [x] Se recomienda los componentes se estructuren entre contenedores y presentacionales (stateful vs stateless)
- [x] Cuidar la responsividad de la interfaz en múltiples dispositivos


# Aplicación
- [x] Los componentes deberían utilizar react hooks.
- [x] Debe existir una función para prellenar la aplicación con 50 tareas aleatorias, completadas consumiendo entre el 80% y el 100% de su duración, distribuidas en la última semana

# Código
- [x] Desarrollar el código utilizando la especificación más reciente de JavaScript (ES6)
- [ ] Incluir suficientes comentarios en el código
- [x] Manejar control de versiones

# Opcionales
- [ ] Persistir el estado de la aplicación a través de un API
- [x] Desplegar la aplicación en un servicio PaaS como Heroku
- [ ] Incluir pruebas unitarias para la manipulación del estado de la aplicación
