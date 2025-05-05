import { BarberServRepo } from "../repository/servicesBarberRepository.js";

export const barberService = {
  create: async ({ barberId, serviceName, customPrice, customDescription, category }) => {
    // Asegúrate de que todos los datos sean los correctos
    const serviceData = {
      barberId,
      serviceName,
      customPrice,
      customDescription,
      category,
    };

    return await BarberServRepo.create(serviceData);
  },

  findById: async (id) => {
    return await BarberServRepo.findById(id);  // Usando findById ahora
  },

  findAll: async () => {
    return await BarberServRepo.findAll();
  },
};
