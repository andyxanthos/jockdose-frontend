import React from 'react';

class WorkoutListItem extends React.Component {

    handleClick = (event) => {
        event.preventDefault();
        this.props.history.push(`/workouts/${this.props.workout.id}`);
    }

    render() {
        return (
            <div className="workout-list-item" onClick={this.handleClick}>
                <p>{this.props.workout.name}</p>
            </div>
        );
    }
}

export default WorkoutListItem;