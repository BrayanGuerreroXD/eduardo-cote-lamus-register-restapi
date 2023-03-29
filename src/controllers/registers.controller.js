import { pool } from "../db.js";

// Add register to DB
export const createRegister = async (req, res) => {
  try {
    const { register_date, register_time, register_type_id, user_id } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO register (register_date, register_time, register_type_id, user_id) VALUES (?, ?, ?, ?)",
      [register_date, register_time, register_type_id, user_id]
    );
    res.send({
      register_date,
      register_time,
      register_type_id,
      user_id,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
