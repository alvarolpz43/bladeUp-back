import { ClietnRepository } from "../repository/client.repository.js";

export const ClientService = {
  getAllClients: async () => {
    return ClietnRepository.getAllClients();
  },

  getClientById: async (idClient) => {
    return ClietnRepository.findClientById(idClient);
  },
};
