import React, { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthentocated: false,
  };
  toggleAuth = () => {
    this.setState({ isAuthentocated: !this.state.isAuthentocated });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
export default AuthContextProvider;
