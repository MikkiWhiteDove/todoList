import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import cx from 'classnames';

// @TODO найти в проект use-кейсы по использованию хуков useCallback, useMemo
// @TODO найти места где их использовать не нужно и объяснить почему

const TaskItem = ({ task }) => {
  return (
    <div key={task.id} className={cx({[styles.taskItem]: true, [styles.taskItem2]: false})}>
      "listId": {task.listId},
      "text": {task.text},
      "date": {task.date},
      "completed": {task.completed},
      "id": {task.id}
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.objectOf(PropTypes.any)
};

export default TaskItem;
