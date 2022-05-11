export const SAVE_JOKE = "SAVE_JOKE"
export const DELETE_JOKE = "DELETE_JOKE"

export const saveJoke = (joke) => {
    return {
      type: SAVE_JOKE,
      payload: { joke }
    }
  }
  
export const deleteJoke = (index) => {
return {
    type: DELETE_JOKE,
    payload: { index }
}
}
