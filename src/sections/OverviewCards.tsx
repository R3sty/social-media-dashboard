import React, { ReactNode } from 'react';
import { overViewData } from "../dashboard-data";
import { getStatsColorClassName } from "../utils";

const OverviewCards: React.FC = () => {
	interface SocialCardProps {
		socialMedia: string;
		icon: ReactNode;
		statsFor: string;
		figure: number;
		trendIcon: ReactNode;
		percentage: number;
		trend: string;
	}
	const OverviewCard: React.FC<SocialCardProps> = ({ icon, statsFor, figure, trendIcon, trend, percentage }) => {

		const statsColorClassName = getStatsColorClassName(trend);

		return (
			<div className="overview-card">
				<div className="overview-card__heading">
					<div className="stats-for">{statsFor}</div>
					<div className="overview-card__icon">{icon}</div>
				</div>
				<div className="overview-card__stats">
					<div className="number">{figure}</div>
					<div className="overview-trend">
						<div className="trend-icon ">{trendIcon}</div>
						<div className={`percentage ${statsColorClassName}`}><span>{percentage}</span>%</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<section className="container overview-cards">
			{overViewData.map((data, index) => (
				<OverviewCard
					socialMedia={data.socialMedia}
					key={index}
					icon={data.icon}
					statsFor={data.statsFor}
					trendIcon={data.trendIcon}
					figure={data.figure}
					percentage={data.percentage}
					trend={data.trend}
				/>
			))}
		</section>
	);
};

export default OverviewCards;
