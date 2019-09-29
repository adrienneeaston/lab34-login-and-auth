import React, { useContext, useState } from "react";
import { LoginContext } from "./context.js";

const If = props => {
  return !!props.condition ? props.children : null;
};

const Login = props => {
  const loginContext = useContext(LoginContext);
  const [formData, setFormData] = useState({});

  const _handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const _handleSubmit = e => {
    e.preventDefault();
    loginContext.login(formData);
  };

  return (
    <>
      <If condition={loginContext.loggedIn}>
        <button onClick={loginContext.logout}>Log Out</button>
      </If>

      <If condition={!LoginContext.loggedIn}>
        <form onSubmit={_handleSubmit}>
          <input
            type="text"
            placeholder="UserName"
            name="username"
            onChange={_handleChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={_handleChange}
          />
          <button>Login</button>
        </form>
      </If>
    </>
  );
};

export default Login;

// import React from 'react';
// import { LoginContext } from './context.js';

// const If = props => {
//   return !!props.condition ? props.children : null;
// };

// class Login extends React.Component {
//   static contextType = LoginContext;

//   constructor(props) {
//     super(props);
//     this.state = { username: '', password: '' };
//   }

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.context.login(this.state.username, this.state.password);
//   };

//   render() {
//     return (
//       <>
//         <If condition={this.context.loggedIn}>
//           <button onClick={this.context.logout}>Log Out</button>
//         </If>

//         <If condition={!this.context.loggedIn}>
//           <form onSubmit={this.handleSubmit}>
//             <input
//               placeholder="UserName"
//               name="username"
//               onChange={this.handleChange}
//             />
//             <input
//               placeholder="password"
//               name="password"
//               onChange={this.handleChange}
//             />
//             <button>Login</button>
//           </form>
//         </If>
//       </>
//     );
//   }
// }

// export default Login;
