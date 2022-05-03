import React from 'react';
import { Link } from 'react-router-dom'

class GenListe extends React.Component {
    render() {

        return (
            <tr>
                <td>{this.props.utilisateurs.code}</td>
                <td>{this.props.utilisateurs.nom}</td>
                <td>{this.props.utilisateurs.prenom}</td>
                <td>{this.props.utilisateurs.email}</td>
                <td>{this.props.utilisateurs.username}</td>
                <td>{this.props.utilisateurs.password}</td>
                <td>
                    
                <Link to={"/edit/" + this.props.utilisateurs._id}>Édition</Link> <a href="#" onClick={() => { this.props.deleteUtil(this.props.utilisateurs._id)}}>Suppression</a>
                </td>
            </tr>
        )
    }
}
export default GenListe;