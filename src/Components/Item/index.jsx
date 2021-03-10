import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.module.css';
import { Layout, Button, Input, Checkbox } from 'antd';

const { Content } = Layout;

const Item = ({
  deleteItem, toggleItem, updateItem, isCompleted, text,
}) => {
  function handleChange(e) {
    updateItem(e.target.value);
  }

  return (
    <Content 
        className="site-layout-background"
        style={{
          display: 'flex',
          margin: '10px 16px',
          padding: 10,
        }}
    >
      <Checkbox checked={isCompleted ? true : false } onClick={toggleItem}></Checkbox>
      <Input
        type="text"
        value={text}
        className={classnames(isCompleted && styles.todoItemCompleted)}
        onChange={handleChange}
      />
      
      <Button type="button" onClick={deleteItem}>Delete</Button>
    </Content>
  );
};

Item.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Item;
