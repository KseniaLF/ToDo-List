import { useDispatch } from 'react-redux';
// import { addTask } from 'redux/actions';

import { Button } from 'components/Button/Button';
import { Form } from './TaskForm.styled';
import { addTask } from 'redux/operations';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // dispatch(addTask(form.elements.text.value));

    dispatch(addTask(event.target.elements.text.value));

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit" style={{ width: 130 }}>
        Add task
      </Button>
    </Form>
  );
};
