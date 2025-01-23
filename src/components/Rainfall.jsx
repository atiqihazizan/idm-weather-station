import {
  ArrowDownIcon,
  ArrowTrendingUpIcon,
  ArrowUpIcon,
} from "@heroicons/react/16/solid";
import Card from "../ui/card";
import { useEffect, useState } from "react";

export default function Rainfall({ data }) {
  const [rain_rate, setRain_rate] = useState({ unit: "", value: '-' });
  const [daily, setDaily] = useState({ unit: "", value: '-' });
  const [event, setEvent] = useState({ unit: "", value: '' });
  const [weekly, setEeekly] = useState({ unit: "", value: '' });
  const [monthly, setMonthly] = useState({ unit: "", value: '' });
  const [yearly, setYearly] = useState({ unit: "", value: '' });
  useEffect(() => {
    if (data?.rain_rate) setRain_rate(data.rain_rate)
    if (data?.daily) setDaily(data.daily)
    if (data?.event) setEvent(data.event)
    if (data?.weekly) setEeekly(data.weekly)
    if (data?.monthly) setMonthly(data.monthly)
    if (data?.yearly) setYearly(data.yearly)
  }, [data])
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

      <div className="grid grid-cols-2 gap-4 h-full">
        {/* Left Section (Rain Rate and Daily) */}
        <div className="left text-center flex flex-col self-center">
          <div className="mb-6">
            <p className="text-gray-400 text-lg">Rain Rate /hr</p>
            <p className="text-6xl font-bold mt-2">{rain_rate.value}</p>
          </div>
          <div>
            <p className="text-gray-400 text-lg">Daily</p>
            <p className="text-6xl font-bold mt-2">{daily.value}</p>
          </div>
        </div>

        {/* Right Section (Event, Weekly, Monthly, Yearly) */}
        <div className="right text-left text-2xl flex flex-col justify-center gap-3">
          <div className=" flex justify-between gap-3">
            <p className="text-gray-400">Event</p>
            <p className="text-green-400">{event.value} {event.unit}</p>
          </div>
          <div className=" flex justify-between gap-3">
            <p className="text-gray-400">Weekly</p>
            <p className="text-green-400">{weekly.value} {weekly.unit}</p>
          </div>
          <div className=" flex justify-between gap-3">
            <p className="text-gray-400">Monthly</p>
            <p className="text-green-400">{monthly.value} {monthly.unit}</p>
          </div>
          <div className="flex justify-between gap-3">
            <p className="text-gray-400">Yearly</p>
            <p className="text-green-400">{yearly.value} {yearly.unit}</p>
          </div>
        </div>
      </div>
    </Card>

  );
}
