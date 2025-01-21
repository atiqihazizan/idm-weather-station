import {
  ArrowDownIcon,
  ArrowTrendingUpIcon,
  ArrowUpIcon,
} from "@heroicons/react/16/solid";
import Card from "../ui/card";

export default function Rainfall({ data }) {
  //   {
  //     "rain_rate": {
  //         "time": "1724940549",
  //         "unit": "in/hr",
  //         "value": "0.00"
  //     },
  //     "daily": {
  //         "time": "1724940549",
  //         "unit": "in",
  //         "value": "0.00"
  //     },
  //     "event": {
  //         "time": "1724940549",
  //         "unit": "in",
  //         "value": "0.00"
  //     },
  //     "weekly": {
  //         "time": "1724940549",
  //         "unit": "in",
  //         "value": "1.38"
  //     },
  //     "monthly": {
  //         "time": "1724940549",
  //         "unit": "in",
  //         "value": "1.39"
  //     },
  //     "yearly": {
  //         "time": "1724940549",
  //         "unit": "in",
  //         "value": "1.39"
  //     }
  // }
  return (
    <Card title="Rainfall">

      <div className="grid grid-cols-2 gap-4">
        {/* Left Section (Rain Rate and Daily) */}
        <div className="left text-center flex flex-col self-center">
          <div className="mb-6">
            <p className="text-gray-400 text-lg">Rain Rate /hr</p>
            <p className="text-6xl font-bold mt-2">{"0.0"}</p>
          </div>
          <div>
            <p className="text-gray-400 text-lg">Daily</p>
            <p className="text-6xl font-bold mt-2">{"11.4"}</p>
          </div>
        </div>

        {/* Right Section (Event, Weekly, Monthly, Yearly) */}
        <div className="right text-left text-2xl flex flex-col gap-3">
          <div className=" flex justify-between gap-3">
            <p className="text-gray-400">Event</p>
            <p className="text-green-400">{"30.4"} mm</p>
          </div>
          <div className=" flex justify-between gap-3">
            <p className="text-gray-400">Weekly</p>
            <p className="text-green-400">{"76.9"} mm</p>
          </div>
          <div className=" flex justify-between gap-3">
            <p className="text-gray-400">Monthly</p>
            <p className="text-green-400">{"156.7"} mm</p>
          </div>
          <div className="flex justify-between gap-3">
            <p className="text-gray-400">Yearly</p>
            <p className="text-green-400">{"156.7"} mm</p>
          </div>
        </div>
      </div>
    </Card>

  );
}
