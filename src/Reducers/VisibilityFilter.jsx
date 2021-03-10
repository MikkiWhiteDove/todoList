import { SHOW_ALL } from '../Constants/ActionTypes';

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SHOW_ALL:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
