import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../assets/css/home.css'
import Icon from '../assets/Pictures/icon.png'

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h1>Weather News</h1>
                <h3>Discover the Weather in Your City</h3>
                <div class='card-container'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img class='cardImg' variant="top" src={Icon} alt="Weather Icon"/>
                        <Card.Body>
                            <Card.Title>Today's Weather</Card.Title>
                            <Card.Text>21&deg;C, Cloudy</Card.Text>
                            <a href="FetchData.js" className="btn btn-primary mr-2">More Details</a>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img class='cardImg' variant="top" src={Icon} alt="Weather Icon"/>
                        <Card.Body>
                            <Card.Title>Tomorrow's Weather</Card.Title>
                            <Card.Text>18&deg;C, Rainy</Card.Text>
                            <a href="FetchData.js" className="btn btn-primary mr-2">More Details</a>
                        </Card.Body>
                    </Card>
        
                    <Card style={{ width: '18rem' }}>
                        <Card.Img class='cardImg' variant="top" src={Icon} alt="Weather Icon"/>
                        <Card.Body>
                            <Card.Title>Thursday's Weather</Card.Title>
                            <Card.Text>20&deg;C, Cloudy</Card.Text>
                            <a href="FetchData.js" className="btn btn-primary mr-2">More Details</a>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}