
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("INNOVATE AI Backend is running successfully!");
});

// Free demo invention generator
app.post("/api/generate-idea", (req, res) => {
  const { prompt } = req.body;

  if (!prompt || !prompt.trim()) {
    return res.status(400).json({
      error: "Please enter an invention request."
    });
  }

  const isFarmer = prompt.toLowerCase().includes("farmer") ||
                   prompt.toLowerCase().includes("water");

  const idea = isFarmer
    ? {
        productName: "SmartDrop Irrigation System",
        problem: "Farmers waste water through inefficient irrigation.",
        solution: "A low-cost irrigation system that releases water near plant roots.",
        keyFeatures: [
          "Soil moisture monitoring",
          "Automatic water control",
          "Low-cost sensors",
          "Solar-powered operation"
        ],
        targetCustomers: "Small and medium-scale farmers",
        estimatedCost: "₹2,000–₹5,000 (rough prototype estimate)",
        prototypeRequirements: [
          "Soil moisture sensor",
          "Arduino or ESP32 board",
          "Water pump",
          "Water pipes and connectors",
          "Power supply"
        ]
      }
    : {
        productName: "EcoSmart Helper",
        problem: "People need affordable solutions to everyday problems.",
        solution: "A simple, reusable product designed around the user's request.",
        keyFeatures: [
          "Affordable design",
          "Easy to use",
          "Reusable components",
          "Simple maintenance"
        ],
        targetCustomers: "People looking for affordable everyday solutions",
        estimatedCost: "₹1,000–₹3,000 (rough prototype estimate)",
        prototypeRequirements: [
          "Basic electronic components",
          "Prototype casing",
          "Connecting wires",
          "Testing materials"
        ]
      };

  res.json({
    success: true,
    mode: "DEMO",
    userRequest: prompt,
    idea: idea
  });
});

// Start server
const PORT = 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`INNOVATE AI Demo Server running on port ${PORT}`);
});