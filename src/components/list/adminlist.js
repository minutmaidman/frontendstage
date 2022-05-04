import React from 'react';
import { Link } from 'react-router-dom'

class GenListe extends React.Component {
    render() {

        return (
            <tr>
                <td>{this.props.offres.id}</td>
                <td>{this.props.offres.title}</td>
                <td>{this.props.offres.datePosted}</td>
                <td>{this.props.offres.validTill}</td>
                <td>{this.props.offres.description}</td>
                <td>{this.props.offres.companyName}</td>
                <td>{this.props.offres.location}</td>
                <td>{this.props.offres.jobType}</td>
                <td>{this.props.offres.employmentType}</td>
                <td>{this.props.offres.salary}</td>
                <td>{this.props.offres.units}</td>
                <td>{this.props.offres.currency}</td>
                <td>{this.props.offres.requirements}</td>
                <td>
                    
                <Link to={"/edit/" + this.props.offres._id}>Édition</Link> <a href="#" onClick={() => { this.props.deleteUtil(this.props.offres._id)}}>Suppression</a>
                </td>
            </tr>
        )
    }
}
export default GenListe;