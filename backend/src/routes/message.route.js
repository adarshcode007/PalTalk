import express from "express";

const router = express.Router();

router.get("/contacts", getAllContacts);
router.get("/chats", getChatPartners);
router.get("/:id", getMessagesByUserId);
router.get("/send/:id", sendMessage);

export default router;
