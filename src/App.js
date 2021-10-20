import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header'
import Game from './components/Game'

function App() {
	const [curr, setCurr] = useState(0);
	const [clicked, setClicked] = useState([]);
	const [high, setHigh] = useState(0);

	const clickFunction = (e) => {
		if(clicked.includes(e.target.id)) {
			setCurr(0);
			setClicked([]);
		} else {
			setClicked(clicked.concat(e.target.id));
			setCurr(curr + 1);
		}
	};

	useEffect(() => {
		setHigh(Math.max(high, curr))
	}, [high, curr])

  return (
    <div className="App">
			<Header
				curr={curr}
				high={high}
			/>
			<Game
				clickFunction={clickFunction}
			/>
    </div>
  );
}

export default App;
