const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  borrower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["requested", "approved", "rejected", "repaid"],
    default: "requested",
  },
});

module.exports = mongoose.model("Loan", loanSchema);
