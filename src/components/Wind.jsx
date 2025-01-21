import {
  ArrowDownIcon,
  ArrowTrendingUpIcon,
  ArrowUpIcon,
} from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import Card from "../ui/card";

export default function Wind({ data }) {
  const [speed, setSpeed] = useState({});
  const [direction, setDirection] = useState({ value: 0, label: '' });
  const [gust, setGust] = useState({});


  function getWindDirection(degree) {
    // Normalisasi derajat agar tetap di antara 0–360
    const normalizedDegree = degree % 360;

    // Hitung indeks arah (360° dibagi menjadi 8 bagian)
    // const posName = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    // const index = Math.round(normalizedDirection / 45) % 8;

    // Hitung indeks arah (360° dibagi menjadi 16 bagian)
    const index = Math.round(normalizedDegree / 22.5) % 16;

    const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    // Kembalikan arah
    return directions[index];
  }

  useEffect(() => {
    if (data) {
      const speedy = data?.wind_speed;
      const gusty = data?.wind_gust;
      const windy = data?.wind_direction?.value;

      setSpeed(speedy);
      setGust(gusty);
      setDirection({ value: windy, label: getWindDirection(windy) })
    }
  }, [data]);

  return (
    <Card title="Wind">

      {/* Content */}
      <div className="flex justify-between items-center ">
        {/* Wind Section */}
        <div className="cell text-center flex flex-col items-center">
          <p className="text-gray-400 text-2xl">Wind</p>
          <p className="text-5xl font-bold">{speed?.value ?? "-"}</p>
          {/* <p className="flex items-center text-orange-500 text-[15pt]">
            <ArrowUpIcon className="h-4 w-4 mr-1" />
            {speed?.trend ?? "-"} {speed?.unit ?? ""}
          </p> */}
          {/* <p className="text-gray-500 text-[16pt]">10:27</p> */}
        </div>

        {/* Direction Section */}
        <div className="cell relative text-center flex flex-col items-center">
          <div
            // className="centerImg  rounded-full border border-cyan-500 flex items-center justify-center"
            className="centerImg flex items-center justify-center"
            style={{
              width: "250px",
              height: "250px",
              transform: `rotate(${direction?.value ?? 0}deg)`
            }}
          >
            <div className="flex relative items-center justify-center gap-3"
              style={{ transform: `rotate(${direction?.value ? (360 - parseInt(direction?.value)) : 0}deg)` }}>
              {/* Nilai Arah */}
              <p className="text-7xl font-bold text-white flex items-center">
                {direction?.value ?? "0"}
                <span className="text-3xl text-gray-400 ml-1 relative -top-5">°</span>
              </p>
              {/* Posisi Arah */}
              <p className="absolute top-[110%] text-green-400 text-2xl">
                {direction?.label ?? ""}</p>
            </div>
          </div>
        </div>

        {/* Gust Section */}
        <div className="cell text-center flex flex-col items-center">
          <p className="text-gray-400 text-2xl">Gust</p>
          <p className="text-5xl font-bold">{gust?.value ?? "-"}</p>
          {/* <p className="flex items-center text-orange-500 text-[15pt]">
            <ArrowUpIcon className="h-4 w-4 mr-1" />
            {gust?.trend ?? "-"} {gust?.unit ?? ""}
          </p> */}
          {/* <p className="text-gray-500 text-[16pt]">10:27</p> */}
        </div>
      </div>
    </Card>

  );
}
