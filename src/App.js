import {useSelector, useDispatch} from "react-redux"
import { fetchPosts } from "./redux/actions/action";
import { useEffect } from "react";
import "../src/assets/scss/main.scss"
import UserInfo from "./components/UserInfo";
import EditDetail from "./components/EditDetail";




function App() {
  return (
      <>
    <div className="App">
    <UserInfo/>
    <EditDetail/>
    </div>
      </>
  );
}

export default App;


// const select =useSelector((state)=>state.posts);
  
  // const dispatch=useDispatch()
  // useEffect(()=>{
  //   dispatch(fetchPosts())
  // },[])


  {/* <button onClick={() => dispatch(fetchPosts())}>Fetch Pst</button>
    {!loading ? (posts.map((post) =><h3>{post.body}</h3>)):(<h3>Loading...</h3>)}
  console.log("H") */}
    {/* {select && select.map((item)=>(
      
      <h1>{item.name}</h1>
      ))} */}
