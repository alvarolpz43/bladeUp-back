import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";




export const BarberService = sequelize.define("BarberService", {
  serviceName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  customPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  customDescription: {
    type: DataTypes.TEXT,
    allowNull: true
  },
 
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  category: {
    type: DataTypes.ENUM("hair", "beard", "nails", "facial", "other"),
    allowNull: false
  },
 
 

}, {
  tableName: "barber_services",
  timestamps: true
});