import {
  ArrowDownIcon,
  ArrowLongUpIcon,
  ArrowTrendingUpIcon,
  ArrowUpIcon,
} from "@heroicons/react/16/solid";
import Card from "../ui/card";
import { useEffect, useState } from "react";

export default function SolarUvi({ data }) {
  const [solar, setSolar] = useState({ time: 0, unit: '', value: 0 })
  const [uvi, setUvi] = useState({ time: 0, unit: '', value: 0 })

  useEffect(() => {
    if (data) {
      setSolar(data.solar);
      setUvi(data.uvi)
    }
  }, [data])
  //   {
  //     "solar": {
  //         "time": "1737462573",
  //         "unit": "W/m²",
  //         "value": "0.0"
  //     },
  //     "uvi": {
  //         "time": "1737462573",
  //         "unit": "",
  //         "value": "0"
  //     }
  // }
  return (

    <Card title="Solar and UVI" contentClass="flex flex-col">
      <div className="grid grid-cols-2 gap-8">
        {/* Solar Section */}
        <div className="solar text-center">
          <p className="text-gray-400 text-2xl mb-2">Solar</p>
          <p className="text-5xl font-bold">
            {solar?.value || ''}<span className="text-2xl text-gray-400"> {solar?.unit || ''}</span>
          </p>
          {/* <p className="text-orange-400 text-[15pt] flex justify-center items-center gap-2 mt-2">
            <ArrowUpIcon className="h-5 w-5" /> 9.8K fc
          </p>
          <div className="mt-4">
            <p className="text-gray-400 text-[15pt] flex items-center justify-center gap-2">
              <span role="img" aria-label="sunrise">🌅</span> Sun Rise
            </p>
            <p className="text-gray-500 text-[15pt]">Today 07:19</p>
          </div> */}
        </div>

        {/* UVI Section */}
        <div className="uvi text-center">
          <p className="text-gray-400 text-2xl mb-2">UVI</p>
          <p className="text-5xl font-bold">
            {uvi?.value || '-'}<span className="text-2xl text-gray-400"> {uvi?.unit || ''}</span>
          </p>
          {/* <p className="text-orange-400 text-[15pt] flex justify-center items-center gap-2 mt-2">
            <ArrowUpIcon className="h-5 w-5" /> 8
          </p>
          <div className="mt-4">
            <p className="text-gray-400 text-[15pt] flex items-center justify-center gap-2">
              <span role="img" aria-label="sunset">🌇</span> Sun Set
            </p>
            <p className="text-gray-500 text-[15pt]">Today 19:17</p>
          </div> */}
        </div>
      </div>
    </Card>
  );
}
