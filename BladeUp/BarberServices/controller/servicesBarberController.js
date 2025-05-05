import { ServicesService } from "../services/serviceBarberService.js";

export const registerService = async (req, res) => {
  const { customPrice, customDescription, duration, serviceId } = req.body;

  const barberId = req.user.id;
  try { 
    
    const services = await ServicesService.create(
      customPrice,
      customDescription,
      duration,
      barberId,
      serviceId
    );
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
