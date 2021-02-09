import service from './service';

const ENDPOINT__TASKS_LIST = 'http://localhost:3009/tasks/';

const TasksService = {
  getList: async () => {
    try {
        const res = await service.get(ENDPOINT__TASKS_LIST);
        if (res.status === 200) {
          return res.data;
        }
    } catch (err) {
        throw err;
    }
    return false;
  },
};

export default TasksService;
