const Flight = require("../models/flight");

// Create a new flight
exports.createFlight = async (req, res) => {
  try {
    const flight = new Flight(req.body);
    await flight.save();
    res.status(201).json({ flight: flight });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all flights
exports.getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
