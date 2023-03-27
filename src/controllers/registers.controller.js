import { pool } from "../db.js";

// Add register to DB
export const createRegister = async (req, res) => {
  try {
    const { student_code, entry_date } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO Register (student_code, entry_date) VALUES (?, ?)",
      [student_code, entry_date]
    );
    res.send({
      student_code,
      entry_date,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
