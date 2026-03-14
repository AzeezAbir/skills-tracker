import { Box } from "@mui/material";

export default function ProgBar({ progressValue = 50 }) {
  return (
    <>
      <Box
        // marginLeft={"-200px"}
        // marginRight={"200px"}
        sx={{
          marginX: 10,
          width: "100%",
          height: 16,
          backgroundColor: "#d4d4d4",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: `${progressValue}%`,
            height: "100%",
            backgroundColor: "#58cc02",
            borderRadius: 10,
            transition: "width 0.4s ease-in-out",
          }}
        />
      </Box>
    </>
  );
}
