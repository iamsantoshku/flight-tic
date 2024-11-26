import express from "express";
import User from "../models/userSchema.js";
import Ticket from "../models/ticketSchema.js";
import Booking from "../models/bookingSchema.js";

const router = express.Router();

// Fetch revenue, tickets ordered, and tickets refunded
router.get("/stats", async (req, res) => {
  try {
    const revenue = await Booking.aggregate([
      { $group: { _id: null, totalRevenue: { $sum: "$flight.price" } } }
    ]);

    const totalTickets = await Booking.countDocuments({});
    const refundedTickets = await Ticket.countDocuments({ status: "cancelled" });

    res.json({
      revenue: revenue[0]?.totalRevenue || 0,
      ticketsOrdered: totalTickets,
      ticketsRefunded: refundedTickets,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching stats", error });
  }
});

// Fetch recent sales
router.get("/recent-sales", async (req, res) => {
  try {
    const recentSales = await Booking.find({})
      .populate("flight user")
      .sort({ createdAt: -1 })
      .limit(5);
    res.json(recentSales);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recent sales", error });
  }
});

// Fetch agents with most tickets
router.get("/agents", async (req, res) => {
  try {
    const agents = await User.aggregate([
      { $unwind: "$bookings" },
      { $group: { _id: "$name", tickets: { $sum: 1 } } },
      { $sort: { tickets: -1 } },
      { $limit: 5 },
    ]);
    res.json(agents);
  } catch (error) {
    res.status(500).json({ message: "Error fetching agents", error });
  }
});

export default router;
