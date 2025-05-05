import { UserService } from "../services/userService.js";

export const getAllBarbersWithServices = async (req, res) => {
  try {
    const barbers = await UserService.findAllBarbers();
    res.status(200).json(barbers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
