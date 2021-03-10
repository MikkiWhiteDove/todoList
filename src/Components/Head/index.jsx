import React from 'react';
import style from './style.module.css';
import { Layout } from 'antd';

const { Header } = Layout;

const Head = () => (
  <Header className={style.navbar}>
    <h1>Список задач</h1>
  </Header>
);

export default Head;
