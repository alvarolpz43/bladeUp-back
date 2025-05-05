import { where } from "sequelize";
import { User } from "../../../models/User.js";
import { BarberService } from "../../../models/Service.js";

export const ClietnRepository = {
  getAllClients: async () => {
    return User.findAll({
      where: { role: "client" },
    });
  },

  findClientById: async (idCient) => {
    return await User.findOne({
      where: { id: idCient, role: "client" }, // Filtrar por ID y rol de barbero
      include: {
        model: BarberService,
        required: true,
      },
    });
  },
};
