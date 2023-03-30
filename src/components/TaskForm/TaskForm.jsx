import { Button } from 'components/Button/Button';
import { Form } from './TaskForm.styled';

export const TaskForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
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