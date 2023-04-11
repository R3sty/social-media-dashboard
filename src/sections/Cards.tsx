// import facebook from "../assets/images/icon-facebook.svg";
// import instagram from "../assets/images/icon-instagram.svg";
// import twitter from "../assets/images/icon-twitter.svg";
// import youtube from "../assets/images/icon-youtube.svg";

// const icons = [facebook, instagram, twitter, youtube]

const facebook =
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
		<path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" />
	</svg>

const upIcon = <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" /></svg>

const Cards = () => {
	return (
		<main>
			<section className="container cards">
				<div className="card">
					<div className="card__platform">
						<div className="card__icon">{facebook}</div>
						<p className="card__username">@nathanf</p>
					</div>
					<div className="card__followers">
						<div>1987</div>
						<div>Followers</div>
					</div>
					<div className="card__stats">
						<div className="trend">{upIcon}</div>
						<div className="stats_number">12 Today</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Cards;
