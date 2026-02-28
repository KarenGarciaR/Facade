
# Facade
----Descripción General----

El proyecto implementa el patrón de diseño Facade, cuyo objetivo es simplificar la interacción con múltiples subsistemas complejos a través de una interfaz unificada. En este ejemplo, se simula un sistema simple, ejemplificando reservas de hotel donde el usuario puede realizar una reserva y efectuar un pago sin necesidad de interactuar directamente con cada servicio individual.
Este diseño mejora la legibilidad, mantenibilidad y modularidad del código, permitiendo que los cambios internos de los subsistemas no afecten al cliente.

---Estructura del Código---

Facade/
│
├─ node_modules/              
├─ public/
│   └─ index.html             # Interfaz web del sistema
├─ routes/
│   └─ reservaRoutes.js       # Rutas de Express para manejar reservas
├─ services/
│   ├─ DisponibilidadService.js  # Verifica disponibilidad de habitaciones
│   ├─ NotificacionService.js    # Envía notificaciones en la consola
│   ├─ ReservaFacade.js          # Fachada que unifica todos los servicios
│   └─ ValidacionService.js      # Valida datos de reservas
├─ app.js                      # Servidor principal de Express
├─ package.json                
└─ package-lock.json           

---Diagramas UML---

Diagrama de Clases

+------------------------+         +------------------------+
| DisponibilidadService  |         |   ValidacionService     |
+------------------------+         +------------------------+
| - habitaciones: []     |         | - reglas: []           |
+------------------------+         +------------------------+
| +verificarDisponibilidad() |     | +validarDatos()         |
+------------------------+         +------------------------+
           ^                                ^
           |                                |
           +---------------+----------------+
                           |
                  +--------------------+
                  |  ReservaFacade     |
                  +--------------------+
                  | +realizarReserva() |
                  +--------------------+
                           ^
                           |
                 +------------------------+
                 | NotificacionService     |
                 +------------------------+
                 | +enviarNotificacion()  |
                 +------------------------+

------Instrucciones de Instalación y Ejecución-----

1. Clonar repositorio y entrar a la carpeta:

git clone (https://github.com/KarenGarciaR/Facade.git)
cd Facade

2. Instalar dependencias:

npm install

3. Ejecutar servidor:

node app.js

4. Abrir navegador:
Ir a http://localhost:3000
