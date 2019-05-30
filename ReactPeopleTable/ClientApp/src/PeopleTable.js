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
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((p, idx) => {
                            return (< tr key={idx} >
                                <td>{p.firstName}</td>
                                <td>{p.lastName}</td>
                                <td>{p.age}</td>
                            </tr>)
                        })}
                    </tbody>

                </table>
            </div>
        )
    }

}