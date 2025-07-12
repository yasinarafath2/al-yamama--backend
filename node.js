
const doctors = {
  "1": {
    name: "ডা. ইলিয়াস হোসেন",
    specialty: "চোখের সার্জন (Retina Specialist)",
    photo: "uploads/uploads/doctor1.jpg",
    appointments: [
      "10:00 AM - আব্দুল্লাহ",
      "11:30 AM - রাবেয়া খাতুন",
      "1:00 PM - হোসেন মিয়া"
    ]
  }
};

// Route: /api/doctor/:id
app.get('/api/doctor/:id', (req, res) => {
  const doctorId = req.params.id;
  const doctor = doctors[doctorId];

  if (doctor) {
    res.json(doctor);
  } else {
    res.status(404).json({ error: "Doctor not found" });
  }
});
