import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainContainer />
      </Provider>

    </div>
  );
}

export default App;



// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { Screen1 } from "./Component/Screen1";
// import { Screen2 } from "./Component/Screen2";
// const App = () => {
//   const { email, password } = useSelector((state) => state);
//   const [navigate, setNavigate] = useState(false)

//   return <div>{((email && password) || navigate) ? <Screen2 /> : <Screen1 navigateTo={() => setNavigate(true)}/>}</div>;
// };
// export default App;
