import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
  },
];

// Route to get user data
router.get("/", (req, res) => {
  res.json(users); // Return JSON data
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firstName} added to the database!`);
});

export default router;
