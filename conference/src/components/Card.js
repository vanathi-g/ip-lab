import React from 'react'

class Card extends React.Component{
	render(){
		return(
			<div className="card">
				<div class="profile-info">
					<p class="name">{this.props.name}</p>
					<p class="designation">{this.props.desig}</p>
				</div>
			</div>
		);
	}
}

export default Card;