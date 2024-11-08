import React from "react";
import { CircularProgress, Box } from "@mui/joy";

export const LoadingFallback = () => (
  <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
    <CircularProgress />
  </Box>
);
