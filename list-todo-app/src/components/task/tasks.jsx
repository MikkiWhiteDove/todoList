import React from 'react';
import {Button, Layout} from 'antd';
import {EditFilled} from '@ant-design/icons';

import {Task, AddTask} from '../index.jsx'
import {List} from 'antd/lib/form/Form';
import axios from 'axios';

const { Header, PageHeader, Content, Footer } = Layout;

const Tasks = () => {
  return (
    <div>
      task
    </div>
  );
};


// const Tasks = ({lists}) => {
//   const newList = lists.map(list => {
//     if (list.id === listId) {
//       list.tasks = list.tasks.map(task => {
//         if (task.id === taskObj.id) {
//           task.text = newTaskText;
//         }
//         return task;
//       });
//     }
//     return list;
//   });
//   setLists(newList);
//   axios
//     .patch('http://localhost:3009/tasks/' + taskObj.id, {
//       text: newTaskText
//     })
//     .catch(() => {
//       alert('Не удалось обновить задачу');
//     });
// };
//
// const EditTitle = () => {
//   const newTitle = window.prompt('Spisok', list.name)
//   if (newTitle) {
//     onEditTitle(list.id, newTitle);
//     axios
//       .patch('http://localhost:3009/lists/' + list.id, {
//         name: newTitle
//       })
//       .catch(() => {
//         window.prompt('no tasks');
//       });
//   }
// };
//
// return (
//   <div className="todo__tasks">
//     <Header
//       style={{
//         background: '#d9d9d9',
//         height: '10vw',
//       }}
//     >
//       <PageHeader
//         style={{
//           background: '#ffffff',
//         }}
//         title="Title"
//         extra={[
//           <Button
//             danger
//             type="primary"
//             // onClick={editTitle}
//           >
//             <EditFilled/>
//           </Button>,
//         ]}
//       >
//       </PageHeader>
//     </Header>
//     <div className="todo__tasks_content">
//       {!withoutEmpty && List.tasks && !List.tasks.length && (
//         <h1>No tasks</h1>
//       )}
//       {List.tasks &&
//       List.tasks.map(task => (
//         <Content
//           style={{
//             overflow: 'auto',
//             padding: '10px 50px',
//           }}
//         >
//           <Task
//             key={task.id}
//             list={list}
//             onEdit={() => {
//             }}
//             onRemove={() => {
//             }}
//             onComplete={() => {
//             }}
//             {...task}
//           />
//         </Content>
//       ))}
//
//
//       <Footer>
//         <AddTask
//           key={list.id}
//           list={list}
//           onAddTask={onAddTask}
//         />
//       </Footer>
//     </div>
//   </div>
// )
// };

export default Tasks;
