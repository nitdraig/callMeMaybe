import { Router } from "express";
import {
  addLink,
  deleteLink,
  getLinks,
  updateLink,
} from "../controllers/linkControllers";
import {
  authenticate,
  authorize,
} from "../../../shared/middlewares/authMiddleware";

const router = Router();

router.post("/addLink", authenticate, authorize(["admin", "user"]), addLink);
router.get("/getLinks", authenticate, authorize(["admin", "user"]), getLinks);

router.put("/updateLink/:id", authenticate, updateLink);
router.delete("/deleteLink/:id", authenticate, deleteLink);

export default router;
