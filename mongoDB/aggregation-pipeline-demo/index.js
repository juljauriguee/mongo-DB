const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/aggregationDemo")
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => console.log("Connection Error:", err));

const salesSchema = new mongoose.Schema({
  productName: String,
  category: String,
  price: Number,
  quantity: Number
});

const Sale = mongoose.model("Sale", salesSchema);

async function seedData() {
  await Sale.deleteMany();

  await Sale.insertMany([
    { productName: "Laptop", category: "Electronics", price: 800, quantity: 2 },
    { productName: "Phone", category: "Electronics", price: 500, quantity: 5 },
    { productName: "Shoes", category: "Fashion", price: 100, quantity: 10 },
    { productName: "Watch", category: "Fashion", price: 200, quantity: 3 },
    { productName: "Tablet", category: "Electronics", price: 300, quantity: 4 }
  ]);

  console.log("Sample data inserted");
}

seedData();

async function matchStage() {
  const result = await Sale.aggregate([
    { $match: { category: "Electronics" } }
  ]);

  console.log("MATCH RESULT:", result);
}

async function groupStage() {
  const result = await Sale.aggregate([
    {
      $group: {
        _id: "$category",
        totalProducts: { $sum: 1 },
        totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } }
      }
    }
  ]);

  console.log("GROUP RESULT:", result);
}

async function projectStage() {
  const result = await Sale.aggregate([
    {
      $project: {
        productName: 1,
        totalAmount: { $multiply: ["$price", "$quantity"] }
      }
    }
  ]);

  console.log("PROJECT RESULT:", result);
}

async function sortStage() {
  const result = await Sale.aggregate([
    {
      $project: {
        productName: 1,
        totalAmount: { $multiply: ["$price", "$quantity"] }
      }
    },
    { $sort: { totalAmount: -1 } }
  ]);

  console.log("SORTED RESULT:", result);
}

async function fullPipeline() {
  const result = await Sale.aggregate([
    { $match: { category: "Electronics" } },
    {
      $group: {
        _id: "$category",
        totalProducts: { $sum: 1 },
        totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } }
      }
    },
    {
      $project: {
        _id: 0,
        category: "$_id",
        totalProducts: 1,
        totalRevenue: 1
      }
    },
    { $sort: { totalRevenue: -1 } }
  ]);

  console.log("FINAL PIPELINE RESULT:", result);
}

async function main() {
  await seedData();

  console.log("\n--- MATCH STAGE ---");
  await matchStage();

  console.log("\n--- GROUP STAGE ---");
  await groupStage();

  console.log("\n--- PROJECT STAGE ---");
  await projectStage();

  console.log("\n--- SORT STAGE ---");
  await sortStage();

  console.log("\n--- FULL PIPELINE ---");
  await fullPipeline();

  mongoose.connection.close();
}

main();