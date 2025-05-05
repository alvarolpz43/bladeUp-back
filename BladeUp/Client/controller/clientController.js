import { ClientService } from "../services/clientService.js";

export const getAllClients = async (req, res) => {
  try {
    const clients = await ClientService.getAllClients();
    res.status(201).json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getClientById = async (req, res) => {
  if (!req.params.id) {
    return res.status(500).json({ message: "Id is required" });
  }

  try {
    const service = await ClientService.getClientById(req.params.id);

    if (!service) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
