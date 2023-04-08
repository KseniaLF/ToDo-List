import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteAll, deleteAllCompleted } from 'redux/actions';

export const DeleteBtns = () => {
  const dispatch = useDispatch();

  const handleDeleteCompleted = () => dispatch(deleteAllCompleted());

  const handleDeleteAll = () => dispatch(deleteAll());

  return (
    <>
      <Button onClick={() => handleDeleteAll()}>delete all</Button>

      <Button onClick={() => handleDeleteCompleted()}>
        delete all completed
      </Button>
    </>
  );
};
