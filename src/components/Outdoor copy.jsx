import {
  ArrowDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/16/solid";
import Card from "../ui/card";
import { useEffect, useState } from "react";

export default function Outdoor({ data }) {
  const [temp, setTemp] = useState({ time: 0, unit: '', value: 0 })
  const [feel, setFeel] = useState({ time: 0, unit: '', value: 0 })
  const [app, setApp] = useState({ time: 0, unit: '', value: 0 })
  const [dew, setDew] = useState({ time: 0, unit: '', value: 0 })
  const [humi, setHumi] = useState({ time: 0, unit: '', value: 0 })

  useEffect(() => {
    if (data) {
      setTemp(data.temperature);
      setFeel(data.feels_like);
      setApp(data.app_temp);
      setDew(data.dew_point);
      setHumi(data.humidity);
    }
  }, [data])
  //   {
  //     "temperature": {
  //         "time": "1737462573",
  //         "unit": "ºF",
  //         "value": "75.0"
  //     },
  //     "feels_like": {
  //         "time": "1737462573",
  //         "unit": "ºF",
  //         "value": "75.0"
  //     },
  //     "app_temp": {
  //         "time": "1737462573",
  //         "unit": "ºF",
  //         "value": "84.3"
  //     },
  //     "dew_point": {
  //         "time": "1737462573",
  //         "unit": "ºF",
  //         "value": "73.2"
  //     },
  //     "humidity": {
  //         "time": "1737462573",
  //         "unit": "%",
  //         "value": "94"
  //     }
  // }

  return (
    <Card title="Outdoor" contentClass="flex flex-col item-middle">
      <div className="grid grid-cols-2 gap-8">
        {/* Temperature Section */}
        <div className="text-center">
          <p className="text-gray-400 text-2xl mb-3">Temperature</p>
          <p className="text-5xl font-bold">
            {temp?.value || '-'}<span className="text-2xl text-gray-400"> {temp?.unit || ''}</span>
          </p>
          {/* <p className="text-gray-400 text-sm flex justify-center items-center gap-2 mt-2">
            <span className="text-orange-400">↗</span> 0.2 °C/hr
          </p>
          <div className="flex gap-3 mt-2 justify-center">
            <p className="text-orange-400 text-lg flex items-center">
              <ArrowUpIcon className="h-5 w-5 mr-1" /> 26.1°C
            </p>
            <p className="text-cyan-400 text-lg flex items-center">
              <ArrowDownIcon className="h-5 w-5 mr-1" /> 24.8°C
            </p>
          </div> */}
        </div>

        {/* Humidity Section */}
        <div className="humidity text-center">
          <p className="text-gray-400 text-2xl mb-3">Humidity</p>
          <p className="text-5xl font-bold">
            {humi?.value || '-'}<span className="text-2xl text-gray-400"> {humi?.unit || ''}</span>
          </p>
          {/* <div className="flex gap-3 mt-2 justify-center">
            <p className="text-orange-400 text-lg flex items-center">
              <ArrowUpIcon className="h-5 w-5 mr-1" /> 82%
            </p>
            <p className="text-cyan-400 text-lg flex items-center">
              <ArrowDownIcon className="h-5 w-5 mr-1" /> 76%
            </p>
          </div> */}
        </div>
      </div>
    </Card>
  );
}
