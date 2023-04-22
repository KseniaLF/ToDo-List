import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteAllTasks } from 'redux/operations';
// import { deleteAll, deleteAllCompleted } from 'redux/tasksSlice';

export const DeleteBtns = () => {
  // const dispatch = useDispatch();

  // const handleDeleteCompleted = () => dispatch(deleteAllCompleted());

  // const handleDeleteAll = () => dispatch(deleteAll());

  const dispatch = useDispatch();
  const handleDeleteAll = () => dispatch(deleteAllTasks());

  return (
    <>
      <Button onClick={() => handleDeleteAll()}>delete all</Button>

      {/*   <Button onClick={() => handleDeleteCompleted()}>
        delete all completed
      </Button> */}
    </>
  );
};
