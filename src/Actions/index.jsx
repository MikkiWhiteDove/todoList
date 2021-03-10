import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, TOGGLE_ITEM } from '../Constants/ActionTypes';

export const addItem = (text) => ({
  type: ADD_ITEM,
  payload: text,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

export const updateItem = (text, id) => ({
  type: UPDATE_ITEM,
  payload: {
    text,
    id,
  },
});

export const toggleItem = (id) => ({
  type: TOGGLE_ITEM,
  payload: id,
});
