import {
  ArrowDownIcon,
  ArrowTrendingUpIcon,
  ArrowUpIcon,
} from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import Card from "../ui/card";

export default function Battery({ data }) {
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
    <Card title="Battery" contentClass="flex justify-between items-top mt-4">
      <div className="w-full">
        <div className="status mb-4">
          <p className="text-green-400 text-lg font-bold">NORMAL</p>
          <div className="border-t border-gray-500 mt-1"></div>
        </div>

        {/* Content Section */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-400 text-lg">Sensor Array</p>
          <p className="text-green-400 text-lg">Normal</p>
        </div>
      </div>
    </Card >

  );
}
