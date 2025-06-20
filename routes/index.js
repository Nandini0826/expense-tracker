const router = require("express").Router();
const expenseModel = require("../models/expense")
router.get("/", async (req, res) => {
  let error = req.flash("error");
  let success = req.flash("success");
  try {
    const expensehad = await expenseModel.find().sort({ createdAt: -1 });
    res.render("expenses", { error, success, expensehad });
  } catch (err) {
    console.log(err);
    res.render("expenses", { error: ["Something went wrong"], success: [], expensehad: [] });
  }
});

router.post("/", async (req, res) => {
    try {
        let {
            productname,
            cost,
            note,
            date,
        } = req.body;
        let expensehad = await expenseModel.create({
            productname,
            cost,
            note,
            createdAt: date ? new Date(date) : Date.now(),
        });
        if (expensehad) {
            req.flash("success", "expense added");
        }
        else {
            req.flash("error", "error occured");
        }
         res.redirect("/");

    }
    catch (err) {
        console.log(err);
    }
});

router.put("/expense/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { productname, cost, note, date } = req.body;
    
    const updated = await expenseModel.findByIdAndUpdate(
      id,
      {
        productname,
        cost,
        note,
        createdAt: date ? new Date(date) : Date.now()
      },
      { new: true }
    );

    if (updated) {
      req.flash("success", "Expense updated");
    } else {
      req.flash("error", "Update failed");
    }
    res.redirect("/");
  } catch (err) {
    console.error(err);
    req.flash("error", "Server error");
    res.redirect("/");
  }
});
router.delete("/expense/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await expenseModel.findByIdAndDelete(id);
    
    if (deleted) {
      req.flash("success", "Expense deleted");
    } else {
      req.flash("error", "Delete failed");
    }
    res.redirect("/");
  } catch (err) {
    console.error(err);
    req.flash("error", "Server error");
    res.redirect("/");
  }
});




module.exports = router;