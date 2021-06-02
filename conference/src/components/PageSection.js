import React from 'react';
import PastConfList from './PastConfList';

class PageSection extends React.Component {
	render() {
		return(
			<section id={this.props.id} className="page-section">
				<h1 className="section-heading heading" > {this.props.title} </h1>
				<p> {this.props.content} </p>
				{this.props.displayList ? <PastConfList /> : null}
			</section>
		);
	}
}

export default PageSection;