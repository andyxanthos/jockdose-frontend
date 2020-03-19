import React from 'react';
import RoutineListItem from './RoutineListItem';

class RoutineList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routines: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/routines')
        .then(res => res.json())
        .then(routines => {
            this.setState({ routines })
        })
        .catch(e => console.log(e));
    }

    render() {
        return (
            <div className="routine-list">
                <h3>All Routines</h3>
                {this.state.routines.map((routine, index) => {
                    return <RoutineListItem 
                            key={index} 
                            id={routine.id} 
                            name={routine.name} 
                            history={this.props.history} />;
                })}
            </div>  
        );    
    }
}

export default RoutineList;