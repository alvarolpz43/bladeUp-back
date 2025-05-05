import { servicesService } from "../services/servicesServices.js";

export const registerService = async (req, res) => {
  try {
    const services = await servicesService.create(req.body);
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
