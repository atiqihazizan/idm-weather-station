import {
  ArrowDownIcon,
  ArrowTrendingUpIcon,
  ArrowUpIcon,
} from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import Card from "../ui/card";

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
    <Card title="Wind">

      {/* Content */}
      <div className="flex justify-between items-center ">
        {/* Wind Section */}
        <div className="cell text-center flex flex-col items-center">
          <p className="text-gray-400 text-2xl">Wind</p>
          <p className="text-5xl font-bold">{speed?.value ?? "2.2"}</p>
          <p className="flex items-center text-orange-500 text-[15pt]">
            <ArrowUpIcon className="h-4 w-4 mr-1" />
            {speed?.trend ?? "4.5"} {speed?.unit ?? "m/s"}
          </p>
          <p className="text-gray-500 text-[16pt]">10:27</p>
        </div>

        {/* Direction Section */}
        <div className="cell relative text-center flex flex-col items-center">
          <div
            className="centerImg relative 1rounded-full 1border border-cyan-500 flex items-center justify-center"
            style={{
              width: "250px",
              height: "250px",
            }}
          >
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
          <p className="text-gray-400 text-2xl">Gust</p>
          <p className="text-5xl font-bold">{gust?.value ?? "2.6"}</p>
          <p className="flex items-center text-orange-500 text-[15pt]">
            <ArrowUpIcon className="h-4 w-4 mr-1" />
            {gust?.trend ?? "5.6"} {gust?.unit ?? "m/s"}
          </p>
          <p className="text-gray-500 text-[16pt]">10:27</p>
        </div>
      </div>
    </Card>

  );
}
