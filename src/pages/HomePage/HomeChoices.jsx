// CSS
import "./HomeChoices.css";
import { db, auth } from "../../firebase-config";
import { collection, getDoc, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SearchIcon from "@mui/icons-material/Search";
import CalculateIcon from "@mui/icons-material/Calculate";

/**
 * Displays the different selections on the
 * Displays the different selections on the
 * home page.
 *
 *
 * @author Marcus Yeo
 * @returns HTML of HomePage content
 */

const HomeChoices = () => {
  // const [username, setUsername] = useState('');
  const user = auth.currentUser;

  // useEffect(()=>{
  //   const getUsername = async () => {
  //     try{
  //       const usersCollectionRef = collection(db,'users');
  //       const email = auth.currentUser.email;
  //       const q = query(usersCollectionRef,where('email','==',email));
  //       setUsername(getDoc(q).data().username);
  //     }
  //     catch (e){
  //       alert("No user");
  //     }
  //   }
  //   getUsername();
  // },[]);

  const [username, setUsername] = useState("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
      } else {
        setUsername("null");
      }
    });

    return unsubscribe;
  }, [auth]);

  return (
    <Stack
      container
      direction="column"
      alignItems="center"
      spacing={4}
      className="homechoices-parent-container"
      style={{ marginTop: "50px" }}
    >
      <Stack className="homechoices-title">
        <Typography variant="h3">Welcome,{username}</Typography>
        <Typography variant="h4">What would you like to do?</Typography>
      </Stack>
      <Grid
        item
        container
        justifyContent="center"
        spacing={4}
        className="homechoices-container"
      >
        <Grid item>
          <Card
            className="homechoices-choice"
            style={{backgroundColor: "#344E41", color: "white"}}
          >
            <div className="homechoices-choicetitle">
              <CardHeader
                avatar={<CalculateIcon style={{ fontSize: 70 , color: "white"}} />}
              />
              <h1>Calorie Calculator</h1>
            </div>
            <CardContent>
              <Typography variant="body">
                Calculate the amount of calories you are consuming with our
                Calorie Calculator!
              </Typography>
            </CardContent>
            <Button href="/calorie-calculator/" size="big" className="buttonHover" style={{color: "#A3B18A"}}>
              Learn More
            </Button>
          </Card>
        </Grid>

        <Grid item>
          <Card
            className="homechoices-choice"
            style={{backgroundColor: "#344E41", color: "white"}}
          >
            <div className="homechoices-choicetitle">
              <CardHeader
                avatar={<SearchIcon style={{ fontSize: 70, color: "white"}} />}
              />
              <h1>Search For Restaurant</h1>
            </div>
            <CardContent>
              <Typography variant="body">
                Get to know any of your favourite restaurants with a click of a
                button!
              </Typography>
            </CardContent>
            <Button href="/search-restaurant/" size="big" className="buttonHover" style={{color: "#A3B18A"}}>
              Learn More
            </Button>
          </Card>
        </Grid>

        <Grid item>
          <Card
            className="homechoices-choice"
            style={{backgroundColor: "#344E41", color: "white"}}
          >
            <div className="homechoices-choicetitle">
              <CardHeader
                avatar={<RestaurantIcon style={{ fontSize: 70, color: "white"}} />}
              />
              <h1>Recommend Nearby Restaurant</h1>
            </div>

            <CardContent>
              <Typography variant="body">
                Let us recommend you amazing healthy delicacies around you!
              </Typography>
            </CardContent>
            <Button href="/recommend-restaurant/" size="big" className="buttonHover" style={{color: "#A3B18A"}}>
              Learn More
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default HomeChoices;
