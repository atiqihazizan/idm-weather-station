import {
  ArrowDownIcon,
  ArrowLongUpIcon,
  ArrowTrendingUpIcon,
  ArrowUpIcon,
} from "@heroicons/react/16/solid";
import Card from "../ui/card";

export default function SolarUvi({ data }) {
  //   {
  //     "solar": {
  //         "time": "1724940851",
  //         "unit": "W/m²",
  //         "value": "0.0"
  //     },
  //     "uvi": {
  //         "time": "1724940851",
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
            7.31<span className="text-2xl text-gray-400">K</span>
          </p>
          <p className="text-orange-400 text-[15pt] flex justify-center items-center gap-2 mt-2">
            <ArrowUpIcon className="h-5 w-5" /> 9.8K fc
          </p>
          <div className="mt-4">
            <p className="text-gray-400 text-[15pt] flex items-center justify-center gap-2">
              <span role="img" aria-label="sunrise">🌅</span> Sun Rise
            </p>
            <p className="text-gray-500 text-[15pt]">Today 07:19</p>
          </div>
        </div>

        {/* UVI Section */}
        <div className="uvi text-center">
          <p className="text-gray-400 text-2xl mb-2">UVI</p>
          <p className="text-5xl font-bold">
            6
          </p>
          <p className="text-orange-400 text-[15pt] flex justify-center items-center gap-2 mt-2">
            <ArrowUpIcon className="h-5 w-5" /> 8
          </p>
          <div className="mt-4">
            <p className="text-gray-400 text-[15pt] flex items-center justify-center gap-2">
              <span role="img" aria-label="sunset">🌇</span> Sun Set
            </p>
            <p className="text-gray-500 text-[15pt]">Today 19:17</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
