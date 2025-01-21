import {
  ArrowDownIcon,
  ArrowTrendingUpIcon,
  ArrowUpIcon,
} from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

export default function Wind({ data }) {
  const [speed, setSpeed] = useState({});
  const [direction, setDirection] = useState({});
  const [gust, setGust] = useState({});
  const [pos, setPos] = useState("");

  useEffect(() => {
    const speedy = data?.wind_speed;
    const gusty = data?.wind_gust;
    const windy = data?.wind_direction;
    const posName = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const rotation = windy?.value < 360 ? windy.value : 0;

    setSpeed(speedy);
    setGust(gusty);
    setDirection(windy);
    setPos(posName[Math.round(rotation / 45)]);
    // console.log(windy?.value,Math.round((windy?.value ?? 0) /45),windy)
  }, [data]);

  return (

    <div className="flex justify-center items-center bg-gray-800 text-white h-screen">
      <div className="flexCard bg-gray-900 text-white rounded-lg shadow-md p-6 w-[600px]">
        {/* Header */}
        <div className="header text-center mb-6">
          <p className="title text-lg font-semibold text-gray-300">Wind</p>
        </div>

        {/* Content */}
        <div className="content grid grid-cols-3 items-center gap-4">
          {/* Wind Section */}
          <div className="cell text-center flex flex-col items-center">
            <p className="text-gray-400 text-lg">Wind</p>
            <p className="text-5xl font-bold">{speed?.value ?? "2.2"}</p>
            <p className="flex items-center text-orange-500 text-sm">
              <ArrowUpIcon className="h-4 w-4 mr-1" />
              {speed?.trend ?? "4.5"} {speed?.unit ?? "m/s"}
            </p>
            <p className="text-gray-500 text-sm">10:27</p>
          </div>

          {/* Direction Section */}
          <div className="cell relative text-center flex flex-col items-center">
            <div
              className="centerImg relative rounded-full border border-cyan-500 flex items-center justify-center"
              style={{
                width: "220px",
                height: "220px",
              }}
            >
              {/* Panah Berputar */}
              {/* <div
                className="absolute h-4 w-24 bg-cyan-500"
                style={{
                  transform: `rotate(${direction?.value ?? 89}deg)`,
                  transformOrigin: "center left",
                }}
              ></div> */}
              {/* Nilai Arah */}
              <p className="text-7xl font-bold text-white flex items-center">
                {direction?.value ?? "89"}
                <span className="text-3xl text-gray-400 ml-1 relative -top-5">°</span>
              </p>
              {/* Posisi Arah */}
              <p className="absolute top-[68%] text-green-400 text-2xl">{pos ?? "N"}</p>
            </div>
          </div>

          {/* Gust Section */}
          <div className="cell text-center flex flex-col items-center">
            <p className="text-gray-400 text-lg">Gust</p>
            <p className="text-5xl font-bold">{gust?.value ?? "2.6"}</p>
            <p className="flex items-center text-orange-500 text-sm">
              <ArrowUpIcon className="h-4 w-4 mr-1" />
              {gust?.trend ?? "5.6"} {gust?.unit ?? "m/s"}
            </p>
            <p className="text-gray-500 text-sm">10:27</p>
          </div>
        </div>
      </div>
    </div>

  );
}
