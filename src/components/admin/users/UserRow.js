import React from 'react'

class UserRow extends React.Component {

  render() {

    const {
      user,
      userLogged,
      onSetUser,
      onViewDetailsClick,
      onEditUserClick
    } = this.props

    return (

      <tr style={(parseInt(userLogged.id, 10) === parseInt(user.id,10))? {background: "#c4f1f387"} : {background: "default"}}>
          <td>{(user.user_profile && user.user_profile.name )? user.user_profile.name : "No posee" }</td>
          <td>{user.email}</td>
          <td>{user.user_profile.role.name}</td>
          <td>{user.user_profile.statusAsString}</td>
          <td align="center" className="actions">
            <button style={{marginRight: 2}} className="btn btn-info btn-sm text-white" onClick={() => onViewDetailsClick(user)}>
              <i className="fa fa-eye"></i>
            </button>
            <button style={{marginRight: 2}} className="btn btn-warning btn-sm text-white" onClick={() => onEditUserClick(user)}>
              <i className="fa fa-pencil"></i>
            </button>
            <button disabled={(parseInt(userLogged.id, 10) === parseInt(user.id,10) || parseInt(user.user_profile.status) === 2)} className="btn btn-danger btn-sm text-white" data-toggle="modal" data-target="#exampleModal" onClick={() => onSetUser(user)}>
              <i className="fa fa-trash-o"></i>
            </button>
          </td>
        </tr>


    );

  }
}

export default UserRow;