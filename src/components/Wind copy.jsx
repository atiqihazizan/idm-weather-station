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
    <div className="ivu-col ivu-col-span-md-8 w-full p-0">
      <div className="flexCard">
        <div className="header text-center">
          <p className="title w-full">Wind</p>
        </div>
        <div className="content ">
          <div className="cell text-center flex flex-col">
            <p>Wind</p>
            <p className="flex gap-2 number justify-center">
              <b>{speed?.value ?? "0.0"}</b>
            </p>
            <p className="flex flex-row items-center yellow">
              <ArrowUpIcon className="h-3" />
              <span>25.8</span>
              <span className="ml-1">{speed?.unit ?? ""}</span>
            </p>
            <p>00:10</p>
          </div>

          <div className="cell text-center flex flex-col">
            <div
              className="centerImg"
              style={{ transform: `rotate(${direction?.value ?? 0}deg)` }}
            ></div>
            <div className="absolute top-[30%] w-[100%]">
              <p className="number relative inline-block !text-[50pt]">
                <b className="mr-2">{direction?.value ?? 0}</b>
                <span className="unit ">{direction?.unit}</span>
              </p>
              <p className="green !text-[20pt]">{pos}</p>
            </div>
          </div>

          <div className="cell text-center flex flex-col">
            <p>Gust</p>
            <p className="flex gap-2 number justify-center">
              <b>{gust?.value ?? "0"}</b>
            </p>
            <p className="flex flex-row items-center yellow">
              <ArrowUpIcon className="h-3" />
              <span>25.8</span>
              <span className="ml-1">{gust?.unit ?? ""}</span>
            </p>
            <p>00:10</p>
          </div>
        </div>
      </div>
    </div>
  );
}
