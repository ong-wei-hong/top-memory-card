export default function Game({ clickFunction }) {
	const icons=['fa-react', 'fa-laravel', 'fa-node-js', 'fa-ember', 'fa-vuejs', 'fa-jsfiddle', 'fa-js', 'fa-css3-alt', 'fa-html5', 'fa-sass', 'fa-docker', 'fa-linux'];

	const shuffle = (arr) => {
		for(let i = arr.length -1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr
	}

	return(
		<div className="game">
			{shuffle(icons).map((e) =>
				<i id={e} className={'fab ' + e} onClick={clickFunction}></i>
			)}
		</div>
	)
}
