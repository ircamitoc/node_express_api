import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

const users = [];

// Route to get user data
router.get("/", (req, res) => {
  res.json(users); // Return JSON data
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firstName} added to the database!`);
});

router.get("/:id", (req, res) => {
  res.send("THE GET ID ROUTE");
});

export default router;
