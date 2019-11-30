import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FaAlignRight } from "react-icons/fa";
import team from "../images/team.png";
import { isAuthenticated, signout } from '../services/auth-helper';
import { logout } from '../redux/actions/index'


class NavBar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  onClick = () => {
    this.props.logout(isAuthenticated().token)
    signout()
  }
  renderAdminCreate = () => {
    if (isAuthenticated().role === 'Admin') {
      return <li><Link to="/createuser">Create user</Link></li>
    } 
  }
  renderMenu = () => {
    console.log(this.props.IsSignedIn)
    if (isAuthenticated()) {
      return (
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/feeds">Home</Link>
            </li>
            <li>
              <Link to="/post/new">Write a post</Link>
            </li>
            <li>
              <Link to="/gif/new">Post a gif</Link>
            </li>
            {this.renderAdminCreate()}
            <li>
              <Link to="/" onClick={this.onClick}>Logout</Link>
            </li>
          </ul>
      )
    }
    else {
      return(
        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/signin">Login</Link>
          </li>
        </ul>     
      )
    }
  }
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={team} alt="company logo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          {this.renderMenu()}
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {IsSignedIn: state.user.isSignIn}
}

export default connect(mapStateToProps, {logout})(NavBar)