import React from "react";
import { auth, db } from "../../firebase-config";

const currentUser = auth.currentUser;
// console.log(currentUser);
export const userProfileData = {
  img: "https://cod,efun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63eaee595a7e3f031030d055/63eaf4d142b69d0011f65b03/16763425892670871737.png",
  username: currentUser ? currentUser.displayName : "Null",
  id: currentUser ? currentUser.uid : "Null",
};
