import React from "react";
import "./component.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiEBikeLine } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import { FaWalking } from "react-icons/fa";
import { MdElectricRickshaw } from "react-icons/md";
import { BsTrainFront } from "react-icons/bs";
import { IoMdBus } from "react-icons/io";
import { IoCarOutline } from "react-icons/io5";

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedMode, setSelectedMode] = useState("");
  const [selectedDistance, setSelectedDistance] = useState("");
  const [modeBgColor, setModeBgColor] = useState({});
  const [distanceBgColor, setDistanceBgColor] = useState({});
  const [err, setErr] = useState(false);
  const handleModeClick = (mode) => {
    setSelectedMode(mode);
    setModeBgColor({ backgroundColor: "#43444c", color: "white" });
  };

  const handleDistanceClick = (distance) => {
    setSelectedDistance(distance);
    setDistanceBgColor({ backgroundColor: "#43444c", color: "white" });
  };

  const clickHandle = () => {
    if (selectedMode && selectedDistance) {
      navigate("/modes", {
        state: {
          "Mode": selectedMode,
          "distance": selectedDistance,
        },
      });
    } else {
      setErr(true);
    }
  };

  return (
    <div>
      <div>
        <div className="textData">
          <p>
            What is your most frequently used means of travel from your home to
            work location?
          </p>
        </div>

        <div className="Options">
          <div
            style={selectedMode === "Bus" ? modeBgColor : {}}
            onClick={() => handleModeClick("Bus")}
            className="opt"
          >
            <IoMdBus size={"40px"} />
            Bus
          </div>
          <div
            style={selectedMode === "Metro" ? modeBgColor : {}}
            onClick={() => handleModeClick("Metro")}
            className="opt"
          >
            <BsTrainFront size={"40px"} />
            Metro
          </div>
          <div
            style={selectedMode === "Two-wheeler" ? modeBgColor : {}}
            onClick={() => handleModeClick("Two-wheeler")}
            className="opt"
          >
            <RiEBikeLine size={"40px"} />
            Two-wheeler
          </div>
          <div
            style={selectedMode === "Car" ? modeBgColor : {}}
            onClick={() => handleModeClick("Car")}
            className="opt"
          >
            <AiFillCar size={"40px"} />
            Car
          </div>
          <div
            style={selectedMode === "Walk / Bicycle" ? modeBgColor : {}}
            onClick={() => handleModeClick("Walk / Bicycle")}
            className="opt"
          >
            <FaWalking size={"40px"} />
            Walk/Bicycle
          </div>
          <div
            style={selectedMode === "Auto" ? modeBgColor : {}}
            onClick={() => handleModeClick("Auto")}
            className="opt"
          >
            <MdElectricRickshaw size={"40px"} />
            Auto
          </div>
          <div
            style={selectedMode === "Cab Service" ? modeBgColor : {}}
            onClick={() => handleModeClick("Cab Service")}
            className="opt"
          >
            <IoCarOutline size={"40px"} />
            Cab Service
          </div>
        </div>
      </div>

      <div>
        <div className="textData">
          <p>What is the total distance between your home and workplace?</p>
        </div>
        <div className="Options">
          <div
            style={selectedDistance === "0" ? distanceBgColor : {}}
            onClick={() => handleDistanceClick("0")}
            className="opt"
          >
            {" "}
            {"<"} 5km{" "}
          </div>
          <div
            style={selectedDistance === "5" ? distanceBgColor : {}}
            onClick={() => handleDistanceClick("5")}
            className="opt"
          >
            {" "}
            5 - 10 km{" "}
          </div>
          <div
            style={selectedDistance === "10" ? distanceBgColor : {}}
            onClick={() => handleDistanceClick("10")}
            className="opt"
          >
            {" "}
            10- 15 km{" "}
          </div>
          <div
            style={selectedDistance === "15" ? distanceBgColor : {}}
            onClick={() => handleDistanceClick("15")}
            className="opt"
          >
            {" "}
            15- 20 km{" "}
          </div>
          <div
            style={selectedDistance === "20" ? distanceBgColor : {}}
            onClick={() => handleDistanceClick("20")}
            className="opt"
          >
            {" "}
            20- 25 km{" "}
          </div>
          <div
            style={selectedDistance === "25" ? distanceBgColor : {}}
            onClick={() => handleDistanceClick("25")}
            className="opt"
          >
            {" "}
            {">"} 25 km{" "}
          </div>
        </div>
      </div>

      <div className="btn">
        <button onClick={() => clickHandle()} className="button">
          Submit -{">"}
        </button>
      </div>

      {err ? <p>Please answer both questions.</p> : ""}
    </div>
  );
};

export default HomePage;
