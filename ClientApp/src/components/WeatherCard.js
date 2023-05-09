import { Card } from 'react-bootstrap';
import Icon from '../assets/Pictures/icon.png'

const WeatherCard = ({ title, degree, status }) => {


    const getDay = () => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date();
        if (title === "Today") {
            const dayName = daysOfWeek[date.getDay()];
            return `${dayName} ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        }
        else if (title === "Tomorrow") {
            const dayName = daysOfWeek[date.getDay()+1];
            return `${dayName} ${date.getDate()+1}/${date.getMonth()+1}/${date.getFullYear()}`;
        }
        else {
            const dayName = daysOfWeek[date.getDay()+2];
            return `${dayName} ${date.getDate()+2}/${date.getMonth()+1}/${date.getFullYear()}`;
        }
    }
    return (
        <Card style={{ width: '18rem', padding: "10px" }}>
            <Card.Img class='cardImg' variant="top" src={Icon} alt="Weather Icon" />
            <Card.Body>
                <Card.Title>{getDay()}</Card.Title>
                <Card.Text>{degree}&deg;C, {status}</Card.Text>
                <a href="FetchData.js" className="btn btn-primary mr-2">More Details</a>
            </Card.Body>
        </Card>
    )
}
export default WeatherCard;