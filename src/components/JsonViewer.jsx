import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import { jsonToHTML, setClickListeners } from '../json-viewer'

export const JsonViewer = ({ data }) => {

	useEffect(() => {
		if(Object.keys(data).length) { 
			setClickListeners() 
		}
	}, [])

	const animationData = Object.keys(data).length 
		? { animation: data.animation, definitions: data.definitions, initialState: data.initialState, metadata: data.metadata }
		: { }

	return (
		<>
			<h1>JAAL Visualizer</h1>
			{ 
				Object.keys(data).length
					? (
						<>
						<h2>JAAL file content</h2>
						<div dangerouslySetInnerHTML={{__html: jsonToHTML(animationData)(true)(false)}}></div>
						</>
					)
					: <p>No data yet, first you must complete an <Link to="/exercises">exercise</Link></p> 
			}
		</>
	)
}
