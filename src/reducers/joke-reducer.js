import { SAVE_JOKE, DELETE_JOKE } from "../actions";

const jokeReducer = (state = [], action) => {
    switch(action.type) {
      case SAVE_JOKE:
        const { joke } = action.payload
        return [...state, { joke }]
  
      case DELETE_JOKE:
        const { index } = action.payload
        return [...state.slice(0, index), ...state.slice(index + 1)]

  
      default:
        return state
    }
  }
  
  export default jokeReducer;