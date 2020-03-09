import React from 'react'
import UserDetails from './UserDetails'
import UserEditable from './UserEditable'
import UserNew from './UserNew'

class UsersView extends React.Component {
	
	render(){

		const{
			user,
			roles,
			onCancelEditUser,
			onGoBackToUsersList,
			onEditUserClick,
			view,
			onUpdateUser,
			onHandleEditInputChange,
			onHandleNewInputChange,
			onSaveUserClick,
			onCancelSaveUserClick,
			onReactivateUser,
			onCancelDeleteUser,
			onUploadImageChange,
			onDeleteUser
		} = this.props

		return(

			<div> 
				{
					(view && view === "userDetails")?
						<UserDetails 
							user={user}
							onGoBackToListClick={onGoBackToUsersList}
							onEditUserClick={onEditUserClick}
							onReactivateUserClick={onReactivateUser}
							onCancelDeleteUserClick={onCancelDeleteUser}
							onDeleteUserClick={onDeleteUser}
						/>
					:
					(view && view === "updateUser")?
						<UserEditable 
							user={user}
							onCancelEditUser={onCancelEditUser}
							onUpdateUserClick={onUpdateUser}
							onHandleEditInputChange={onHandleEditInputChange}
							onUploadImageChange={onUploadImageChange}
						/>
					:
						<UserNew 
							user={user}
							roles={roles}
							onHandleNewInputChange={onHandleNewInputChange}
							onSaveUserClick={onSaveUserClick}
							onCancelSaveUserClick={onCancelSaveUserClick}
						/>
				}
			</div>

		);

	}

}

export default UsersView;