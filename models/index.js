import { User } from "./User.js";
import { BarberService } from "./Service.js";
import { AppointmentRequest } from "./AppointmentRequest.js";
import { Appointment } from "./Appoinment.js"; // Corregí el nombre del archivo

import { Review } from "./Review.js";

User.hasMany(BarberService, { foreignKey: "barberId" });
User.hasMany(AppointmentRequest, { foreignKey: "clientId" });
User.hasMany(AppointmentRequest, { foreignKey: "barberId" }); // Un barbero puede recibir muchas solicitudes

User.hasMany(Review, { foreignKey: "clientId" }); // Un cliente puede dejar muchas reseñas





BarberService.hasMany(AppointmentRequest, { foreignKey: "barberServiceId" }); // Un servicio puede tener muchas solicitudes

Appointment.belongsTo(BarberService, {
  foreignKey: "barberServiceId",
  as: "service",
}); // Relaciona la cita con el servicio

AppointmentRequest.belongsTo(User, { foreignKey: "clientId" }); // Relaciona la solicitud con el cliente
AppointmentRequest.belongsTo(User, { foreignKey: "barberId" }); // Relaciona la solicitud con el barbero

AppointmentRequest.belongsTo(BarberService, { foreignKey: "barberServiceId" }); // Relaciona la solicitud con el servicio del barbero
AppointmentRequest.hasOne(Appointment, { foreignKey: "appointmentRequestId" }); // Una solicitud de cita puede tener una cita

// Relación entre la cita y la reseña
Appointment.belongsTo(AppointmentRequest, {
  foreignKey: "appointmentRequestId",
});
Appointment.belongsTo(Review, { foreignKey: "reviewId" });

// Relación entre las reseñas y los usuarios
Review.belongsTo(User, { foreignKey: "clientId" });

export {
  User,
  BarberService,
  AppointmentRequest,
  Appointment,
  Review,
};
