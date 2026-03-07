// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Homebtn from "../components/Buttons/Homebtn";
import Clear from "../components/Buttons/Close";
export default function C12() {
  const clicker = () => {
    alert("You clicked");
  };

  return (
    <>
      <Homebtn />
      <br />
      {/* <Button onClick={clicker}>hi</Button> */}
    </>
  );
}
