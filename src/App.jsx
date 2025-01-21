import { useState } from "react";
import "./App.css";
import Indoor from "./components/Indoor";
import Rainfall from "./components/Rainfall";
import SolarUvi from "./components/SolarUvi";
import Wind from "./components/Wind";
import useReload from "./useRealtime";
import Battery from "./components/Battery";
import Outdoor from "./components/Outdoor";

function App() {
  const [first, setFirst] = useState(true);
  const {
    getWind,
    getRainfall,
    getSolarUvi,
    getOutdoor,
    getIndoor,
  } = useReload({ first, setFirst });

  return (
    <>
      <div className="main overflow-hidden">
        <div className="h-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Wind data={getWind ?? null} />
          <Rainfall data={getRainfall ?? null} />
          <Indoor data={getIndoor ?? null} />
          <Outdoor data={getOutdoor ?? null} />
          <SolarUvi data={getSolarUvi ?? null} />
          <Battery data={null} />
          {/* <Pressure data={getPressure ?? null} /> */}
        </div>
      </div>
      <style >{`
  .responsive-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Default: 3 columns */
    gap: 1rem; /* Adjust gap between items */
  }

  /* Responsiveness */
  @media (max-width: 1024px) {
    .responsive-grid {
      grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
    }
  }

  @media (max-width: 768px) {
    .responsive-grid {
      grid-template-columns: 1fr; /* 1 column for small screens */
    }
  }
`}</style>
    </>
  );
}

export default App;
