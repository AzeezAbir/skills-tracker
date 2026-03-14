// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Homebtn from "../components/Buttons/Homebtn";
import ProgBar from "../components/ProgBar";
import "../styles/UI.css";
import SelectActionCard from "../components/Buttons/SelectActionCard";
import ActionAreaCard from "../components/Buttons/ActionAreaCard";
export default function C12() {
  const clicker = () => {
    alert("You clicked");
  };

  return (
    <>
      <Homebtn />
      {/* <br /> */}
      <ProgBar />
      <p>
        <strong>Which of the following is a semiconductor</strong>
      </p>
      <SelectActionCard />
      <br />
      <img
        className="semidemo"
        src="/src/assets/Images/images.png"
        alt="semi"
        srcSet=""
      />
      <br />
      <span>
        <ActionAreaCard index={1} fast={"Metals"} className="actionCardd" />
        <ActionAreaCard
          index={2}
          fast={"Semiconductors"}
          className="actionCardd"
        />
        <ActionAreaCard index={3} fast={"Insulators"} className="actionCardd" />
      </span>
      <br />
      {/* <Check /> */}
      <Button>Check</Button>
    </>
  );
}
