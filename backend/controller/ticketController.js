import Flight from "../models/flightSchema.js";
import Airline from "../models/airlineSchema.js";
import Booking from "../models/bookingSchema.js";
import Ticket from "../models/ticketSchema.js";



export const getTicket = async (req, res) => {
  const { uid } = req.params;

  try {
    const ticket = await Ticket.findOne({ uid });

    if (!ticket) {
      return res
        .status(404)
        .json({ success: false, message: "Ticket not found" });
    }

    // Fetch bookings associated with the ticket
    const bookings = await Booking.find({ _id: { $in: ticket.tickets } });

    const flightsData = {};

    // Process each booking and add flight information
    for (const booking of bookings) {
      const flightId = booking.flight;

      if (!flightsData[flightId]) {
        // Fetch flight data if not already fetched
        const flight = await Flight.findById(flightId);

        if (!flight) {
          console.error(`Flight with id ${flightId} not found`);
          continue; // Skip this iteration
        }

        const airline = await Airline.findById(flight.airline);

        // Add flight information to flightsData
        flightsData[flightId] = {
          ...flight.toObject(),
          airlineLogo: airline ? airline.airlineLogo : null,
          airlineName: airline ? airline.airlineName : null,
          bookings: [],
        };
      }

      // Convert booking to object and add to flight's bookings
      flightsData[flightId].bookings.push(booking.toObject());
    }

    // Convert flightsData object to array
    const flightsArray = Object.values(flightsData);

    res.status(200).json(flightsArray);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


// for cancele ticket 

export const cancelTicket = async (req, res) => {
  const {uid} = req.params; // Extract ticket UID from route parameters

  try {
    // Find the ticket by UID
    const ticket = await Ticket.findOne({uid});

    if (!ticket) {
      return res
        .status(404)
        .json({ success: false, message: "Ticket not found" });
    }

    // Check if the ticket is already cancelled
    if (ticket.status === "cancelled") {
      return res
        .status(400)
        .json({ success: false, message: "Ticket is already cancelled" });
    }

    // Update the ticket status to "cancelled"
    ticket.status = "cancelled";
    await ticket.save();

    // Fetch all bookings associated with the ticket
    const bookings = await Booking.find({ _id: { $in: ticket.tickets } });

    const flightsData = {};

    // Process each booking and update the status in flight data if necessary
    for (const booking of bookings) {
      const flightId = booking.flight;

      if (!flightsData[flightId]) {
        // Fetch flight data if not already fetched
        const flight = await Flight.findById(flightId);

        if (!flight) {
          console.error(`Flight with id ${flightId} not found`);
          continue; // Skip this iteration
        }

        const airline = await Airline.findById(flight.airline);

        // Add flight information to flightsData
        flightsData[flightId] = {
          ...flight.toObject(),
          airlineLogo: airline ? airline.airlineLogo : null,
          airlineName: airline ? airline.airlineName : null,
          bookings: [],
        };
      }

      // Update booking status to "cancelled" and save
      booking.status = "cancelled";
      await booking.save();

      // Convert booking to object and add to flight's bookings
      flightsData[flightId].bookings.push(booking.toObject());
    }

    // Convert flightsData object to array for the response
    const flightsArray = Object.values(flightsData);

    res.status(200).json({
      success: true,
      message: "Ticket and associated bookings successfully cancelled",
      ticket,
      flights: flightsArray,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


// // for get cancel ticket 


export const getCancelledTickets = async (req, res) => {
  try {
    // Fetch all tickets with status 'cancelled'
    const cancelledTickets = await Ticket.find({ status: "cancelled" });

    if (cancelledTickets.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No cancelled tickets found" });
    }

    const flightsData = {};

    // Process each ticket
    for (const ticket of cancelledTickets) {
      // Fetch bookings associated with the ticket
      const bookings = await Booking.find({ _id: { $in: ticket.tickets } });

      for (const booking of bookings) {
        const flightId = booking.flight;

        if (!flightsData[flightId]) {
          // Fetch flight data if not already fetched
          const flight = await Flight.findById(flightId);

          if (!flight) {
            console.error(`Flight with id ${flightId} not found`);
            continue; // Skip this iteration
          }

          const airline = await Airline.findById(flight.airline);

          // Add flight information to flightsData
          flightsData[flightId] = {
            ...flight.toObject(),
            airlineLogo: airline ? airline.airlineLogo : null,
            airlineName: airline ? airline.airlineName : null,
            bookings: [],
          };
        }

        // Convert booking to object and add to flight's bookings
        flightsData[flightId].bookings.push({
          ...booking.toObject(),
          ticketId: ticket._id,
        });
      }
    }

    // Convert flightsData object to array
    const flightsArray = Object.values(flightsData);

    res.status(200).json({
      success: true,
      message: "Cancelled tickets retrieved successfully",
      data: flightsArray,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};



export const getAllTickets = async (req, res) => {
  try {
    // Fetch all tickets
    const tickets = await Ticket.find();

    if (!tickets.length) {
      return res.status(404).json({ success: false, message: "No tickets found" });
    }

    const flightsData = {};

    // Process each ticket to gather detailed flight and booking information
    const ticketsWithDetails = await Promise.all(
      tickets.map(async (ticket) => {
        // Fetch bookings associated with the ticket
        const bookings = await Booking.find({ _id: { $in: ticket.tickets } });

        // Add flight data for each booking
        for (const booking of bookings) {
          const flightId = booking.flight;

          if (!flightsData[flightId]) {
            // Fetch flight data if not already cached
            const flight = await Flight.findById(flightId);

            if (!flight) {
              console.error(`Flight with id ${flightId} not found`);
              continue; // Skip this flight if not found
            }

            const airline = await Airline.findById(flight.airline);

            // Add flight information to flightsData cache
            flightsData[flightId] = {
              ...flight.toObject(),
              airlineLogo: airline ? airline.airlineLogo : null,
              airlineName: airline ? airline.airlineName : null,
              bookings: [],
            };
          }

          // Add the booking to the corresponding flight
          flightsData[flightId].bookings.push(booking.toObject());
        }

        return {
          ...ticket.toObject(),
          bookings: bookings.map((b) => b.toObject()), // Include all bookings for the ticket
        };
      })
    );

    // Convert flightsData object to an array for easier manipulation
    const flightsArray = Object.values(flightsData);

    // Return all tickets along with detailed flight and booking information
    res.status(200).json({
      success: true,
      tickets: ticketsWithDetails,
      flights: flightsArray,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


export const getSingleTicketForVerification = async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await Booking.findById(id);

    if (!booking) {
      return res
        .status(404)
        .json({ success: false, message: "Ticket not found" });
    }

    const flight = await Flight.findById(booking.flight);

    if (!flight) {
      return res
        .status(404)
        .json({ success: false, message: "Flight not found" });
    }

    const airline = await Airline.findById(flight.airline);

    if (!airline) {
      return res
        .status(404)
        .json({ success: false, message: "Airline not found" });
    }

    res.status(200).json({
      ...flight.toObject(),
      airlineLogo: airline.airlineLogo,
      airlineName: airline.airlineName,
      bookings: [booking.toObject()],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};



// geting all cancelled ticket 


export const getAllCancelledTickets = async (req, res) => {
  try {
    // Fetch all cancelled tickets
    const cancelledTickets = await Ticket.find({ status: "cancelled" });

    if (cancelledTickets.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No cancelled tickets found" });
    }

    // Map ticket IDs for batch operations
    const ticketIds = cancelledTickets.map((ticket) => ticket._id);

    // Fetch associated bookings
    const bookings = await Booking.find({ ticketId: { $in: ticketIds } });

    // Group bookings by flight ID
    const flightBookingsMap = {};
    bookings.forEach((booking) => {
      if (!flightBookingsMap[booking.flight]) {
        flightBookingsMap[booking.flight] = [];
      }
      flightBookingsMap[booking.flight].push(booking);
    });

    // Fetch all flight IDs
    const flightIds = Object.keys(flightBookingsMap);

    // Fetch flight details in batch
    const flights = await Flight.find({ _id: { $in: flightIds } });

    // Map flight details by flight ID
    const flightMap = {};
    for (const flight of flights) {
      const airline = await Airline.findById(flight.airline);
      flightMap[flight._id] = {
        ...flight.toObject(),
        airlineLogo: airline ? airline.airlineLogo : null,
        airlineName: airline ? airline.airlineName : null,
        bookings: flightBookingsMap[flight._id] || [],
      };
    }

    // Convert flightMap to an array
    const flightsArray = Object.values(flightMap);

    res.status(200).json({
      success: true,
      message: "Cancelled tickets retrieved successfully",
      data: flightsArray,
    });
  } catch (error) {
    console.error("Error fetching cancelled tickets:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};