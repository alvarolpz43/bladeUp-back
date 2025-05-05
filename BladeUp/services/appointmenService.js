import { appointmentRepository } from "../repository/appointmentRepository.js";

export const appointmentService = {
  createAppoinment: async (appointmentRequestId) => {
    return await appointmentRepository.create({
      appointmentRequestId,
      status: "confirmed",
      date: Date.now(),
    });
  },


  //FindAppinments baber en 
  findAppActiveByBarber: async (barberId) => {
    return await appointmentRepository.findAllAppointments(barberId);
  },
};
