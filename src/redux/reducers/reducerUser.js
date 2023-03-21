import * as types from "../actionType";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};
//updates the state of a Redux store based on specific action type
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POST_START:
      return {
        ...state,
        loading: true,
      };
    //return new state
    case types.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case types.FETCH_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.FETCH_POST_DELETE:
      let prevData = [...state.posts];
      prevData.splice(state.posts.findIndex((item) => item.id === action.payload),1) ;
     
      return {
        ...state,
        posts:prevData
      };
      //This code first(index) searches for the index of the object with the specified ID in the state.posts array. If the object is found, it is removed using the splice() method. The if statement ensures that the object is only removed if it actually exists in the array. If the findIndex() method returns -1, it means that no object with the specified ID was found, so the code does nothing.
      case types.FETCH_POST_EDIT:
          const updatedDetail = state.posts.findIndex(item=>item.id===action.payload.id)
          console.log(updatedDetail);
           state.posts[updatedDetail].name = action.payload.name
           state.posts[updatedDetail].email = action.payload.email
           state.posts[updatedDetail].phone = action.payload.phone
           state.posts[updatedDetail].website = action.payload.website
            return{
                ...state,
                posts:[...state.posts]
            }
    default:  
      return state;
  }
};
export default postReducer;
