import { BarberRepository } from "../repository/barber.repository.js";

export const UserService = {
  findAllBarbers: async () => {
    try {
      return await BarberRepository.findAllBarbers();
    } catch (error) {
      console.error("Error fetching barbers:", error);
      throw new Error("Could not fetch barbers");
    }
  },
};
