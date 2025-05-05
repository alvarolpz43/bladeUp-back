import { Service } from "../../models/Service.js";

export const servicesRepository = {
  create: async (data) => {
    return await Service.create(data);
  },

  findById: async (id) => {
    return await Service.findByPk(id);
  },

  findAll: async () => {
    return await Service.findAll();
  },
};
