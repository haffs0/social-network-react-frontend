import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import team from "../images/team.png";

export default class NavBar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
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
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Write a post</Link>
            </li>
            <li>
              <Link to="/rooms">Post a gif</Link>
            </li>
            <li>
              <Link to="/createuser">Create user</Link>
            </li>
            <li>
              <Link to="/rooms">Login</Link>
            </li>
            <li>
              <Link to="/rooms">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
