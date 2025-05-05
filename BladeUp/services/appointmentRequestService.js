import { appointmentRequestRepository } from "../repository/appointmentRequestRepository.js";

export const appointmentRequestService = {
  // Crear solicitud de cita
  createRequest: async ({ clientId, barberId, serviceId, requestedDate, barberServiceId }) => {
    return await appointmentRequestRepository.create({
      clientId,
      barberId,
      serviceId,
      requestedDate,
      barberServiceId,
      status: "pending",
    });
  },

  // Ver solicitudes por barbero
  getRequestsByBarber: async (barberId) => {
    return await appointmentRequestRepository.findByBarber(barberId);
  },

  // Ver solicitudes por cliente
  getRequestsByClient: async (clientId) => {
    return await appointmentRequestRepository.findByClient(clientId);
  },

  // Aceptar solicitud
  acceptRequest: async (id) => {
    return await appointmentRequestRepository.updateStatus(id, "accepted");
  },

  // Rechazar solicitud
  rejectRequest: async (id) => {
    return await appointmentRequestRepository.updateStatus(id, "rejected");
  },
};
