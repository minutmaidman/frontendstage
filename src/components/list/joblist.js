import React from 'react';
import GenListe from './adminlist';
//import axios from 'axios'

 let offs = [{id : "01", title : "Software Engineer", datePosted : "2022-05-02",
 validTill : "2022-06-01", description : "Mécanichien Canin",
 companyName : "Chien", location : "Dogburg",
 jobType : "Telecommute", employementType : "FullTime",
 salary : "35", units : "Hours",
 currency : "USD", requirements : "Be a dog"}]; 

class Liste extends React.Component {

    constructor(props){
        super(props);

            this.state={
                offres:[]

            }
            this.userList = this.userList.bind(this);
            //this.deleteUtil = this.deleteUtil.bind(this);    
    }

    componentDidMount(){
        this.setState ({offres:offs})
            //axios.get('http://localhost:3001/User')

            //.then(response =>{
                //console.log(response.data);
                //if (response.data.lenght > 0){
                    //this.setState ({offres: response.data})
                //}
            //})
            //.catch((error)=>{

                //console.log(error);
            //})
    }

    /*deleteUtil(id){
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => console.log(res.data));
        this.setState({offres:this.state.offres.filter(el =>el._id !==id)
        })
    }*/

    userList(){
        return this.state.offres.map(utilCourant => {

            return <GenListe offres={utilCourant} deleteUtil={this.deleteUtil} key={utilCourant.code}/>;
        })
    }

    render() {

        return (
            <div className="container">
                <h3> Liste des offres</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Date Posted</th>
                            <th>Valid Till</th>
                            <th>Description</th>
                            <th>Company Name</th>
                            <th>Location</th>
                            <th>Job Type</th>
                            <th>Employment Type</th>
                            <th>Salary</th>
                            <th>Requirements</th>
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
export default Liste;