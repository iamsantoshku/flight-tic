import express from "express"
import { sendMessage } from "../controller/ContactController.js";


const Contactrouter = express.Router();

// POST request to send a contact message
Contactrouter.post('/contact', sendMessage);

// module.exports = router;
export {Contactrouter}