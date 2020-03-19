import React from 'react';

class ExerciseListItem extends React.Component {
    render() {
        return (
            <div className="exercise-list-item">
                <p>{this.props.exercise.name}</p>
                <p>{this.props.exercise.description}</p>
            </div>
        );
    }
}

export default ExerciseListItem;