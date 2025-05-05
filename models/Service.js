import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Service = sequelize.define("Service", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  basePrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  category: {
    type: DataTypes.ENUM("hair", "beard", "treatment", "other"),
    allowNull: false
  },
  estimatedTime: {
    type: DataTypes.INTEGER, // minutos
    defaultValue: 30
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: "services",
  timestamps: true
});


export const BarberService = sequelize.define("BarberService", {
  customPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  customDescription: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  duration: {
    type: DataTypes.INTEGER, // minutos
    allowNull: false
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: "barber_services",
  timestamps: true
});