import React from 'react'
import {Link} from 'react-router-dom'
import UserListHeader from './UserListHeader'
import ModalDelete from '../utils/DeleteModal'
import UserRow from './UserRow'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import './styles.css'

declare var $:any;

class UsersList extends React.Component {

  componentDidMount(){
    if(!this.props.isFetching && this.props.users.length > 0){
      var script=document.createElement('script');
      script.type='text/javascript';
      script.src='assets/js/dataTables/custom-reload-table.js';
      
      $("body>div").append(script);
    }
  }

	render() {

		const {
			users,
			userLogged,
      isFetching,
			user,
			onSetUser,
			onCancelDeleteUser,
			onViewDetails,
			onEditUserClick,
			onNewUser,
			onDeleteUser
		} = this.props;

		return (
			<div className="card mb-0">
				<div className="card-header">
          <h3 className="card-title">Lista de usuarios</h3>
        </div>
        <div className="card-body">
          {isFetching && (
            <div className="loader-style">
              <div className="text-loader">
                <label>Cargando Usuarios</label>
              </div>
              <Loader
                className="img-loader"
                type="CradleLoader"
                color="#6c8e52"
                height={100}
                width={100}
                timeout={0} //3 secs
              />
            </div>
          )}
          <div className="table-responsive">
            <table style={{width: "100%", marginBottom: 10}} className="data-table-user table table-striped table-bordered table-hover" >
              <thead>
                  <UserListHeader />
              </thead>
              <tbody>
                  {
                    (users && users.length > 0)?
                      users.map((user) => (
                        <UserRow 
                          user={user}
                          userLogged={userLogged}
                          onSetUser={onSetUser}
                          onViewDetailsClick={onViewDetails}
                          onEditUserClick={onEditUserClick}
                        />
                      ))
                      :
                      <tr>
                        <td colSpan={5}>No existen usuarios registrados.</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                  }
              </tbody>
            </table>
            <br/>
            <div>
              <button
                className="btn btn-info"
                onClick={() => onNewUser()}
              >
                {" "}
                Agregar un nuevo usuario{" "}
              </button>
            </div>
          </div>
          <ModalDelete
            entity={user}
            onCancelDeleteEntity={onCancelDeleteUser}
            onDeleteEntity={onDeleteUser}
          />
        </div>
			</div>
		);

	}

}

export default UsersList;