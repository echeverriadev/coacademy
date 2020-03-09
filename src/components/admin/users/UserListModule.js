import React from 'react'
import UsersList from './UsersList'
import UsersView from './UsersView'

const UsersListModule = ({
			isFetching,
			view,
			users,
			user,
			roles,
			userLogged,
			onSetUser,
			onCancelDeleteUser,
			onDeleteUser,
			onViewDetails,
			onEditUser,
			onCancelEditUser,
			onGoBackToUsersList,
			onUpdateUser,
			onHandleEditInputChange,
			onHandleNewInputChange,
			onSaveUser,
			onCancelSaveUser,
			onNewUser,
			onUploadImageChange,
			onReactivateUser
		}) => (
			<div>
			{
				(view | view === 'newUser' | view === 'userDetails' | view === 'updateUser')? 
					<UsersView 
						user={user}
						view={view}
						isFetching={isFetching}
						onCancelEditUser={onCancelEditUser}
						onGoBackToUsersList={onGoBackToUsersList}
						onEditUserClick={onEditUser}
						onUpdateUser={onUpdateUser}
						onHandleEditInputChange={onHandleEditInputChange}
						onHandleNewInputChange={onHandleNewInputChange}
						onSaveUserClick={onSaveUser}
						onCancelSaveUserClick={onCancelSaveUser}
						onCancelDeleteUser={onCancelDeleteUser} 
						onDeleteUser={onDeleteUser}
						onReactivateUser={onReactivateUser}
						onUploadImageChange={onUploadImageChange}
						roles={roles}
					/>
				:
					<UsersList
						isFetching={isFetching}
						users={users}
						user={user}
						userLogged={userLogged}
						onSetUser={onSetUser}
						onCancelDeleteUser={onCancelDeleteUser} 
						onDeleteUser={onDeleteUser}
						onViewDetails={onViewDetails}
						onEditUserClick={onEditUser}
						onNewUser={onNewUser}
					/>
			}
			</div>


);

export default UsersListModule;