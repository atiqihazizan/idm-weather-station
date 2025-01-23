import {
  ArrowDownIcon,
  ArrowTrendingUpIcon,
  ArrowUpIcon,
} from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import Card from "../ui/card";

export default function Battery({ data }) {
  const [wind, setWind] = useState(100)
  const [logger, setLogger] = useState(100)
  //   {
  //     "sensor_array": {
  //         "time": "1737462573",
  //         "unit": "",
  //         "value": "0"
  //     }
  // }

  // indicator batery
  // >80% hight
  // >20% low
  return (
    <Card title="Battery" contentClass="flex flex-col !justify-start">
      <div className="grid grid-cols-2 gap-8">

        <div className="flex flex-col">
          <h5 className="text-[15pt] text-center">Wind</h5>
          <div className="border-t border-gray-500 my-3"></div>
          <div className="flex flex-row justify-around mb-4">
            <p className="text-green-400 text-lg font-bold">STATUS</p>
            <p className="text-gray-400 text-lg">{wind > 80 ? 'High' : wind < 20 ? 'Week' : 'Normal'}</p>
          </div>
        </div>

        <div className="flex flex-col">
          <h5 className="text-[15pt] text-center">Data Logger</h5>
          <div className="border-t border-gray-500 my-3"></div>
          <div className="flex flex-row justify-around mb-4">
            <p className="text-green-400 text-lg font-bold">STATUS</p>
            <p className="text-gray-400 text-lg">{logger > 80 ? 'High' : logger < 20 ? 'Week' : 'Normal'}</p>
          </div>
        </div>

      </div>
    </Card >

  );
}
