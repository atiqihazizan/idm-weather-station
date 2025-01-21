import {
  ArrowDownIcon,
  ArrowLongUpIcon,
  ArrowTrendingUpIcon,
  ArrowUpIcon,
} from "@heroicons/react/16/solid";

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
    <div className="ivu-col ivu-col-span-md-8 w-full h-full p-0">
      <div className="flexCard">
        <div className="header text-center">
          <p className="title w-full">Solar and UVI</p>
        </div>

        {/* <div className="moon px-[10%]">
          <div className="cell flex h-[fit-content]">
            <img
              src="data:image/png;base64,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"
              height="50"
              width="50"
              style={{ verticalAlign: "middle" }}
            />
            <span style={{ paddingRight: "5px" }}>Last Quarter Moon</span>
          </div>
        </div> */}

        <div className="content ">
          <div className="cell text-center flex flex-col">
            <p>Solar</p>
            <p className="flex gap-2 number justify-center">
              <b>{data?.solar?.value ?? "0.0"}</b>
            </p>
            <p className="flex yellow">
              <ArrowUpIcon className="h-4 pr-1 pt-1" />
              766.1 W/m²
            </p>
          </div>

          <div className="cell text-center flex flex-col">
            <p>UVI</p>
            <p className="flex gap-2 number justify-center">
              <b>{data?.uvi?.value ?? "0"}</b>
            </p>
            <div className=" pt-2 px-3">
              <p className="flex justify-center yellow">
                <ArrowUpIcon className="h-4 pr-1 pt-1" />7
              </p>
            </div>
          </div>
        </div>

        <div className="sun" style={{ textAlign: "center" }}>
          <div className="cell">
            <p>
              Sun Rise
              <i className="rise ml-1"></i>
            </p>{" "}
            <p>Today 07:12</p>
          </div>{" "}
          <div className="cell">
            <p>
              <i className="set mr-1"></i>
              Sun Set
            </p>{" "}
            <p>Today 19:27</p>
          </div>
        </div>
      </div>
    </div>
  );
}
