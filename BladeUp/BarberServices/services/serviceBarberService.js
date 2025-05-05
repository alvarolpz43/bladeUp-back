import { servicesBarberRepository } from "../repository/servicesBarberRepository.js";

export const ServicesService = {
  create: async (
    customPrice,
    customDescription,
    duration,
    barberId,
    serviceId,
  ) => {
    return await servicesBarberRepository.create({
      customPrice,
      customDescription,
      duration,
      barberId,
      serviceId,
    });
  },

  findById: async (id) => {
    return await servicesBarberRepository.findByPk(id);
  },

  findAll: async () => {
    return await servicesBarberRepository.findAll();
  },
};
