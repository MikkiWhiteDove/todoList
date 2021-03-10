import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import styles from './style.module.css';

const List = ({
  tasks, deleteItem, updateItem, toggleItem,
}) => (
  <div className={styles.todo_list}>
    <ul>
      {tasks.map(({ id, text, isCompleted }) => (
        <Item
          key={id}
          isCompleted={isCompleted}
          text={text}
          id={id}
          deleteItem={() => deleteItem(id)}
          updateItem={(value) => updateItem(value, id)}
          toggleItem={() => toggleItem(id)}
        />
      ))}
    </ul>
  </div>
);

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isCompleted: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
};

export default List;
