import express from "express";
import {
  getApplications,
  getApplicationById,
  deleteApplication,
} from "../controllers/adminController.js";

const router = express.Router();

// Get all applications (Admin dashboard)
router.get("/applications", getApplications);

// Get single application
router.get("/applications/:id", getApplicationById);

// Delete application (optional admin control)
router.delete("/applications/:id", deleteApplication);

export default router;