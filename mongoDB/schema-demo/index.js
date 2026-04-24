const mongoose = require('mongoose');

// MongoDB connection string (local database)
const mongoURI = 'mongodb://127.0.0.1:27017/schemaDemo';

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log("Database Connected");
    runApp(); // start app after connection
  })
  .catch((err) => {
    console.log("Connection Error:", err);
  });

/* ---------------- Schema Definition ---------------- */
// Defines structure of User document
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

/* ---------------- Model Creation ---------------- */
// Creates collection model for database operations
const User = mongoose.model('User', userSchema);

/* ---------------- Insert Data ---------------- */
// Function to insert a new user into database
const createUser = async () => {
  const user = new User({
    name: "JIJI TECH",
    email: "jijitech@example.com",
    age: 21
  });

  const result = await user.save();
  console.log("User Inserted:", result);
};

/* ---------------- Fetch Data ---------------- */
// Function to retrieve all users
const getUsers = async () => {
  const users = await User.find();
  console.log("Users:", users);
};

/* ---------------- Run App ---------------- */
// Runs insert + fetch operations
const runApp = async () => {
  await createUser();
  await getUsers();
};