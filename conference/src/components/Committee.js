import React from 'react'
import Card from './Card'

var members = [
	{
		name: "Molly Bennet",
		desig: "Patron"
	},
	{
		name: "George Fletcher",
		desig: "General Chair"
	},
	{
		name: "Philip Butler",
		desig: "Patron"
	},
	{
		name: "Darnell Harper",
		desig: "Committee Co-Chair"
	},
	{
		name: "Tami Burton",
		desig: "Committee Chair"
	},
	{
		name: "Lana Reese",
		desig: "Committee Co-Chair"
	}
]

class Committee extends React.Component {
	render() {
		return(
			<section id="committee" className="page-section">
				<h1 className="section-heading heading"> Committee Members </h1>
				<hr />
				<div class="comm-cards">
				{members.map((obj) => <Card name={obj.name} desig={obj.desig}/>)}
				</div>
			</section>
		);
	}
}

export default Committee;