import React, { Component } from 'react'
import { connect } from 'react-redux'
class UserDetail extends Component {
    render () {
        const {myActiveUser} = this.props
        if(!myActiveUser){
            return <div>Selectionnez un utilisateur pour demarrer</div>
        }
        return (
            <div>
                <h3>Détail de {myActiveUser.name}</h3>
                <ul>
                    <li>Id : {myActiveUser.id}</li>
                    <li>Role : {myActiveUser.role}</li>
                    <li>Actif : {myActiveUser.active}</li>
                </ul>
            </div>
        )
    }
}
 function mapStateToProps(state){
     return {
        myActiveUser : state.activeUser
     }
 }
export default connect(mapStateToProps)(UserDetail)