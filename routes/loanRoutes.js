// routes/loanRoutes.js
const express = require("express");
const router = express.Router();
const loanController = require("../controllers/loanController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, loanController.requestLoan);
router.put("/:id/approve", authMiddleware, loanController.approveLoan);
router.put("/:id/reject", authMiddleware, loanController.rejectLoan);
router.put("/:id/repay", authMiddleware, loanController.repayLoan);

module.exports = router;
