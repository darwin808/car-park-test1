/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { EntranceComp } from "../components";
import * as helper from "../util/index";
import { arrMain } from "../constants";
import moment from "moment";

export default function Home() {
  const [size, setsize] = useState(1);
  const [collection, setcollection] = useState(arrMain);
  const [parkedVehicles, setparkedVehicles] = useState([]);

  const handleEntrance1 = () => {
    const point = {
      size,
      location: { x: 4, y: 4 },
    };
    const closest = helper.getClosest(collection, point);
    closest.size === undefined && alert("Parking Full");
    console.log(closest.size, "wewe");
    const parkedVehicle = parkedVehicles?.find(
      (e) =>
        e?.location?.y === closest?.location?.y &&
        e?.location?.x === closest?.location?.x
    );
    !parkedVehicle && setparkedVehicles([closest, ...parkedVehicles]);

    const newCollection = collection?.map((e) =>
      e?.location?.y === closest?.location?.y &&
      e?.location?.x === closest?.location?.x
        ? {
            ...e,
            available: false,
            timeIn: helper.getTimeStamp(),
          }
        : e
    );
    setcollection(newCollection);
  };

  const handleEntrance2 = () => {
    const point = {
      size,
      location: { x: 1, y: 4 },
    };
    const closest = helper.getClosest(collection, point);
    closest.size === undefined && alert("Parking Full");
    console.log(closest.size, "wewe");
    const parkedVehicle = parkedVehicles?.find(
      (e) =>
        e?.location?.y === closest?.location?.y &&
        e?.location?.x === closest?.location?.x
    );
    !parkedVehicle && setparkedVehicles([closest, ...parkedVehicles]);

    const newCollection = collection?.map((e) =>
      e?.location?.y === closest?.location?.y &&
      e?.location?.x === closest?.location?.x
        ? {
            ...e,
            available: false,
            timeIn: helper.getTimeStamp(),
          }
        : e
    );
    setcollection(newCollection);
  };

  const handleEntrance3 = () => {
    const point = {
      size,
      location: { x: 4, y: 1 },
    };
    const closest = helper.getClosest(collection, point);
    closest.size === undefined && alert("Parking Full");
    console.log(closest.size, "wewe");
    const parkedVehicle = parkedVehicles?.find(
      (e) =>
        e?.location?.y === closest?.location?.y &&
        e?.location?.x === closest?.location?.x
    );
    !parkedVehicle && setparkedVehicles([closest, ...parkedVehicles]);

    const newCollection = collection?.map((e) =>
      e?.location?.y === closest?.location?.y &&
      e?.location?.x === closest?.location?.x
        ? {
            ...e,
            available: false,
            timeIn: helper.getTimeStamp(),
          }
        : e
    );
    setcollection(newCollection);
  };
  useEffect(() => {
    console.log(collection, "collection");
  }, [collection]);

  const handleExitNow = (vehicle) => {
    const initalBill = 40;
    const duration = Math.floor((Date.now() - vehicle.timeIn) / 1000);
    const newDuration = (duration) => {
      if (duration >= 3) {
        return (duration - 3) * helper.checkVehicleSize(vehicle.size);
      } else {
        return 0;
      }
    };
    const bill = initalBill + newDuration(duration);
    alert(`Bill : ${bill} pesos , Duration: ${duration} hours`);
    const newCollection = collection?.map((e) =>
      e?.location?.y === vehicle?.location?.y &&
      e?.location?.x === vehicle?.location?.x
        ? { ...e, available: true, timeIn: null }
        : e
    );

    setcollection(newCollection);
  };
  return (
    <div className={styles.container}>
      {collection.map((e, i) => {
        const timeIn =
          e.timeIn && moment(e.timeIn).format("MM/DD/YY, h:mm:ss a");
        return (
          <div
            style={{
              position: "absolute",
              top: `${e.location.y * 10}rem`,
              left: `${e.location.x * 10}rem`,
              height: "100px",
              width: "150px",
              background: "white",
              display: "flex",
              flexDirection: "column",
              border: !e.available ? "8px solid red" : "2px solid lime",
            }}
          >
            <span>Vehicle - {helper.switchNamer(e.size)}</span>
            {e.timeIn && (
              <span style={{ fontSize: "10px" }}>Time In : {timeIn}</span>
            )}
            {e.timeIn && (
              <button type="button" onClick={() => handleExitNow(e)}>
                EXIT NOW!
              </button>
            )}
          </div>
        );
      })}
      <EntranceComp
        name={"Entrance 1"}
        top={4}
        left={4}
        onClick={handleEntrance1}
        setsize={setsize}
        size={size}
      />
      <EntranceComp
        name={"Entrance 2"}
        top={4}
        left={1}
        onClick={handleEntrance2}
        setsize={setsize}
        size={size}
      />
      <EntranceComp
        name={"Entrance 3"}
        top={1}
        left={4}
        onClick={handleEntrance3}
        setsize={setsize}
        size={size}
      />
    </div>
  );
}
