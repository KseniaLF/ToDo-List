import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import { HeaderWrapper } from './AppBar.styled';
import { DeleteBtns } from 'components/DeleteBtns/DeleteBtns';

export const AppBar = () => {
  return (
    <HeaderWrapper>
      <section>
        <h2>Tasks</h2>
        <TaskCounter />
      </section>
      <section>
        <h2>Filter by status</h2>
        <StatusFilter />
      </section>
      <section>
        {/* <h2>Delete</h2> */}

        <DeleteBtns />
      </section>
    </HeaderWrapper>
  );
};
