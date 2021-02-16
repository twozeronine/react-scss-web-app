import React from "react";
import classnames from "classnames";

import "./Button.scss";

// size : large , medium , small
function Button({ children, size }) {
  return <button className={classnames("Button", size)}>{children}</button>;
}

Button.defaultProps = {
  size: "medium",
};

export default Button;
