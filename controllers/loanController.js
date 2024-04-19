const Loan = require("../models/loan");

const requestLoan = async (req, res) => {
  try {
    const { amount } = req.body;
    const loan = new Loan({ borrower: req.userId, amount });
    await loan.save();
    res.status(201).json({ message: "Loan requested successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const approveLoan = async (req, res) => {
  try {
    const loan = await Loan.findByIdAndUpdate(
      req.params.id,
      { status: "approved" },
      { new: true }
    );
    res.status(200).json({ message: "Loan approved successfully", loan });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const rejectLoan = async (req, res) => {
  try {
    const loan = await Loan.findByIdAndUpdate(
      req.params.id,
      { status: "rejected" },
      { new: true }
    );
    res.status(200).json({ message: "Loan rejected successfully", loan });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const repayLoan = async (req, res) => {
  try {
    const loan = await Loan.findByIdAndUpdate(
      req.params.id,
      { status: "repaid" },
      { new: true }
    );
    res.status(200).json({ message: "Loan repaid successfully", loan });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { requestLoan, approveLoan, rejectLoan, repayLoan };
