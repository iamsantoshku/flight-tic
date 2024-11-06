import { Contactmsg } from "../models/Contactmodel.js";

// Function to handle message creation
const sendMessage = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    // Create a new contact message
    const newMessage = new Contactmsg({
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    });

    // Save the message to the database
    await newMessage.save();

    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong, please try again later.' });
  }
};

export {sendMessage}