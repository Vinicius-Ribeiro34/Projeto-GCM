import React, { Component } from "react";
import { Navigate, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import M from 'materialize-css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
    };
  }

  componentDidMount() {
    M.AutoInit();
    const token = window.localStorage.getItem("token");

    if (token) {
      this.setState({
        login: true,
      });
    } else {
      this.setState({
        login: false,
      });
    }
  }

  render() {
    if (this.state.login === true) return <Navigate to="/home" />;

    return (
      <div>
        {/* <Routes> */}
        <Route path="/" element={<LoginForm />} />
        {/* </Routes> */}
      </div>
    );
  }
}

export default Login;
