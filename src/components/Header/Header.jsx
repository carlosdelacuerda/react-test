import './Header.scss'

const Header = () => {

	const today = {
        weather: 'sunny',
        temperature: '9',
        precipitation: '0',
        humidity: '49',
        wind: '10'
    }

	return (
		<header className="header">
            <section className="today-header">
                <img src={`/assets/images/${today.weather}.png`} alt={today.weather} />
                <span className="temperature">
                    <h2>{today.temperature}</h2>
                    <div className='measure'>
                        <sup>°C</sup>
                        <span></span>
                        <sup>°F</sup>
                    </div>
                </span>
                <div className='sub-data'>
                    <small>Precipitation: {today.precipitation}%</small>
                    <small>Humidity: {today.humidity}%</small>
                    <small>Wind: {today.wind} kn/h</small>
                </div>
            </section>
            <section className='resume-header'>
                <h1>Weather</h1>
                <h2>Friday 09:00</h2>
                <h3>{ today.weather }</h3>
            </section>
		</header>
	);
};

export default Header;
