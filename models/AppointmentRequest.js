import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const AppointmentRequest = sequelize.define("AppointmentRequest", {
  requestedDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  specialRequests: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM("pending", "accepted", "rejected", "completed", "canceled"),
    defaultValue: "pending"
  }
}, {
  tableName: "appointment_requests",
  timestamps: true
});