import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

// context.provider - context를 구독하는 컴포넌트들에게 context 변화를 알리는 역할
class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };

  // toggleTheme function 정의 후, value 속성 전달.
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
