import { useContext } from 'react';
import ApplicationContext from '../context';
import Task from './task';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../store';
import { useAppSelector } from '../hooks';

const TaskList = () => {
  // const { tasks } = useContext(ApplicationContext);

  const tasks = useAppSelector((state:ApplicationState) => state.entities)

  return (
    <section className="task-list">
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};

export default TaskList;
