const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express Home");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send("User ID is " + userId);
});


// Check even or odd number


app.get("/check/:num", (req, res) => {
  const num = parseInt(req.params.num);

  if (num % 2 === 0) {
    res.send("Even Number");
  } else {
    res.send("Odd Number");
  }
});



// Check if an array is sorted (same logic as Python DSA).

app.get("/sorted", (req, res) => {
  const nums = req.query.nums.split(",").map(Number);

  let isSorted = true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      isSorted = false;
      break;
    }
  }

  res.send(isSorted ? "Sorted" : "Not Sorted");
});
