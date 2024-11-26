import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  uid: {
    type: String,
    required: true,
  },
  status: {
          type: String,
          enum: ["upcoming", "completed", "cancelled", "unsuccessful"], // Define allowed statuses
          default: "upcoming", // Default status for new tickets
  },
  tickets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight",
    },
  ],
 
});

export default mongoose.model("Ticket", ticketSchema);




// import mongoose from "mongoose";

// const Schema = mongoose.Schema;

// const ticketSchema = new Schema(
//   {
//     uid: {
//       type: String,
//       required: true,
//       unique: true, // Ensure unique identifier for each ticket
//     },
//     tickets: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Booking", // Refers to the Booking model instead of Flight for flexibility
//       },
//     ],
//     status: {
//       type: String,
//       enum: ["upcoming", "completed", "cancelled", "unsuccessful"], // Define allowed statuses
//       default: "upcoming", // Default status for new tickets
//     },
//     totalPrice: {
//       type: Number, // Store the total price of all bookings in this ticket
//       required: true,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now, // Automatically record ticket creation time
//     },
//     updatedAt: {
//       type: Date,
//       default: Date.now, // Automatically update timestamp on changes
//     },
//   },
//   {
//     timestamps: true, // Mongoose automatically adds createdAt and updatedAt fields
//   }
// );

// export default mongoose.model("Ticket", ticketSchema);
