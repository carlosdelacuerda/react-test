import { useState } from "react";

import Item from "../Item/Item";



const days = [
	{
		time: '10:00',
		day: 'Fri',
		weather: 'sunny',
		max: '22',
		min: '9'
	},
	{
		time: '13:00',
		day: 'Sat',
		weather: 'partly_cloudy',
		max: '24',
		min: '7'
	},
	{
		time: '16:00',
		day: 'Sun',
		weather: 'sunny',
		max: '22',
		min: '9'
	},
	{
		time: '19:00',
		day: 'Mon',
		weather: 'partly_cloudy',
		max: '19',
		min: '1'
	},
	{
		time: '22:00',
		day: 'Tue',
		weather: 'partly_cloudy',
		max: '17',
		min: '2'
	},
	{
		time: '01:00',
		day: 'Wed',
		weather: 'sunny',
		max: '19',
		min: '3'
	},
	{
		time: '04:00',
		day: 'Thu',
		weather: 'sunny',
		max: '20',
		min: '6'
	},
	{
		time: '07:00',
		day: 'Fri',
		weather: 'sunny',
		max: '19',
		min: '6'
	}
]

const Items = () => {
	const [activeItem, setActiveItems] = useState(1);

	const handleTabClick = (index) => {
		setActiveItems(index + 1);
	};

	return (<>
		{days.map((itemState, index) => {
			return <Item
				itemState={itemState}
				key={index}
				onClick={() =>
					handleTabClick(index)
				}
				isActive={index === activeItem-1}
				/>
		})}
	</>	)
};

export default Items;
