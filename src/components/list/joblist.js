import React from 'react';
import GenListe from './adminliste';
import axios from 'axios'

/* let utils = [{code:'GreMa', nom:'Grenier', prenom:'Marc'},
            {code:'RoyPa', nom:'Roy', prenom:'Patrick'}
            ]; */

class liste extends React.Component {

    constructor(props){
        super(props);

            this.state={
                utilisateurs:[]

            }
            //this.userList = this.userList.bind(this);
            this.deleteUtil = this.deleteUtil.bind(this);    
    }

    componentDidMount(){
        //this.setState ({utilisateurs:utils})
            axios.get('http://localhost:3001/User')

            .then(response =>{
                console.log(response.data);
                if (response.data.lenght > 0){
                    this.setState ({utilisateurs: response.data})
                }
            })
            .catch((error)=>{

                console.log(error);
            })
    }

    deleteUtil(id){
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => console.log(res.data));
        this.setState({utilisateurs:this.state.utilisateurs.filter(el =>el._id !==id)
        })
    }

    userList(){
        return this.state.utilisateurs.map(utilCourant => {

            return <GenListe utilisateurs={utilCourant} deleteUtil={this.deleteUtil} key={utilCourant.code}/>;
        })
    }

    render() {

        return (
            <div className="container">
                <h3> Liste des utilisateurs</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Code</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Courriel</th>
                            <th>Username</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default liste;