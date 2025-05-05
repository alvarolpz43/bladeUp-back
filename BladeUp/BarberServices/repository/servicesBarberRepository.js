import { BarberService } from "../../../models/Service.js";

export const BarberServRepo = {
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
