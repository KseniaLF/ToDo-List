import { useDispatch } from 'react-redux';

import { MdClose } from 'react-icons/md';
import { Wrapper } from './Task.styled';
import { deleteTask, toggleCompleted } from 'redux/tasksSlice';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <Wrapper>
      <div>
        <input
          type="checkbox"
          onChange={handleToggle}
          checked={task.completed}
        />
      </div>
      <p>{task.text}</p>
      <button type="button" onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </Wrapper>
  );
};
