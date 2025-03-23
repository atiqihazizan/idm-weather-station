import Card from "../ui/card";
import { useEffect, useState } from "react";

export default function Indoor({ data }) {
  const [temp, setTemp] = useState({ value: '-', unit: '' })
  const [humi, setHumi] = useState({ value: '-', unit: '' })

  useEffect(() => {
    if (data) {
      setTemp(data.temperature)
      setHumi(data.humidity)
    }
  }, [data])
  //   {
  //     "temperature": {
  //         "time": "1737462573",
  //         "unit": "ºF",
  //         "value": "84.9"
  //     },
  //     "humidity": {
  //         "time": "1737462573",
  //         "unit": "%",
  //         "value": "64"
  //     }
  // }

  return (
    <Card title="Indoor" contentClass="flex flex-col item-middle">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col">
          <h5 className="text-[15pt] text-center" >WS Panel</h5>
          <div className="border-t border-gray-500 my-3"></div>
          <div className="flex flex-col gap-8">
            {/* Temperature Section */}
            <div className="text-center">
              <p className="text-gray-400 text-2xl mb-3">Temperature</p>
              <p className="text-5xl font-bold">
                {temp?.value || '-'}<span className="text-2xl text-gray-400"> {temp?.unit || ''}</span>
              </p>
            </div>

            {/* Humidity Section */}
            <div className="humidity text-center">
              <p className="text-gray-400 text-2xl mb-3">Humidity</p>
              <p className="text-5xl font-bold">
                {humi?.value || '-'}<span className="text-2xl text-gray-400"> {humi?.unit || ''}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="text-[15pt] text-center">Data Logger</h5>
          <div className="border-t border-gray-500 my-3"></div>
          <div className="flex flex-col gap-8">
            {/* Temperature Section */}
            <div className="text-center">
              <p className="text-gray-400 text-2xl mb-3">Temperature</p>
              <p className="text-5xl font-bold">
                {temp?.value || '-'}<span className="text-2xl text-gray-400"> {temp?.unit || ''}</span>
              </p>
            </div>

            {/* Humidity Section */}
            <div className="humidity text-center">
              <p className="text-gray-400 text-2xl mb-3">Humidity</p>
              <p className="text-5xl font-bold">
                {humi?.value || '-'}<span className="text-2xl text-gray-400"> {humi?.unit || ''}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
