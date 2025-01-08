import { Request, Response } from "express";
import {
  registerUser,
  loginUser,
  generateResetToken,
  resetPassword,
} from "../services/authService";

// Definir los tipos esperados de req.body para cada controlador
interface RegisterBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: any;
}

interface LoginBody {
  email: string;
  password: string;
}

interface PasswordResetBody {
  email: string;
}

interface ResetPasswordBody {
  token: string;
  newPassword: string;
}

// Controlador para registrar usuario
export const register = async (
  req: Request<{}, {}, RegisterBody>,
  res: Response
) => {
  const { firstName, lastName, email, password, role } = req.body;
  try {
    await registerUser(firstName, lastName, email, password, role);
    res.status(201).json({ message: "Usuario registrado con éxito" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// Controlador para iniciar sesión
export const login = async (req: Request<{}, {}, LoginBody>, res: Response) => {
  const { email, password } = req.body;
  try {
    const token = await loginUser(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// Controlador para solicitar el reseteo de contraseña
export const requestPasswordReset = async (
  req: Request<{}, {}, PasswordResetBody>,
  res: Response
) => {
  const { email } = req.body;
  try {
    const resetToken = await generateResetToken(email);
    res
      .status(200)
      .json({ message: "Revisa tu correo para resetear la contraseña" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// Controlador para resetear la contraseña
export const resetPasswordHandler = async (
  req: Request<{}, {}, ResetPasswordBody>,
  res: Response
) => {
  const { token, newPassword } = req.body;
  try {
    await resetPassword(token, newPassword);
    res.status(200).json({ message: "Contraseña actualizada con éxito" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
