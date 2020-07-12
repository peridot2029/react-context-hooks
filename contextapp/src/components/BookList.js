import React, { Component } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";

/**
 * [static contextType]
 *  react.createContext()로 생성한, context 객체 원하는 클래스의 contextType 프로퍼티로
 *  지정할 수 있다. 그러면 클래스 안에서 "this.context"를 이용한 해당 context 가장 가까운
 *  provider를 찾아 그 값을 읽을 수 있게 된다. 이 값은 render를 포함함 모든 컴포넌트의
 *  Lifecycle method에서 사용 가능하다.
 */
class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{ background: theme.ui }}>the way of kings</li>
          <li style={{ background: theme.ui }}>the name of the wind</li>
          <li style={{ background: theme.ui }}>the final empire</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
