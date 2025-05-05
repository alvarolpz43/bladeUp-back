import {  } from "../services/serviceBarberService.js";

export const servicesBarberRepository = {
  create: async (data) => {
    return await BarberService.create(data);
  },

  findById: async (id) => {
    return await BarberService.findByPk(id);
  },

  findAll: async () => {
    return await BarberService.findAll();
  },
};
