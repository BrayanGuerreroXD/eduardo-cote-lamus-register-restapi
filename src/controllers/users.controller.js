import { pool } from "../db.js";

// Get user by code or dni from DB
export const getUser = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM user WHERE code =?", [
      req.params.code,
    ]);

    const [raws] = await pool.query("SELECT * FROM user WHERE dni =?", [
      req.params.code,
    ]);

    if (rows.length <= 0 && raws.length <= 0) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      if (rows.length <= 0) {
        res.json(raws[0]);
      } else {
        res.json(rows[0]);
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};