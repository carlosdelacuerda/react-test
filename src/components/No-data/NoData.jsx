import './NoData.scss'

const NoData = ({tab}) => {
	return (
		<div className="no-data">
			<img className="no-data-img" src="/assets/images/partly_cloudy.png" alt="No data" />
			<h3>We don't have {tab} data</h3>
		</div>
	);
};

export default NoData;
