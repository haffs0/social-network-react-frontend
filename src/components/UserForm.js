import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUsers } from '../redux/actions'
import { isAuthenticated } from '../services/auth-helper';
import UserFormFirstPage from './UserFormFirstPage';
import UserFormSecondPage from './UserFormSecondPage';
import UserFormThirdPage from './UserFormThirdPage';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }
  onSubmit = (formValues) => {
    console.log(formValues)
    const token = isAuthenticated().token
    this.props.createUsers(formValues, token)
  }
  render() {
    const { page } = this.state;
    return (
      <div className="form-div">
        {page === 1 && <UserFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 &&
          <UserFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
        {page === 3 &&
          <UserFormThirdPage
            previousPage={this.previousPage}
            onSubmit={this.onSubmit}
          />}
      </div>
    );
  }
}

export default connect(null, {createUsers})(UserForm)

