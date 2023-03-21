import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions/action'
import {Bars} from "react-loader-spinner"
import UserCard from '../components/UserCard'
function UserInfo() {
    const data = useSelector((state) => state.posts)

    const loading = useSelector((state) => state.loading)
    const dispatch= useDispatch()

    useEffect(() =>{
        dispatch(fetchPosts());
    }, [dispatch]);
  return (
    <>
    <div className='row px-4 py-4'>
        {
            loading || data === null
            ?
            ( <div className='loader'>
            <Bars
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
            </div>):
            data && data.map((item, index) => <UserCard item={item}/>)
        }
        
    </div>
    </>
  )
}

export default UserInfo