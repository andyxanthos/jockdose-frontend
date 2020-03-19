import React from 'react';
import WorkoutListItem from './WorkoutListItem';

class WorkoutList extends React.Component {
    render() {
        return (
            <div className="workout-list">
                <h4>Workouts in this routine</h4>
                {this.props.workouts.map(workout => {
                    return <WorkoutListItem key={workout.id} workout={workout} history={this.props.history} />;
                })}
            </div>
        );
    }
}

export default WorkoutList;