import { AppointmentRequest } from "../../models/AppointmentRequest.js";


export const appointmentRequestRepository = {
    create: async (data) => {
      return await AppointmentRequest.create(data);
    },
  
    findById: async (id) => {
      return await AppointmentRequest.findByPk(id);
    },
  
    findAll: async () => {
      return await AppointmentRequest.findAll();
    },
  
    findByBarber: async (barberId) => {
      return await AppointmentRequest.findAll({
        where: { barberId },
      });
    },
  
    findByClient: async (clientId) => {
      return await AppointmentRequest.findAll({
        where: { clientId },
      });
    },
  
    updateStatus: async (id, status) => {
      const request = await AppointmentRequest.findByPk(id);
      if (!request) return null;
      request.status = status;
      await request.save();
      return request;
    },
  };