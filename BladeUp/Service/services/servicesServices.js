import { servicesRepository } from "../repository/servicesRepository.js";

export const servicesService = {
  create: async ({ name, description }) => {
    return await servicesRepository.create({
      name,
      description,
    });
  },

  findById: async (id) => {
    return await servicesRepository.findByPk(id);
  },

  findAll: async () => {
    return await servicesRepository.findAll();
  },
};
