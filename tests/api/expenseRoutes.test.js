const mongoose = require("mongoose");
const expenseModel = require("../../models/expense.js");

describe("Unit: Expense Model", () => {
  it("should create an expense with required fields", async () => {
    const expense = new expenseModel({
      productname: "Test",
      cost: 100,
      note: "Test Note"
    });

    expect(expense.productname).toBe("Test");
    expect(expense.cost).toBe(100);
    expect(expense.note).toBe("Test Note");
    expect(expense.createdAt).toBeDefined();
  });
});
