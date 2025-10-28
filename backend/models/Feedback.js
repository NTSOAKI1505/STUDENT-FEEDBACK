import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Feedback = sequelize.define(
  "Feedback",
  {
    studentName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courseCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 5 },
    },

    createdBy: {
      type: DataTypes.STRING,
      allowNull: false, // e.g., username or user ID
    },
    updatedBy: {
      type: DataTypes.STRING,
      allowNull: true, // e.g., username or user ID
    },
  },
  { timestamps: true } // adds createdAt & updatedAt automatically
);

export default Feedback;
