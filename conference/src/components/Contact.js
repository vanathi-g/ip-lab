import React from 'react';

class Contact extends React.Component {
	render(){
		return(
			<section id="contact" className="page-section">
				<h1 className="section-heading heading"> Contact Us </h1>
				<ul className="contact-list">
					<li> <h4>Susan Rivera : </h4> 123456789 </li>
					<li> <h4>Wanda Russell : </h4> 987654321 </li>
					<li> <h4>Shawn Young : </h4> 456123789 </li>
				</ul>
			</section>
		);
	}
}

export default Contact;