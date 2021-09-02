import React, { Component } from 'react';
import './Venue.css';
import Venue from './Venue';
import SlickSlider from '../Slider/Slider';

class Venues extends Component{

    render(){
        const venues = this.props.venues.map((venue,i)=>{
            return(
                <div key={i} className="col s2">
                    <Venue venue={venue}/>
                </div>                
            )
        })
        return(
            <div className="venues">
                <h1 className="main-header-text">{this.props.header}</h1>
                <SlickSlider elements={venues} />
            </div>
        )
    }
}

export default Venues;
