import React, { Component } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
    };
  }

  componentDidMount() {
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
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    );
  }
}

export default Login;
