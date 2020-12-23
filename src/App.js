import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
	return (
		<main>
			<div className='container'>
				<h3>Q & A</h3>
				<section className='info'>
					{data.map((question) => <SingleQuestion key={question} {...question} />)}
				</section>
			</div>
		</main>
	);
}

export default App;
