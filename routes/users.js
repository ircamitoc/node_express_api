// users.js
import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
];

// Route to get user data
router.get("/", (req, res) => {
  res.json(users); // Return JSON data
});

export default router;
