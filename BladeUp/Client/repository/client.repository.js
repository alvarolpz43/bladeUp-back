import { User } from "../../../models/User.js";

export const ClietnRepository = {
  getAllClients: async () => {
    return User.findAll();
  },

  getClientById: async (id) => {
    return User.findByPk(id);
  },

  



};
