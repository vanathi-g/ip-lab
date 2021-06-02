import React from 'react'

import Navbar from './Navbar'
import Jumbotron from './Jumbotron'

class Header extends React.Component{
	render(){
		return(
			<div>
				<Navbar />
				<Jumbotron />
			</div>
		);
	}
}

export default Header;