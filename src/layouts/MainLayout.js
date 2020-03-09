import React from 'react'
import HomePageContainer from '../containers/HomePageContainer'
import AdminDashboardContainer from '../containers/AdminDashboardContainer'
import UserDashboardContainer from '../containers/users/UserDashboardContainer'

class MainLayout extends React.Component {
  render() {
    const { logged, user } = this.props;

    return (
      <div>
        {!logged ? (
          <HomePageContainer />
        ) : (logged && user && user.user_profile.role.id === 1) ? (
          <AdminDashboardContainer />
        ) : (
          <UserDashboardContainer />
        )}
      </div>
    );
  }

}

export default MainLayout;
