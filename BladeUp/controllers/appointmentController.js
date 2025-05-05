import { appointmentService } from "../services/appointmenService.js";

export const appointmentController = {
  getRequestsByBarber: async (req, res) => {
    try {
      const barberId = req.user.id;
      const requests = await appointmentService.findAppActiveByBarber(barberId);
      res.status(200).json(requests);
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: "Error fetching barber requests",
        error: error.message,
      });
    }
  },
};
