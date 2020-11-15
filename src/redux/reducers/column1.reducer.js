const defaultState = { categories: '', clueColumn: [] };

const column1 = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_COLUMN_1':
      return action.payload;
    default:
      return state;
  }
};

export default column1;
