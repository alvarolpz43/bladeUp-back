import { Appointment } from "../../models/Appoinment.js"; // Corregido el nombre del archivo
import { AppointmentRequest } from "../../models/AppointmentRequest.js";
import { User } from "../../models/User.js";
import { BarberService, Service } from "../../models/Service.js";
import { Review } from "../../models/Review.js";
import { Op } from "sequelize";

export const appointmentRepository = {
  create: async (appointmentData) => {
    try {
      return await Appointment.create(appointmentData);
    } catch (error) {
      console.error("Error creating appointment:", error);
      throw new Error("Could not create appointment");
    }
  },

  findAllAppointments: async () => {
    try {
      return await Appointment.findAll({
        include: [
          {
            model: AppointmentRequest,
            where: { status: "accepted" }, // solo solicitudes confirmadas
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching appointments:", error);
      throw new Error("Could not fetch appointments");
    }
  },

  findById: async (id) => {
    try {
      return await Appointment.findByPk(id, {
        include: [
          {
            model: User,
            as: "client", // Asegúrate de que la relación esté definida en el modelo de Appointment
            attributes: ["id", "name"],
          },
          {
            model: BarberService,
            as: "service", // Asegúrate de que la relación esté definida en el modelo de Appointment
            attributes: ["id", "name"],
          },
          {
            model: Review,
            attributes: ["rating", "comment"],
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching appointment by id:", error);
      throw new Error("Could not find appointment");
    }
  },

  updateStatus: async (id, status) => {
    try {
      const appointment = await Appointment.findByPk(id);
      if (!appointment) return null;

      appointment.status = status;
      await appointment.save();
      return appointment;
    } catch (error) {
      console.error("Error updating appointment status:", error);
      throw new Error("Could not update appointment status");
    }
  },
};
