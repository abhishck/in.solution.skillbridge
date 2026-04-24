import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
      trim: true,
      minlength: [10, "Phone must be at least 10 digits"],
      maxlength: [15, "Phone cannot exceed 15 digits"],
    },

    college: {
      type: String,
      required: [true, "College name is required"],
      trim: true,
      maxlength: [100, "College name too long"],
    },

    domain: {
      type: String,
      required: [true, "Domain is required"],
      enum: [
        "Web Development",
        "App Development",
        "UI/UX Design",
        "Data Science",
        "Digital Marketing",
        "Other",
      ],
    },

    message: {
      type: String,
      required: false,
      trim: true,
      maxlength: [500, "Message cannot exceed 500 characters"],
      default: "",
    },
  },
  { timestamps: true }
);

// Optional: Index for faster admin queries
applicationSchema.index({ createdAt: -1 });

export default mongoose.model("Application", applicationSchema);