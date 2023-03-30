import { Task } from 'components/Task/Task';
import { List } from './TaskList.styled';

export const TaskList = () => {
  return (
    <List>
      {[].map(task => (
        <li ckey={task.id}>
          <Task task={task} />
        </li>
      ))}
    </List>
  );
};
