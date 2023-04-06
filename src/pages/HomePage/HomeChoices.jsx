// CSS
import './HomeChoices.css';
import { db, auth } from '../../firebase-config';
import { collection, getDoc, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Button, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SearchIcon from '@mui/icons-material/Search';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

/**
 * Displays the different selections on the 
 * home page.
 * 
 * @author Marcus Yeo
 * @returns HTML of HomePage content
 */

const HomeChoices = () => {
    // const [username, setUsername] = useState('');

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
      <Grid container direction="column" alignItems="center" spacing={4} className="homechoices-parent-container">
        <Grid item className = "homechoices-title">
            <Typography variant="h3" component="h1">Welcome,</Typography>
            <Typography variant="subtitle1" component="span">What would you like to do?</Typography>
        </Grid>
        <Grid item container justifyContent="center" spacing={4} className="homechoices-container">
          <Grid item>
            <Card sx={{ maxWidth: 345 }} className="homechoices-choice">
              <CardHeader title="Calorie Calculator" avatar={<FitnessCenterIcon sx={{ fontSize: 100 }} />} />
              <CardContent>
                <Typography variant="body" color="text.secondary">
                  Calculate the amount of calories you are consuming with our Calorie Calculator!
                </Typography>
              </CardContent>
              <Button href="/calorie-calculator/" size="small">Learn More</Button>
            </Card>
          </Grid>

          <Grid item>


            <Card sx={{ maxWidth: 345 }} className="homechoices-choice">
              <CardHeader title="Search For Restaurant" avatar={<SearchIcon sx={{ fontSize: 100 }} />} />
              <CardContent>
                <Typography variant="body" color="text.secondary">
                  Get to know any of your favourite restaurants with a click of a button!
                </Typography>
              </CardContent>
              <Button href="/search-restaurant/" size="small">Learn More</Button>
            </Card>
          </Grid>

          <Grid item>
            <Card sx={{ maxWidth: 345 }} className="homechoices-choice">
              <CardHeader title="Recommend Nearby Healthy Restaurant" avatar={<RestaurantIcon sx={{ fontSize: 100 }} />} />
              <CardContent>
                <Typography variant="body" color="text.secondary">
                  Let us recommend you amazing healthy delicacies around you!
                </Typography>
              </CardContent>
              <Button href="/recommend-restaurant/" size="small">Learn More</Button>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
}

export default HomeChoices;
