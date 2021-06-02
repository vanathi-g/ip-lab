import React from 'react';

class Papers extends React.Component {
	render(){
		return(
			<div>
				<section id="call-for-papers" className="page-section">
					<h1 className="section-heading heading"> Call for Papers </h1>
					<p> Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam vulputate, metus ut iaculis tristique, elit erat bibendum lectus, nec lobortis mauris elit sit amet massa. Suspendisse eu vehicula mi. Nullam non sapien eu eros dictum dapibus ut at dui. Fusce tempus orci sit amet dui blandit bibendum. </p>
					<ol className="paper-topics">
						<li> <h4> Hypertext Markup Language </h4> 
							<ul className="paper-sub-topics">
								<li> Proin ut sem eu enim ornare maximus </li>
								<li> Suspendisse vel eros euismod </li>
								<li> Pulvinar nulla in, finibus lectus </li>
							</ul>
						</li>
						<li> <h4> Cascading Style Sheets </h4> 
							<ul className="paper-sub-topics">
								<li> Suspendisse eu vehicula mi. </li>
								<li> Suspendisse vel eros euismod </li>
								<li> Aliquam vulputate </li>
							</ul>
						</li>
						<li> <h4> Javascript </h4> 
							<ul className="paper-sub-topics">
								<li> Lobortis mauris elit </li>
								<li> Orci varius natoque </li>
								<li> Fusce tempus orci </li>
							</ul>
						</li>
					</ol>
					<br />
					<h1 className="section-heading heading">Submission Guidelines</h1>

					<h3 className="section-subheading heading">Regular Papers </h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis ipsum sed orci auctor sodales. Phasellus posuere nulla et ornare scelerisque. Nunc pellentesque, risus sed auctor tincidunt, nisi purus venenatis est, non bibendum ipsum purus egestas velit. Curabitur hendrerit tincidunt libero, vitae volutpat orci aliquet dictum. Nam in scelerisque ante.</p>
					<h3 className="section-subheading heading">Short Papers </h3>
					<p>Ut hendrerit tristique leo a gravida. Integer at augue ac felis dignissim porta nec at ex.Suspendisse eu vehicula mi. Nullam non sapien eu eros dictum dapibus ut at dui. Fusce tempus orci sit amet dui blandit bibendum. Sed aliquam eleifend tristique. </p>
					<h3 className="section-subheading heading">Submission Format </h3>
					<p>Cras laoreet posuere turpis nec pharetra. Aenean fringilla ligula a luctus dapibus. Phasellus sed urna laoreet, varius nulla fermentum, bibendum lorem. Phasellus vitae purus orci. Donec lorem odio, sagittis nec placerat sed, suscipit a eros. Aliquam tellus quam, malesuada a tempus ut, ornare a enim. </p>
					<h3 className="section-subheading heading">Publication</h3>
					<p>Nam vitae facilisis libero. Proin ut sem eu enim ornare maximus. Suspendisse vel eros euismod, pulvinar nulla in, finibus lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi lobortis elit eros, placerat placerat nisi accumsan quis. Pellentesque in ultrices dolor. </p>
				</section>
			</div>
		);
	}
}

export default Papers;