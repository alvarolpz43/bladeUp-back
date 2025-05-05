import { User } from "../../../models/User.js";
import { BarberService } from "../../../models/Service.js";

export const BarberRepository = {
  findAllBarbers: async () => {
    try {
      return await User.findAll({
        where: { role: "barber" },
        include: {
          model: BarberService, // Aquí se incluye el modelo BarberService sin usar alias
        },
      });
    } catch (error) {
      console.error("Error fetching barbers:", error);
      throw new Error("Could not fetch barbers");
    }
  },

  findBarberById: async (barberId) => {
    try {
      return await User.findOne({
        where: { id: barberId, role: "barber" }, // Filtrar por ID y rol de barbero
        include: {
          model: BarberService,
          required: true,
        },
      });
    } catch (error) {
      console.error("Error fetching barbers by ID:", error);
      throw new Error("Could not fetch barber by ID");
    }
  },
};
