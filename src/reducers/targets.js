let TARGET_IDS = 0;

const target = (state, action) => {
  switch (action.type) {
    case "ADD_TARGET":
      return { id: TARGET_IDS++ };
    case "UPDATE_TARGET":
      return {
        ...state,
        score: state.score - 1
      };
    default:
      return;
  }
};

const targets = (state = [], action) => {
  switch (action.type) {
    case "ADD_TARGET":
      return [...state, target(undefined, action)];
    case "UPDATE_TARGET":
      return state.map(t => (t.id === action.id ? target(t, action) : t));
    case "DELETE_TARGET":
      return state.filter(t => t.id !== action.id);
    default:
      return;
  }
};