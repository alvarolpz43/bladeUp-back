import { appointmentRequestService } from "../services/appointmentRequestService.js";

export const appointmentRequestController = {
  //Create app req
  createRequest: async (req, res) => {
    try {
      console.log(req.user);
      const { barberId, serviceId, requestedDate, barberServiceId } = req.body;
      const clientId = req.user.id; // viene del token

      const request = await appointmentRequestService.createRequest({
        clientId,
        barberId,
        serviceId,
        requestedDate,
        barberServiceId,
      });

      res.status(201).json(request);
    } catch (error) {
      res.status(500).json({
        message: "Error creating appointment request",
        error: error.message,
      });
    }
  },

  getRequestsByBarber: async (req, res) => {
    try {
      const barberId = req.user.id;
      const requests = await appointmentRequestService.getRequestsByBarber(
        barberId
      );
      res.status(200).json(requests);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching barber requests",
        error: error.message,
      });
    }
  },

  getRequestsByClient: async (req, res) => {
    try {
      const clientId = req.user.id;
      const requests = await appointmentRequestService.getRequestsByClient(
        clientId
      );
      res.status(200).json(requests);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching client requests",
        error: error.message,
      });
    }
  },

  acceptRequest: async (req, res) => {
    try {
      const { id } = req.params;
      const updated = await appointmentRequestService.acceptRequest(id);
      if (!updated)
        return res.status(404).json({ message: "Request not found" });
      res.status(200).json(updated);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error accepting request", error: error.message });
    }
  },

  rejectRequest: async (req, res) => {
    try {
      const { id } = req.params;
      const updated = await appointmentRequestService.rejectRequest(id);
      if (!updated)
        return res.status(404).json({ message: "Request not found" });
      res.status(200).json(updated);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error rejecting request", error: error.message });
    }
  },
};
