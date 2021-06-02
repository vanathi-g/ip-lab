import React from 'react'

class Footer extends React.Component{
	render(){
		return(
			<footer>
				<table width="100%">
					<tr>
						<td>
							<div className="footer-contact">
								<h4 className="heading">Contact Us</h4>
								<hr className="footer-line"/>
								<p><a className="contact-info" href="mailto:htmlic21@ssn.edu">htmlic21@ssn.edu</a></p>
								<p className="contact-info">044 2746 9700 </p>
								<p className="contact-info">Department of CSE, <br/> SSN College of Engineering <br/>
								Rajiv Gandhi Salai (OMR), Kalavakkam – 603 110 <br/>
								Chennai , Tamilnadu, India </p>
							</div>
						</td>
					</tr>
					<tr>
						<td colspan={2}>
						<h6 className="copyright"> © Copyright SSNCE, 2021 </h6>
						</td>
					</tr>
				</table>
		  
			</footer>
		);
	}
}

export default Footer;