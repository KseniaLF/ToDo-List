import { Button } from 'components/Button/Button';
import { FilterWrapper } from './StatusFilter.styled';

export const StatusFilter = () => {
  return (
    <FilterWrapper>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </FilterWrapper>
  );
};
