# Telecom SIM Charging Simulator

A modern React-based toolbox for simulating telecom charging interactions, including Voice, SMS, and Data sessions. The UI is designed for clarity and ease of use, with a sleek sidebar, interactive controls, and a real-time log of charging events.

## Features

- **Sidebar Navigation:**  
  Switch between Voice, SMS, and Data simulation modes with visually distinct, color-coded buttons.
- **Session Setup:**  
  Configure telecom session parameters (A-Number, IMSI, etc.) and advanced settings.
- **Charging Controls:**  
  Context-aware controls for starting/ending Voice calls, sending SMS, and managing Data/Policy sessions.
- **Live Charging View:**  
  See a real-time log of all simulated charging interactions.
- **Responsive & Clean UI:**  
  Built with Tailwind CSS for a modern, consistent look.

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/telecom_sim.git
   cd telecom_sim
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  components/
    Sidebar.jsx         # Sidebar navigation and session setup
    Controls.jsx        # Charging controls (buttons)
    ChargingView.jsx    # Log of charging interactions
    Header.jsx          # App header
  App.jsx               # Main app layout and state
  index.css             # Tailwind CSS styles
```

## Customization

- **Add new session parameters:**  
  Edit `Sidebar.jsx` to add or modify input fields.
- **Change button actions or logs:**  
  Update `Controls.jsx` to customize button behavior and log messages.
- **Adjust styles:**  
  Modify Tailwind classes in the JSX files or update `index.css`.

## Credits

- UI icons from [lucide-react](https://lucide.dev/)
- Built with [React](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/)

---

**v1.0.0 • ECEVS**