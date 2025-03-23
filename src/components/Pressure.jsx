import {
  ArrowDownIcon,
  ArrowTrendingUpIcon,
  ArrowUpIcon,
} from "@heroicons/react/16/solid";

export default function Pressure({ data }) {
  return (
    <div className="ivu-col ivu-col-span-md-8 w-full p-0">
      <div className="flexCard">
        <div className="header text-center">
          <p className="title w-full">Pressure</p>
        </div>
        <div className="content">
          <div className="cell">
            <p style={{ textAlign: "center" }}>Relative</p>{" "}
            <div className="number">
              <div className="ivu-tooltip">
                <div className="ivu-tooltip-rel">
                  <b>{data?.relative?.value ?? "0.0"}</b>
                </div>{" "}
              </div>
            </div>{" "}
            <div className="maxxin">
              <div className="ivu-tooltip">
                <div className="ivu-tooltip-rel flex flex-row gap-1 justify-center">
                  <ArrowTrendingUpIcon className="h-5 pt-1 yellow" />{" "}
                  <span className="increment-value">0.02</span>{" "}
                  <span>inHg</span>
                </div>{" "}
              </div>
            </div>{" "}
            <div className="linetext text-center">
              <div className="ivu-tooltip">
                <div className="ivu-tooltip-rel">
                  <span className="yellow flex flex-row gap-1">
                    <ArrowUpIcon className="h-4 pt-1" />
                    29.88 inHg
                  </span>
                </div>{" "}
              </div>
            </div>{" "}
            <div className="linetext text-center">
              <div className="ivu-tooltip">
                <div className="ivu-tooltip-rel">
                  <span className="blue flex flex-row gap-1">
                    <ArrowDownIcon className="h-4 pt-1" />
                    29.74 inHg
                  </span>
                </div>{" "}
              </div>
            </div>
          </div>{" "}
          <div className="cell">
            <p style={{ textAlign: "center" }}>Absolute</p>{" "}
            <div className="number">
              <div className="ivu-tooltip">
                <div className="ivu-tooltip-rel">
                  <b>{data?.absolute?.value ?? "0.0"}</b>
                </div>{" "}
              </div>
            </div>{" "}
            <div className="maxxin" style={{ textAlign: "center" }}>
              <div className="ivu-tooltip">
                <div className="ivu-tooltip-rel flex flex-row gap-1">
                  <ArrowTrendingUpIcon className="h-5 pt-1 yellow" />{" "}
                  <span className="increment-value">0.02</span>{" "}
                  <span>inHg</span>
                </div>{" "}
              </div>
            </div>{" "}
            <div className="linetext text-center">
              <div className="ivu-tooltip">
                <div className="ivu-tooltip-rel">
                  <span className="yellow flex flex-row gap-1">
                    <ArrowUpIcon className="h-4 pt-1" />
                    29.88 inHg
                  </span>
                </div>{" "}
              </div>
            </div>{" "}
            <div className="linetext text-center">
              <div className="ivu-tooltip">
                <div className="ivu-tooltip-rel">
                  <span className="blue flex flex-row gap-1">
                    <ArrowDownIcon className="h-4 pt-1" />
                    29.74 inHg
                  </span>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
