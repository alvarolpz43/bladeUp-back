import { UserService } from "../services/userService.js";

export const getAllBarbersWithServices = async (req, res) => {
  try {
    const barbers = await UserService.findAllBarbers();
    res.json(barbers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
