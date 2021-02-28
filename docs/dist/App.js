import React from "../_snowpack/pkg/react.js";
import profilePic from "./assets/profile_pic.jpg.proxy.js";
import {Link} from "./components/Link.js";
function App() {
  return /* @__PURE__ */ React.createElement("main", {
    className: "p-20"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-wrap"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-60"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "rounded-full ring-8 ring-green-700 ring-opacity-50",
    src: profilePic,
    alt: "Profile Kakul Gupta"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "pl-16"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-6xl"
  }, "Hi! I'm Kakul Gupta"), /* @__PURE__ */ React.createElement("p", null, "Fullstack developer"))), /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-wrap justify-center"
  }, /* @__PURE__ */ React.createElement(Link, {
    href: "https://github.com/kakulgupta/",
    name: "Github"
  }), /* @__PURE__ */ React.createElement(Link, {
    href: "mailto:kakul.gupta009@gmail.com",
    name: "Email"
  }), /* @__PURE__ */ React.createElement(Link, {
    href: "https://linkedin.com/in/kakul-gupta/",
    name: "LinkedIn"
  }), /* @__PURE__ */ React.createElement(Link, {
    href: "https://twitter.com/kakul009",
    name: "Twitter"
  })));
}
export default App;
