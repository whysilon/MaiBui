import React from "react";
import HomeContainer from "../HomePage/HomeContainer";
import { Container, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundContainer = () => {
  return (
    <div>
      <Stack
        spacing={4}
        sx={{
          alignSelf: "center",
          margin: 5,
          padding: 5,
          alignItems: "center",
        }}
      >
        <Typography variant="h3">Mai Bui</Typography>
        <Typography variant="h1">404</Typography>
        <Typography variant="h4">Page Not Found</Typography>
        <Button
          onClick={() => {
            window.location.assign("/home");
          }}
          color="error"
        >
          Return to Homepage
        </Button>
      </Stack>
    </div>
  );
};

export default NotFoundContainer;
