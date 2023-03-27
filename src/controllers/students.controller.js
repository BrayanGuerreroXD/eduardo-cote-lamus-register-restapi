import { pool } from "../db.js";

// Get student by ID form DB
export const getStudent = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Student WHERE code =?", [
      req.params.code,
    ]);

    if (rows.length <= 0) {
      res.status(404).json({
        message: "Student not found",
      });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};