import { Schema, model } from "mongoose";

const ClassrromSchema = new Schema(
  {
    venue: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },

 
    city: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
  },
);

const CourseSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },

    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 20,
    },

    startDate: {
      type: Date,
      required: true,
    },

    capacity: {
      type: Number,
      required: true,
      min: 1,
      validate: {
        validator: Number.isInteger,
        message: "capacity debe ser entero",
      },
    },

    price: {
      type: Number,
      min: 0,
      default: 0,
    },

    status: {
      type: String,
      enum: ["open", "closed", "finished"],
      default: "open",
    },

    classroom: {
      type: ClassrromSchema,
      required: true,
    },

    instructor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
  },

  { timestamps: true, versionKey: false },
);

export const Course = model("Course", CourseSchema);
