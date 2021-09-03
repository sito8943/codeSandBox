import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "../../Components/SearchResult/SearchResult";

function SearchPage() {
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
      "https://cdn.pixabay.com/photo/2019/02/12/19/30/boat-3993013__340.jpg"
    ];

  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      { images.map((currentImage)=>{

        return <SearchResult
        img={currentImage}
        location="Lorem "
        title="Lorem Ipsum est simplement du faux"
        description="Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
        star={4.73}
        price="$30 USD / night"
        total="$117 USD total"
      />
      }) }
      
    </div>
  );
}

export default SearchPage;
