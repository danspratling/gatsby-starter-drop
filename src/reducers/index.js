const initialState = { modal: "" }

const reducer = (state, action) => {
  console.log(state, action)
  return { modal: action.modal }
}

export { initialState, reducer }
