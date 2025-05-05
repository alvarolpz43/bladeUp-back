import { UserRepository } from "../repository/userRepository.js";

export const UserService = {
  findAllBarbers: async () => {
    try {
      return await UserRepository.findAllBarbers();
    } catch (error) {
      console.error("Error fetching barbers:", error);
      throw new Error("Could not fetch barbers");
    }
  },
};
