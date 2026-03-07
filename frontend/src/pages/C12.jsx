// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Homebtn from "../components/Buttons/Homebtn";
// import ProgBar from "../components/ProgBar";
import Clear from "../components/Buttons/Close";
export default function C12() {
  const clicker = () => {
    alert("You clicked");
  };

  return (
    <>
      <span>
        <Homebtn />
      </span>
      {/* <ProgBar /> */}

      {/* <br /> */}
      {/* <Button onClick={clicker}>hi</Button> */}
    </>
  );
}
