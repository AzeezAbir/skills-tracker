// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Homebtn from "../components/Buttons/Homebtn";
import ProgBar from "../components/ProgBar";
import "../styles/UI.css";
import ActionAreaCard from "../components/Buttons/ActionAreaCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function C12() {
  const clicker = () => {
    alert("You clicked");
  };
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isSubmitted, SetIsSubmitted] = useState(false);

  const currentProg = isSubmitted && selectedIndex === 2 ? 100 : 10;

  const navigate = useNavigate();

  const changeIndex = (newIndex) => {
    setSelectedIndex(newIndex);
    SetIsSubmitted(false);
  };
  const handleCheckClick = () => {
    SetIsSubmitted(true);
    if (isSubmitted && selectedIndex === 2) {
      navigate("/");
      return;
    }
    if (selectedIndex === 2) {
      console.log("Correct! , check!");
    }
  };

  return (
    <>
      <Homebtn />
      <ProgBar progressValue={currentProg} />
      <p>
        <strong>Which of the following is a semiconductor</strong>
      </p>
      <br />
      <span>
        <ActionAreaCard
          index={1}
          onCardSelect={changeIndex}
          fast={"Metals"}
          className="actionCardd"
        />
        <ActionAreaCard
          index={2}
          onCardSelect={changeIndex}
          fast={"Semiconductors"}
          className="actionCardd"
        />
        <ActionAreaCard
          index={3}
          onCardSelect={changeIndex}
          fast={"Insulators"}
          className={selectedIndex == 2 ? "actionCardd" : ""}
        />
      </span>
      <br />
      <Button
        sx={{
          color: selectedIndex === 2 && isSubmitted ? "green" : "inherit",
        }}
        onClick={handleCheckClick}
      >
        {selectedIndex === 2 && isSubmitted ? "Continue" : "Check"}
      </Button>
    </>
  );
}
