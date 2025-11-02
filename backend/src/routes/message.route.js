import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
  res.send("Message has been sent");
});

export default router;
