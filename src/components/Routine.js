import React from 'react';
import WorkoutList from './WorkoutList';

class Routine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            description: '',
            workouts: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/routines/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(routine => {
            this.setState({
                id: routine.id,
                name: routine.name,
                description: routine.description
            });
            return fetch('http://localhost:3000/workouts');
        })
        .then(res => res.json())
        .then(workouts => {
            let matchingWorkouts = [];
            workouts.forEach(workout => {
                if (workout.routine_id === this.state.id) {
                    matchingWorkouts.push(workout);
                }
            });
            this.setState({
                workouts: matchingWorkouts
            });
        })
    }


    render() {
        return (
            <div className="routine">
                <h2>{this.state.name}</h2>
                <p>{this.state.workouts.length} workout(s) in this routine.</p>
                <p>{this.state.description}</p>
                <WorkoutList workouts={this.state.workouts} history={this.props.history} />
            </div>
        );
    }
}

export default Routine;