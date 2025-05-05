import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Appointment = sequelize.define("Appointment", {
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM("confirmed", "completed", "cancelled", "no_show"),
    defaultValue: "confirmed"
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: "appointments",
  timestamps: true
});