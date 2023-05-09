import '../assets/css/home.css'
import Carousel from 'react-bootstrap/Carousel';
import WeatherCard from './WeatherCard';
const Home = () => {
    return (
        <div>
            <h1>Weather News</h1>
            <h3>Discover the Weather in Your City</h3>
            <div class='card-container'>
                <WeatherCard
                    title="Today"
                    degree={21}
                    status={"Cloudy"}
                />
                <WeatherCard
                    title="Tomorrow"
                    degree={18}
                    status={"Rainy"}
                />
                <WeatherCard
                    title="After"
                    degree={20}
                    status={"Cloudy"}
                />
            </div>
        </div>
    );
}
export default Home;