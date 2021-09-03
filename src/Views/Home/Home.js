import React from "react";
import "./Home.css";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// ES7 snippets to do 'rfce'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Home() {

  const classes = useStyles();

  let images = [
    "https://media.istockphoto.com/photos/happy-woman-looking-at-sea-from-a-cruise-ship-picture-id487190592?b=1&k=20&m=487190592&s=170667a&w=0&h=rKgMi189wjIK7oRK2yBwkd5AYgV1Rm_-1Gx8snvvhPo=",
    "https://cdn.pixabay.com/photo/2013/04/18/14/39/ship-105596__340.jpg",
    "https://cdn.pixabay.com/photo/2016/08/08/15/08/cruise-1578528__340.jpg",
    "https://cdn.pixabay.com/photo/2013/06/08/04/17/ferry-boat-123059__340.jpg",
    "https://cdn.pixabay.com/photo/2016/08/08/15/08/cruise-1578528__340.jpg",
    "https://cdn.pixabay.com/photo/2012/06/21/06/35/ship-50445__340.jpg",
    "https://cdn.pixabay.com/photo/2018/06/17/17/00/yacht-3480913__340.jpg",
    "https://cdn.pixabay.com/photo/2015/09/21/17/54/rope-950355__340.jpg",
    "https://cdn.pixabay.com/photo/2019/09/08/09/26/cruise-ship-4460493__340.jpg",
    "https://cdn.pixabay.com/photo/2019/09/08/09/26/cruise-ship-4460493__340.jpg",
    "https://cdn.pixabay.com/photo/2019/02/12/19/30/boat-3993013__340.jpg",
  ];

  return (
    <div className="home">
      <Banner />
      <div className='home__section'>
        <Grid container spacing={3} justifyContent="center">
          {images.map((currentImage) => {
            return (
              <Card
                src={currentImage}
                title="Lorem Ipsum est simplement du faux"
                description="Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
                price="$30 USD / night"
              />
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Home;
