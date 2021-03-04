import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
// import axios from 'axios';



import { TaskAdd, TaskList } from '../../components/index';


const Home = () => {
    const { Header, Footer, Content } = Layout;
    const { activeFilter, taskText } = this.state;
    const { tasks } = this.props;
    const tasksList = [];
    const isTasksExist = tasksList && tasksList.length > 0;

    const handleInpuntChange = ({ target: { value } }) => {
        this.setState({
          taskText: value,
        })
    }

        return (
            <div>
                <Layout style={{ padding: 24, textAlign: 'center', height: '100vh'}}>
                    <Header ><h1 style={{ color:'white' }}>Список задач {tasks.length}</h1></Header>
                    <Content 
                        className="site-layout-background"
                        style={{
                          margin: '24px 16px',
                          padding: 24,
                          minHeight: 280,
                        }}
                    >
                        <TaskAdd onChange={handleInpuntChange} value={taskText}/>
                        {isTasksExist && <TaskList tasksList={tasks} />}
                    </Content>
                </Layout>
               
            </div>
        )
};
export default connect(state => ({
  tasks: state.tasks,
}))(Home);
