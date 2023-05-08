import React, { ReactNode } from 'react';
import { dashboardData } from "../dashboard-data";
import { getStatsColorClassName, formatNumber } from "../utils";

const Cards: React.FC = () => {
	interface SocialCardProps {
		socialMedia: string;
		icon: ReactNode;
		username: string;
		followers: number | string;
		trendIcon: ReactNode;
		figure: number;
		trend: string;
	}
	const SocialCard: React.FC<SocialCardProps> = ({ socialMedia, icon, username, followers, figure, trendIcon, trend }) => {

		const getBorderColorClassName = () => {
			switch (socialMedia)
			{
				case 'facebook':
					return 'border-facebook';
				case 'twitter':
					return 'border-twitter';
				case 'instagram':
					return 'border-instagram';
				case 'youtube':
					return 'border-youtube';
				default:
					return '';
			}
		};

		const borderColorClassName = getBorderColorClassName();

		const statsColorClassName = getStatsColorClassName(trend);

		return (
			<div className={`card ${borderColorClassName}`}>
				<div className="card__platform">
					<div className="card__icon">{icon}</div>
					<p className="card__username">{username}</p>
				</div>
				<div className="card__followers">
					<div>{followers}</div>
					<div>Followers</div>
				</div>
				<div className={`card__stats ${statsColorClassName}`}>
					<div className={`trend ${statsColorClassName}`}>{trendIcon}</div>
					<div className={`stats_number ${statsColorClassName}`}><span>{figure}</span>{" "}Today</div>
				</div>
			</div>

		);
	};

	return (
		<section className="container cards">
			{dashboardData.map((data, index) => (
				<SocialCard
					socialMedia={data.socialMedia}
					key={index}
					icon={data.icon}
					followers={formatNumber(data.followers)}
					username={data.userName}
					trendIcon={data.trendIcon}
					figure={data.figure}
					trend={data.trend}
				/>
			))}
		</section>
	);
};

export default Cards;
