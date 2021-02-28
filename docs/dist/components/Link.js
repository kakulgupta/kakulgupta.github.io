import React from "../../_snowpack/pkg/react.js";
export function Link(props) {
  return /* @__PURE__ */ React.createElement("a", {
    className: `p-5 underline text-blue-600 hover:text-blue-800 ${props.className}`,
    href: props.href
  }, props.name);
}
