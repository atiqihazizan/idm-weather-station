import {
  ArrowDownIcon,
  ArrowTrendingUpIcon,
  ArrowUpIcon,
} from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import Card from "../ui/card";

export default function Battery({ data }) {
  //   {
  //     "sensor_array": {
  //         "time": "1737462573",
  //         "unit": "",
  //         "value": "0"
  //     }
  // }
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
