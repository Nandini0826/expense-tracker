const mongoose = require("mongoose");

let expenseSchema = mongoose.Schema({
  productname: String,
  cost: Number,
  note: String,
  createdAt: {
    type: Date,
    default: Date.now, 
  },
});

module.exports = mongoose.model("expense", expenseSchema);
