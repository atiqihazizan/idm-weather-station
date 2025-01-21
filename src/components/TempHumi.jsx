import {
  ArrowDownIcon,
  ArrowTrendingUpIcon,
  ArrowUpIcon,
} from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import Card from "../ui/card";

export default function TempHumi({ data, title }) {
  const [tempVal, setTemp] = useState({});
  const [humi, setHumi] = useState({});
  const [appTemp, setAppTemp] = useState({ value: "0.0", unit: "℃" });
  const [dewPoint, setDewPoint] = useState({ value: "0.0", unit: "℃" });

  useEffect(() => {
    const { temperature: temp, app_temp: app, dew_point: dew, humidity } = data;
    if (temp) setTemp(temp);
    if (humidity) setHumi(humidity);
    if (app) setAppTemp(app.value, app.unit);
    if (dew) setDewPoint(dew.value, dew.unit);
  }, [data]);
  //   {
  //     "temperature": {
  //         "time": "1724941034",
  //         "unit": "ºF",
  //         "value": "80.6"
  //     },
  //     "feels_like": {
  //         "time": "1724941034",
  //         "unit": "ºF",
  //         "value": "87.3"
  //     },
  //     "app_temp": {
  //         "time": "1724941034",
  //         "unit": "ºF",
  //         "value": "92.4"
  //     },
  //     "dew_point": {
  //         "time": "1724941034",
  //         "unit": "ºF",
  //         "value": "77.4"
  //     },
  //     "humidity": {
  //         "time": "1724941034",
  //         "unit": "%",
  //         "value": "90"
  //     }
  // }
  return (
    <Card title={title} contentClass="flex flex-col item-middle">
      <div className="grid grid-cols-2 gap-8">
        {/* Temperature Section */}
        <div className="text-center">
          <p className="text-gray-400 text-2xl mb-3">Temperature</p>
          <p className="text-5xl font-bold">
            25.2<span className="text-2xl text-gray-400">°C</span>
          </p>
          <p className="text-gray-400 text-md flex justify-center items-center gap-2 mt-2">
            <span className="text-orange-400">↗</span> 0.2 °C/hr
          </p>
          <div className="flex gap-3 mt-2 justify-center">
            <p className="text-orange-400 text-lg flex items-center">
              <ArrowUpIcon className="h-5 w-5 mr-1" /> 26.1°C
            </p>
            <p className="text-cyan-400 text-lg flex items-center">
              <ArrowDownIcon className="h-5 w-5 mr-1" /> 24.8°C
            </p>
          </div>
        </div>

        {/* Humidity Section */}
        <div className="humidity text-center">
          <p className="text-gray-400 text-2xl mb-3">Humidity</p>
          <p className="text-5xl font-bold">
            79<span className="text-2xl text-gray-400">%</span>
          </p>
          <div className="flex gap-3 mt-2 justify-center">
            <p className="text-orange-400 text-lg flex items-center">
              <ArrowUpIcon className="h-5 w-5 mr-1" /> 82%
            </p>
            <p className="text-cyan-400 text-lg flex items-center">
              <ArrowDownIcon className="h-5 w-5 mr-1" /> 76%
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
