import React, { useState, useEffect }  from 'react';
import { exercises } from '../conf';
import { constructUrl } from '../helpers'

const Exercise = ({ match }) => {
	const [exercise, setExercise] = useState({})
	
	useEffect(() => {
		const foundExercise = exercises.find(e => {
			return e.ordinal_number.toString() === match.params.number.toString()
		})
		setExercise(foundExercise);
	}, [match.params.number])

	const removeLoader = () => {
		document.querySelector('.loader').remove()
	}

  return (
		<div>
			<strong className="warning">
				<span role="img" aria-label="exlamation-mark">&#10071;</span>
				If the exercise does not load properly, check that you have allowed thrid party cookies for this web site.
				</strong>
			<div className="exercise-content">
				{
					!Object.keys.length
						? <p>No exercise</p>
						: 
							<>
							<div className='loader'></div>
							<iframe 
								title="exercise"
								className="exercise" 
								src={constructUrl(exercise)} 
								id={`${exercise.title}-${exercise.ordinal_number}`}
								onLoad={removeLoader}
								>
								</iframe>
							</>
				}
				<div id="player-container"></div>
			</div>
		</div>
	)
};

export default Exercise;
