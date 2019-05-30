import React from 'react';

export default class AddPerson extends React.Component {

    render() {
        return (
            <div className='row'>
                <div className='col-md-4'>
                    <input value={this.props.firstName} placeholder='First Name' className='form-control' onChange={this.props.firstNameChange} />
                    <input value={this.props.lastName} placeholder='Last Name' className='form-control' onChange={this.props.lastNameChange} />
                    <input value={this.props.age} placeholder='Age' className='form-control' onChange={this.props.ageChange} />
                </div>
                <div className='col-md-4'>
                    <button className='btn btn-warning' onClick={this.props.addPerson}>Add Person</button>
                    <br />
                    <button className='btn btn-default' onClick={this.props.editPerson} >Submit Edit</button>
                    <br />
                    <button className='btn btn-primary' onClick={this.props.clear} >Clear Textboxes</button>
                    <br />
                    <button className='btn btn-success' onClick={this.props.clearTable} >Clear Table</button>
                </div>
            </div>
        )
    }
}