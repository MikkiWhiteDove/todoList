import React from 'react';
import PropTypes from 'prop-types';

import { TaskItem } from '../index';
// import { completeTask } from '../../actions/actionCreator';

const TaskList = ({ tasksList, removeTask, completeTask }) => (
    <div>
      {tasksList.map(({ id, text, date, isCompleted}) => (
        <TaskItem
          id={id}
          key={id}
          text={text}
          date={date}
          isCompleted={isCompleted}
          // removeTask={removeTask}
          // completeTask={completeTask}
          />
      ))}
    </div>
);


TaskList.propTypes = {
  tasksList: PropTypes.array,
  // removeTask: PropTypes.func,
  // completeTask: completeTask.func,
};

TaskList.defaultProps = {
  tasksList: [],
  // removeTask: () => {},
  // completeTask: () => {},
};

export default TaskList;
