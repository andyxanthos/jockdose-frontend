import React from 'react';
import ExerciseListItem from './ExerciseListItem';

class ExerciseList extends React.Component {
    render() {
        return (
            <div className="exercise-list">
                {this.props.exercises.map(exercise => {
                    return <ExerciseListItem exercise={exercise} />
                })}
            </div>
        );
    }
}

export default ExerciseList;