import React from 'react';

class Dates extends React.Component {
	render(){
		return(
			<section id="imp-dates" className="page-section">
				<h1 className="section-heading heading">Important Dates </h1>
				<ul className="dates-list fa-ul">
					<li><span className="fa-li"><i className="fas fa-calendar"></i></span><b>Paper Submission Opens :</b> 1 January, 2020</li>
					<li><span className="fa-li"><i className="fas fa-calendar"></i></span><b>Paper Submission Closes:</b> 10 January, 2020 January 31, 2021</li>
					<li><span className="fa-li"><i className="fas fa-calendar"></i></span><b>Acceptance Notification:</b> 15 January, 2021</li>
					<li><span className="fa-li"><i className="fas fa-calendar"></i></span><b>Camera Ready Submission:</b> 20 January, 2021(including registration of authors and payments)</li>
					<li><span className="fa-li"><i className="fas fa-calendar"></i></span><b>Pre Conference Workshop:</b> 26 January, 2021.</li>
					<li><span className="fa-li"><i className="fas fa-calendar"></i></span><b>Conference: </b>29, 30, 31 January.</li>
				</ul>
			</section>
		);
	}
}

export default Dates;