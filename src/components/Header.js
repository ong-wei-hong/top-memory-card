export default function Header({ curr, high }) {
	return (
		<header>
			<div className="header-left">
				<h1>Development Memory Game</h1>
				<p className="italic">Get points by clicking on an icon. The game will reset if an icon was clicked on more than once.</p>
			</div>
			<div className="header-right">
				<p>Current Score: {curr}</p>
				<p>Best Score: {high}</p>
			</div>
		</header>
	)
};
