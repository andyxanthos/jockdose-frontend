import React from 'react';

class RoutineListItem extends React.Component {
    handleClick = (event) => {
        event.preventDefault();
        this.props.history.push(`/routines/${this.props.id}`);
    }

    render() {
        return (
            <div className="routine-list-item" onClick={this.handleClick}>
                <p className="routine-list-item-name">{this.props.name}</p>
            </div>
        );
    }
}

export default RoutineListItem;