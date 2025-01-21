import {
  ArrowDownIcon,
  ArrowTrendingUpIcon,
  ArrowUpIcon,
} from "@heroicons/react/16/solid";

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
    <div className="ivu-col ivu-col-span-md-8 w-full p-0">
      <div className="flexCard">
        <div className="header text-center">
          <p className="title w-full">Rainfall</p>
        </div>

        <div className="content">
          <div className="cell" style={{ textAlign: "center" }}>
            <p>Rain Rate /hr</p>{" "}
            <p className="number">
              <span className="ivu-tooltip">
                <span className="ivu-tooltip-rel">
                  <b>{data?.rain_rate?.value ?? "0.00"}</b>
                </span>{" "}
              </span>
            </p>{" "}
            <p>Daily</p>{" "}
            <p className="number">
              <b>{data?.daily?.value ?? "0.00"}</b>
            </p>
          </div>{" "}
          <div className="cell">
            <p className="linetext">
              Event
              <span className="green pl-2" style={{ float: "right" }}>
                {(data?.event?.value ?? "0.00") +
                  " " +
                  (data?.event?.unit ?? "in")}
              </span>
            </p>{" "}
            <p className="linetext" style={{ display: "none" }}>
              Hourly
              <span className="green pl-2" style={{ float: "right" }}>
                -
              </span>
            </p>{" "}
            <p className="linetext">
              Weekly
              <span className="green pl-2" style={{ float: "right" }}>
                {(data?.weekly?.value ?? "0.00") +
                  " " +
                  (data?.weekly?.unit ?? "in")}
              </span>
            </p>{" "}
            <p className="linetext">
              Monthly
              <span className="green pl-2" style={{ float: "right" }}>
                {(data?.monthly?.value ?? "0.00") +
                  " " +
                  (data?.monthly?.unit ?? "in")}
              </span>
            </p>{" "}
            <p className="linetext">
              Yearly
              <span className="green pl-2" style={{ float: "right" }}>
                {(data?.yearly?.value ?? "0.00") +
                  " " +
                  (data?.yearly?.unit ?? "in")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
