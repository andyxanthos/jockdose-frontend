import React from 'react';

class FrontPage extends React.Component {
    handleClick = (event) => {
        event.preventDefault();
        this.props.history.push('/routines');
    }
    
    render() {
        return (
            <div className="front-page">
                <h3 className="title">Jockdose</h3>
                <button type="button" onClick={this.handleClick}>Browse Workout Routines</button>
            </div>
        );
    }
}

export default FrontPage;