import React from 'react';
import { render } from 'react-dom';
import AddPerson from './AddPerson';
import PeopleTable from './PeopleTable';

class App extends React.Component {

    state = {
        people: [],
        firstName: '',
        lastName: '',
        age: ''
    };

    clear = () => {
        this.setState({ firstName: '', lastName: '', age: '' });
    }

    clearTable = () => {
        this.setState({ people: [] });
    }

    addPersonClick = () => {
        const peopleCopy = [...this.state.people];
        const { firstName, lastName, age } = this.state;
        const person = { firstName, lastName, age };
        peopleCopy.push(person);
        this.setState({ people: peopleCopy });
        this.clear();
    }

    firstNameChange = e => {
        this.setState({ firstName: e.target.value })
    }

    lastNameChange = e => {
        this.setState({ lastName: e.target.value })
    }

    ageChange = e => {
        this.setState({ age: e.target.value })
    }

    deleteClick = idx => {
        const copyArray = [...this.state.people];
        copyArray.splice(idx, 1);
        this.setState({people: copyArray});
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 40 }}>
                <AddPerson firstName={this.state.firstName} lastName={this.state.lastName} age={this.state.age}
                    addPerson={this.addPersonClick} clear={this.clear}
                    firstNameChange={this.firstNameChange} lastNameChange={this.lastNameChange} ageChange={this.ageChange}
                    clearTable={this.clearTable} />
                <br />
                <PeopleTable people={this.state.people} deleteClick={this.deleteClick} />
            </div>
        )
    }
}

render(<App />, document.getElementById('root'));