import './Item.scss'

const Item = ({ itemState, onClick, isActive }) => (
	<div
		className={`item ${isActive ? "selected" : ""}`}
		onClick={onClick}>
		<span className='time'>{ itemState.time }</span>
		<div className='item-container'>
			<span className='week-day'>{ itemState.day }</span>
			<div className='image-item'>
				<img src={`/assets/images/${itemState.weather}.png`} alt={ itemState.weather } />
			</div>
			<div className='temperature'>
				<span>{ itemState.max }°</span>
				<span>{ itemState.min }°</span>
			</div>
		</div>
	</div>
);

export default Item;
