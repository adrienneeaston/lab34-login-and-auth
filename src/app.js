import React from "react";
import LoginContext from "./components/auth/context.js";
import Login from "./components/auth/login.js";
import Auth from "./components/auth/auth.js";
import ToDo from "./components/todo/todo.js";

const App = props => {
  return (
    <LoginContext>
      <header>
        <Login />
      </header>
      <section>
        <Auth>
          <div>Welcome Home</div>
          <ToDo />
        </Auth>
        <Auth capability="editor">
          <button>Write an Article</button>
        </Auth>
      </section>
    </LoginContext>
  );
};

// import React from 'react';

// import ToDo from './components/todo/todo.js';

// export default class App extends React.Component {
//   render() {
//     return (
//       <>
//         <ToDo />
//       </>
//     );
//   }
// }
