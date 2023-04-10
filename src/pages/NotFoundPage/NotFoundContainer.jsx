import React from "react";
import HomeContainer from "../HomePage/HomeContainer";
import { Container, Typography, Button, Stack } from "@mui/material";

import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
/**
 * Redirect user from the not found page to home if logeed in , else redirect to login page
 * @returns HTML element of Not Found Page
 * @author Xing Mian
 */

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
            onAuthStateChanged(auth, (user) => {
              if (user) {
                window.location.assign("/home");
                const uid = user.uid;
              } else {
                // User is signed out
                window.location.assign("/");
              }
            });
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
