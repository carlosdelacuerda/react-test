import { useState } from "react";

import Tab from "../Tab/Tab";
import NoData from "../No-data/NoData";
import './Tabs.scss';
import Items from "../Items/Items";

const Tabs = () => {
	const [activeTab, setActiveTab] = useState(1);

	const handleTabClick = (index) => {
		setActiveTab(index + 1);
	};

	const tabData = [
        { label: "Temperature" },
        { label: "Precipitation" },
        { label: "Wind" },
    ];

	return (
		<div className="tabs-container">
			<div className="tabs">
				{tabData.map((tab, index) => (
						<Tab
							key={index}
							label={tab.label}S
							onClick={() =>
								handleTabClick(index)
							}
							isActive={index === activeTab-1}
						/>
				))}
			</div>
			{ activeTab === 1 &&
				<Items />
			}
			{ activeTab === 2 &&
				<NoData tab={'Precipitation'}/>
			}
			{ activeTab === 3 &&
				<NoData  tab={'Wind'}/>
			}

		</div>
	);
};

export default Tabs;
