import React from 'react';

export default class PeopleTable extends React.Component {

    render() {
        const { people } = this.props;

        return (
            <div>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((p, idx) => {
                            return (< tr key={idx} >
                                <td>{p.firstName}</td>
                                <td>{p.lastName}</td>
                                <td>{p.age}</td>
                                <td><button 
                                onClick={() => { this.props.deleteClick(idx) }} 
                                className='btn btn-danger'>Delete</button></td>
                            </tr>)
                        })}
                    </tbody>

                </table>
            </div>
        )
    }

}