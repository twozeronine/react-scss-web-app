import React from "react";
import classnames from "classnames";

import "./Button.scss";

// size : large , medium , small
// color : blue , pink , gray
function Button({
  children,
  size,
  color,
  outline,
  fullWidth,
  className,
  ...rest
}) {
  return (
    <button
      className={classnames(
        "Button",
        size,
        color,
        {
          outline,
          fullWidth,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
