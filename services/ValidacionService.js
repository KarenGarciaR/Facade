class ValidacionService {

    validar(datos) {

        if (!datos.usuario || datos.usuario.trim() === "") {
            return {
                exito: false,
                mensaje: "El nombre del usuario es obligatorio."
            };
        }

        const fechaReserva = new Date(datos.fecha);
        const hoy = new Date();

        if (fechaReserva < hoy) {
            return {
                exito: false,
                mensaje: "No se puede reservar en una fecha pasada."
            };
        }

        const dia = fechaReserva.getDay(); 

        if (dia === 0) {
            return {
                exito: false,
                mensaje: "No se permiten reservas los lunes."
            };
        }

        return {
            exito: true,
            mensaje: "Datos válidos."
        };
    }
}

module.exports = ValidacionService;