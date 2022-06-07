import { Genre } from 'types/types';

const initialState = {
  selectedItems: [],
};

const selectReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'SELECT_ITEM':
      return state.selectedItems.push();
    default:
      return state;
  }
};

export default selectReducer;
