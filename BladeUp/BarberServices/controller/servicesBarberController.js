import { barberService } from "../services/serviceBarberService.js";

export const registerBarberService = async (req, res) => {
  const { customPrice, customDescription, serviceName, category } = req.body;
  const barberId = req.user.id;


  // Validación básica
  if (!serviceName || !customPrice || !category) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const service = await barberService.create({
      barberId,
      serviceName,
      customPrice,
      customDescription,
      category,
    });
    res.status(201).json(service);
  } catch (error) {
   
    res.status(500).json({ message: error.message });
  }
};

export const getAllServices = async (req, res) => {
 
  const barberId = req.user.id;

 
  try {
    const service = await barberService.findAll();
    res.status(201).json(service);
  } catch (error) {
   
    res.status(500).json({ message: error.message });
  }
};