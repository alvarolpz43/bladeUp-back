import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../../models/User.js";
import { TOKEN_SECRET, ADMIN_PASSWORD } from "../../config/token.js";
import dotenv from "dotenv";
dotenv.config();

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const authService = {
  // Registro de cliente y barbero
  registerUser: async (username, email, password, role) => {
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });
    return newUser;
  },

  // Login
  login: async (username, password) => {
    const user = await User.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    return { token, userId: user.id };
  },

  //  Obtener todos los barberos solo para clientes
  getUsers: async () => {
    const users = await User.findAll({
      include: {
        model: User,
        where: { role: "barber" },
      },
    });
    return users;
  },

  getAllUsers: async () => {
    return await User.findAll();
  },

  getSingleUser: async (username) => {
    const user = await User.findOne({ where: { username } });
    return user;
  },

  getProfile: async (userId) => {
    const user = await User.findByPk(userId);
    return user;
  },
};
