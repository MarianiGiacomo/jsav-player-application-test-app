import React from "react"
import { Link } from 'react-router-dom'

export const Nav = () => {
	return (
		<nav>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/exercises">Exercises</Link>
			</li>
			<li>
				<Link to="/jaal">JAAL</Link>
			</li>
			<li>
				<a href="https://github.com/MarianiGiacomo/jsav-player-application"
				target="_blank">Git Repository</a>
			</li>
		</nav>
	)
}
