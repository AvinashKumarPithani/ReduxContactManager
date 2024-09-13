const initialState = {
  contacts: ["Ravi", "Raja", "Rama"],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PERSON":
      return { ...state, contacts: [...state.contacts, action.data] };
    default:
      return state;
  }
}
