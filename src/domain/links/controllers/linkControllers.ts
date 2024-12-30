import { Request, Response } from "express";
import LinkModel from "../models/linkModels";
import { User } from "../../auth/models/userModel";
import mongoose from "mongoose";

export const addLink = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = req.user;
    if (!user) {
      res.status(401).json({ message: "Unauthorized: User not found" });
      return;
    }

    const { url } = req.body;
    if (!url) {
      res.status(400).json({ message: "Bad Request: URL is required" });
      return;
    }

    const newLink = await LinkModel.create({ userId: user.id, url });
    res.status(201).json(newLink);
  } catch (error) {
    console.error("Error in addLink:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getLinks = async (req: Request, res: Response): Promise<any> => {
  const userId = (req as any).user.id;
  const { page = 1, limit = 10 } = req.query; // Parámetros de paginación (con valores por defecto)

  try {
    const links = await LinkModel.find({ userId })
      .skip((parseInt(page as string) - 1) * parseInt(limit as string)) // Salta los enlaces de las páginas anteriores
      .limit(parseInt(limit as string)); // Limita el número de enlaces por página

    if (links.length === 0) {
      return res
        .status(404)
        .json({ error: "No se encontraron enlaces para este usuario" });
    }

    res.json({ links });
  } catch (err) {
    console.error("Error al obtener los enlaces:", err);
    res.status(500).json({ error: "Error al obtener enlaces" });
  }
};

export const updateLink = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params; // ID del link a actualizar
    const { url } = req.body; // URL nueva del link

    if (!url) {
      return res.status(400).json({ message: "URL is required" });
    }

    const link = await LinkModel.findById(id);
    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }

    // Verificar que el usuario que hace la solicitud es el propietario del enlace
    if (link.userId.toString() !== req.user?.id) {
      return res.status(403).json({
        message: "Forbidden: You are not authorized to update this link",
      });
    }

    link.url = url; // Actualizar la URL del link
    await link.save(); // Guardar los cambios en la base de datos

    res.status(200).json(link); // Responder con el link actualizado
  } catch (error) {
    console.error("Error in updateLink:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const deleteLink = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid link ID" });
    }

    const link = await LinkModel.findById(id);
    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }

    if (link.userId.toString() !== req.user?.id) {
      return res.status(403).json({
        message: "Forbidden: You are not authorized to delete this link",
      });
    }

    await link.deleteOne();

    res.status(200).json({ message: "Link deleted successfully" });
  } catch (error) {
    console.error("Error in deleteLink:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
