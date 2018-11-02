// React import
import React, { Component } from 'react';
// Navigation styles import
import {
  MainNavigation,
  NavTitle,
  NavLink,
  NavButton
} from '../styles/navigationStyles';
class Navigation extends Component {
  render() {
    return (
      <MainNavigation>
        <NavTitle>
          Lambda
          <br />
          Notes
        </NavTitle>
        <NavLink to="/New">
          <NavButton>View Your Notes</NavButton>
        </NavLink>
        <NavLink to="/New2">
          <NavButton>+ Create New Note</NavButton>
        </NavLink>
      </MainNavigation>
    );
  }
}

export default Navigation;
