import { connect } from 'react-redux';
import {
  deleteItem, toggleItem, updateItem,
} from '../Actions';
import TodoList from '../Components/List';

const getVisibleTasks = (tasks) => {
  return tasks;
};



const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteItem(id)),
  updateItem: (text, id) => dispatch(updateItem(text, id)),
  toggleItem: (id) => dispatch(toggleItem(id)),
});

export default connect(getVisibleTasks, mapDispatchToProps)(TodoList);
