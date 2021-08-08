import React, { useEffect } from "react"
import { jsonToHTML, setClickListeners } from '../json-viewer'

export const JsonViewer = ({ data }) => {

	useEffect(() => {
		if(Object.keys(data).length) { 
			// const jsonHTML = jsonToHTML(data)
			// document.getElementById('json-viewer').innerHTML = jsonHTML
			setClickListeners() 
		}
	}, [])

	const animationData = Object.keys(data).length 
		? { animation: data.animation, definitions: data.definitions, initialState: data.initialState, metadata: data.metadata }
		: { }

	return Object.keys(data).length
		? (
			<div id="json-viewer" dangerouslySetInnerHTML={{__html: jsonToHTML(animationData)(true)(false)}}>
			</div>
		)
		: <p>No data</p> 
}
