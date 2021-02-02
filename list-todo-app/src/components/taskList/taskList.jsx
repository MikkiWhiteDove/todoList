import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import TasksService from '../../services/TasksService';
import TaskItem from '../taskItem';

const TaskList = ({ isActiveItem }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const data = await TasksService.getList();
    console.log('==items', data);
    setLoading(false);
    setItems(data);
  }, []);

  const removeItem = useCallback((itemId) => {
    const newItems = items.filter(item => item.id !== itemId).concat();
    setItems(newItems);
  }, [setItems]);

  return (
    <div>
      <div>
        {loading && <span>Загружаем данные</span>}
        {!loading && <span>Загрузка завершена, получили {items.length} items</span>}
      </div>

      {items.map(item => <TaskItem key={item.id} task={item} onRemoveItem={removeItem} />)}

      isActiveItem: {+isActiveItem}
      items length: {items.length}
    </div>
  );
};


TaskList.propTypes = {
  isActiveItem: PropTypes.bool,
};

export default TaskList;
