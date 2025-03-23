import { useEffect, useRef, useState } from "react";
import MQTTBroker from "./MQTTBroker.js";

export default function useReload() {
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [getOutdoor, setOutdoor] = useState({});
  const [getIndoor, setIndoor] = useState({});
  const [getSolarUvi, setSolarUvi] = useState({});
  const [getRainfall, setRainfall] = useState({});
  const [getPressure, setPressure] = useState({});
  const [getBattery, setBattery] = useState({});
  const [getWind, setWind] = useState({});
  const isFirstRender = useRef(true);

  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const topic = params.get("topic");

  // mqtt listen
  const broker = new MQTTBroker("ws://mahsites.com:8885/ws");

  useEffect(() => {
    if (topic) {
      broker.connect(
        () => {
          broker.subscribe(topic, (payload) => {
            const {
              indoor,
              outdoor,
              pressure,
              rainfall,
              solar_and_uvi,
              wind,
              battery,
            } = JSON.parse(payload);
            // setMessage(payload); // Handle incoming messages
            if (wind) setWind(wind);
            if (rainfall) setRainfall(rainfall);
            if (outdoor) setOutdoor(outdoor);
            if (indoor) setIndoor(indoor);
            if (pressure) setPressure(pressure);
            if (battery) setBattery(battery);
            if (solar_and_uvi) setSolarUvi(solar_and_uvi);
            console.log(JSON.parse(payload));
          });
        },
        (error) => {
          console.error("Error connecting to broker:", error);
        }
      );
    }

    // Cleanup on component unmount
    // return () => broker.disconnect();
  }, []);

  // if (isLoading) return <></>;
  return {
    getOutdoor,
    getIndoor,
    getSolarUvi,
    getRainfall,
    getPressure,
    getWind,
    getBattery,
  };
}
