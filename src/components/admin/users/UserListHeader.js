import React from 'react'

declare var $:any;

class UsersListHeader extends React.Component {

	render(){

		return(
			<tr>
        <th>Nombre</th>
        <th>Correo</th>
        <th>Rol</th>
        <th>Estado</th>
        <th>Acciones</th>
      </tr>
		);

	}

}

export default UsersListHeader;