const DisponibilidadService = require('./DisponibilidadService');
const ValidacionService = require('./ValidacionService');
const NotificacionService = require('./NotificacionService');

class ReservaFacade {

    constructor() {
        this.disponibilidad = new DisponibilidadService();
        this.validacion = new ValidacionService();
        this.notificacion = new NotificacionService();
    }

    realizarReserva(datos) {

        // 1️⃣ Validar datos
        const resultadoValidacion = this.validacion.validar(datos);
        if (!resultadoValidacion.exito) {
            return resultadoValidacion.mensaje;
        }

        // 2️⃣ Verificar disponibilidad
        const disponible = this.disponibilidad.verificar(datos.fecha);
        if (!disponible) {
            return "No hay disponibilidad.";
        }

        // 3️⃣ Enviar confirmación
        const mensaje = this.notificacion.enviarConfirmacion(datos.usuario);

        return "Reserva completada con éxito 🎉 - " + mensaje;
    }
}

module.exports = ReservaFacade;