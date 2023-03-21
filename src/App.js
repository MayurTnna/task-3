import {useSelector, useDispatch} from "react-redux"
import { fetchPosts } from "./redux/actions/action";
import { useEffect } from "react";
import "../src/assets/scss/main.scss"
import UserInfo from "./components/UserInfo";


function App() {
  return (
      <>
    <div className="App">
    <UserInfo/>
    </div>
      </>
  );
}

export default App;



