import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TasksService from '../../services/TasksService';
import TaskItem from '../taskItem';

const TaskList = ({ isActiveItem }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);


  useEffect(async () => {
    const items = await TasksService.getList();
    console.log('==items', items);
    setLoading(false);
    setItems(items);
  }, []);

  return (
    <div>
      <div>
        {loading && <span>Загружаем данные</span>}
        {!loading && <span>Загрузка завершена, получили {items.length} items</span>}
      </div>

      {items.map(item => <TaskItem task={item} />)}

      isActiveItem: {+isActiveItem}
      items length: {items.length}
    </div>
  );
};


TaskList.propTypes = {
  isActiveItem: PropTypes.bool,
};

export default TaskList;
