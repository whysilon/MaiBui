import "./UserProfile.css";

import { Typography, Stack } from "@mui/material";

//Passing data

import { Avatar } from "@mui/material";
import { db, auth } from "../../firebase-config";
import { collection } from "firebase/firestore";
import { useState, useEffect } from "react";

/**
 * Displays the user profile, including profile image and username.
 * @returns HTML of User Profile Container
 */

//TODO: get date from database

const UserProfileContainer = () => {
  const usersCollectionRef = collection(db, "users");
  const user = auth.currentUser;

  const [username, setUsername] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid);
        setUsername(user.displayName);
        setPhotoURL(user.photoURL);
      } else {
        setUid(null);
        setUsername(null);
        setPhotoURL(null);
      }
    });

    return unsubscribe;
  }, [auth]);

  return (
    <Stack
      spacing={4}
      alignItems="center"
      style={{ margin: "100px", alignSelf: "center" }}
    >
      <Avatar src={photoURL} sx={{ width: 200, height: 200 }} />

      <Typography variant="h2">Welcome, {username}</Typography>
    </Stack>
  );
};

export default UserProfileContainer;
