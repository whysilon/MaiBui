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

  return (
    <Stack
      container
      direction="column"
      alignItems="center"
      spacing={4}
      className="homechoices-parent-container"
      sx={{ marginTop: "50px" }}
    >
      <Stack className="homechoices-title">
        <Typography variant="h3">Welcome,{user.displayName}</Typography>
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
            sx={{ maxWidth: 345, background: " #41b723" }}
            className="homechoices-choice"
          >
            <CardHeader
              title="Calorie Calculator"
              avatar={<CalculateIcon sx={{ fontSize: 100 }} />}
            />
            <CardContent>
              <Typography variant="body" color="text.secondary">
                Calculate the amount of calories you are consuming with our
                Calorie Calculator!
              </Typography>
            </CardContent>
            <Button href="/calorie-calculator/" size="small">
              Learn More
            </Button>
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{ maxWidth: 345, background: " #41b723" }}
            className="homechoices-choice"
          >
            <CardHeader
              title="Search For Restaurant"
              avatar={<SearchIcon sx={{ fontSize: 100 }} />}
            />
            <CardContent>
              <Typography variant="body" color="text.secondary">
                Get to know any of your favourite restaurants with a click of a
                button!
              </Typography>
            </CardContent>
            <Button href="/search-restaurant/" size="small">
              Learn More
            </Button>
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{ maxWidth: 345, background: " #41b723" }}
            className="homechoices-choice"
          >
            <CardHeader
              title="Recommend Nearby Healthy Restaurant"
              avatar={<RestaurantIcon sx={{ fontSize: 100 }} />}
            />
            <CardContent>
              <Typography variant="body" color="text.secondary">
                Let us recommend you amazing healthy delicacies around you!
              </Typography>
            </CardContent>
            <Button href="/recommend-restaurant/" size="small">
              Learn More
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default HomeChoices;
