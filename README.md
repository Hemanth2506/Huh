# PureFlow — Smart Microplastic Filtration Simulator

PureFlow is a browser-based concept demonstrator for a proposed multilayer filtration cartridge designed to explore microplastic reduction in drinking water.

## What it demonstrates

- Seven-stage filtration concept
- Interactive source and contamination controls
- Step-by-step particle-removal simulation
- Live estimated removal and remaining-particle readouts
- Technical specification and material overview
- Filtration-stack visualization
- Environmental-impact presentation

## Technical approach

The prototype runs as plain HTML, CSS, and JavaScript with no build system or application dependencies.

```
User controls
     ↓
Simulation logic
     ↓
Filtration-stage model
     ↓
Live metrics + visualization
```

## Run locally

Open `index.html` in a browser, or serve the folder with:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Project status

**Concept / simulation prototype.**

The particle-removal values shown by the interface are illustrative estimates. They are not laboratory measurements, certified water-quality results, or evidence of real-world filtration performance.

## Engineering focus

- Interactive scientific communication
- Simulation-oriented UI design
- Environmental technology concepts
- Frontend visualization
- Prototype validation thinking

## Author

**Hemanth Sanjay**  
AI & Data Science | AI/ML | Software Engineering
