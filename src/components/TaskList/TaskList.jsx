import { useSelector } from 'react-redux';
import { selectVisibleTasks } from 'redux/selectors';

import { Task } from 'components/Task/Task';
import { List } from './TaskList.styled';

export const TaskList = () => {
  const visibleTasks = useSelector(selectVisibleTasks);

  return (
    <List>
      {visibleTasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </List>
  );
};
