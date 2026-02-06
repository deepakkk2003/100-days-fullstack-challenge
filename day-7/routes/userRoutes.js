const express = require("express");
const { validateAge, validateUser } = require("../utils/validation");
const sampleUsers = require("../data/sampleData");

const router = express.Router();

// GET all users
router.get("/", (req, res) => {
  res.json({
    count: sampleUsers.length,
    users: sampleUsers
  });
});

// POST create user
router.post("/", (req, res) => {
  const user = req.body;

  const validationResult = validateUser(user);
  if (!validationResult.valid) {
    return res.status(400).json({
      error: validationResult.message
    });
  }

  if (!validateAge(user.age)) {
    return res.status(403).json({
      error: "User must be 18 or older"
    });
  }

  sampleUsers.push(user);

  res.status(201).json({
    message: "User created successfully",
    user
  });
});

// POST check sorted array (DSA inside backend)
router.post("/check-sorted", (req, res) => {
  const nums = req.body.nums;

  if (!Array.isArray(nums)) {
    return res.status(400).json({ error: "nums must be an array" });
  }

  let isSorted = true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      isSorted = false;
      break;
    }
  }

  res.json({ sorted: isSorted });
});

module.exports = router;
