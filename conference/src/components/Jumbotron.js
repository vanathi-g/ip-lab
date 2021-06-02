import React from 'react';

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="intro">
                <h1 className="conf-title on-overlay heading"> Welcome to HTML IC 2021</h1>
                <h2 className="conf-subtitle on-overlay heading"> 10th International Conference on HyperText Markup Language </h2>
                <h3 className="conf-info on-overlay">29, 30, 31 January 2021</h3>
                <h3 className="conf-info on-overlay"> <em>Department of CSE, <span title="Sri Sivasubramaniya Nadar"> SSN </span>College of Engineering </em></h3>
                <div className="overlay"> </div>
            </div>
        );
    }
}

export default Jumbotron;