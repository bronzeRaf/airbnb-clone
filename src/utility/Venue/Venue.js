import React, { Component } from 'react';
import './Venue.css';
import { Link } from 'react-router-dom';
class Venue extends Component{

    // activityType: "KAYAKING"
    // cost: 399
    // id: 1
    // image: "https://airbnb-clone-prexel-images.s3.amazonaws.com/activities/kayakingTour.jpg"
    // rating: 4.7
    // title: "Kayaking adventure"
    // totalRatings: 131

    render(){
        const { location, pricePerNight, id, imageUrl, rating, title } = this.props.venue;
        return(
            <div className="venue">
                <Link to={`/venue/${id}`}>
                    <img src={imageUrl} />
                    <div className="location">{location}</div>
                    <div className="title">{title}</div>
                    <div className="cpricePerNightost"> ${pricePerNight}/night</div>
                    <div className="rating">
                        <i className="material-icons">star</i>{rating}
                    </div>
                </Link>
            </div>
        )
    }
}

export default Venue;
