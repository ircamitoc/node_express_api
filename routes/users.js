// users.js
import express from "express";

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

router.post("/", (req, res) => {});

export default router;
