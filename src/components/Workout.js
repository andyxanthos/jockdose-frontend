import React from 'react';
import ExerciseList from './ExerciseList';

class Workout extends React.Component {
    state = {
        id: '',
        name: '',
        description: '',
        exercises: []
    }

    componentDidMount() {
        fetch(`http://localhost:3000/workouts/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(workout => {
            this.setState({
                id: workout.id,
                name: workout.name,
                description: workout.description
            });
            return fetch('http://localhost:3000/exercises');
        })
        .then(res => res.json())
        .then(exercises => {
            let matchingExercises = [];
            exercises.forEach(exercise => {
                if (exercise.workout_id === this.state.id) {
                    matchingExercises.push(exercise);
                }
            });
            this.setState({
                exercises: matchingExercises
            });
        })
        .catch(e => console.log(e));
    }
    
    render() {
        return (
            <div className="workout">
                <h3>{this.state.name}</h3>
                <p>{this.state.description}</p>
                <ExerciseList exercises={this.state.exercises} />
            </div>
        );
    }
}

export default Workout;