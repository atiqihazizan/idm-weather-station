import {
  ArrowDownIcon,
  ArrowTrendingUpIcon,
  ArrowUpIcon,
} from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

export default function Indoor({ data }) {
  const [tempVal, setTemp] = useState({});
  const [humi, setHumi] = useState({});

  useEffect(() => {
    if (data?.temperature) setTemp(data?.temperature);
    if (data?.humidity) setHumi(data?.humidity);
  }, [data]);

  return (
    <div className="ivu-col ivu-col-span-md-8 w-full p-0">
      <div className="flexCard">
        <div className="header text-center">
          <p className="title w-full">Indoor</p>
        </div>
        <div className="content ">
          <div className="cell text-center flex flex-col">
            <p>Temperature</p>
            <p className="flex gap-2 number justify-center">
              <b>{tempVal.value}</b>
              <span className="unit">{tempVal.unit}</span>
            </p>
            <p className="flex gap-1 maxxin text-clip justify-center">
              <ArrowTrendingUpIcon className="h-4 yellow" />
              <span className="increment-value">0.7</span>
              <span>℃/hr</span>
            </p>
            <div className=" grid grid-cols-2 gap-5 pt-2 px-3">
              <p className="flex flex-row items-center yellow">
                <ArrowUpIcon className="h-3" />
                <span>25.8</span>
                <span>℃</span>
              </p>
              <p className="flex flex-row items-center blue">
                <ArrowDownIcon className="h-3" />
                <span>23.8</span>
                <span>℃</span>
              </p>
            </div>
          </div>

          <div className="cell text-center flex flex-col">
            <p>Humidity</p>
            <p className="flex gap-2 number justify-center">
              <b>{humi?.value ?? "0.0"}</b>
              <span className="unit">{humi?.unit ?? ""}</span>
            </p>
            <div className=" grid grid-cols-2 gap-2 pt-2 px-3">
              <p className="flex flex-row items-center yellow">
                <ArrowUpIcon className="h-3" />
                <span>25.8</span>
                <span>℃</span>
              </p>
              <p className="flex flex-row items-center blue">
                <ArrowDownIcon className="h-3" />
                <span>23.8</span>
                <span>℃</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
